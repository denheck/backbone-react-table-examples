var Bears = require('../collections/bears');
var React = require('react');
var BackboneReactComponent = require('backbone-react-component');
var $ = require('jquery');
var _ = require('underscore');

/**
 * The basic structure of a CRUD controller. Includes create, edit and list pages for modifying a database table.
 */
module.exports = (function () {
    var bears = new Bears();

    var BearForm = React.createClass({
        handleSubmit: function (e) {
            e.preventDefault();
            var name = this.refs.name.getDOMNode().value.trim();
            var location = this.refs.location.getDOMNode().value.trim();

            if (!name || !location) {
                return;
            }

            bears.create({
                name: name,
                location: location
            });

            this.refs.name.getDOMNode().value = '';
            this.refs.location.getDOMNode().value = '';
        },
        render: function () {
            var name = this.props.name;
            var location = this.props.location;

            return (
                <form className="bearForm" onSubmit={this.handleSubmit}>
                    <input type="text" value={name} placeholder="Yogi" ref="name" />
                    <input type="text" value={location} placeholder="Yellowstone" ref="location" />
                    <input type="submit" value="Post" />
                </form>
            );
        }
    });

    return {
        list: function () {
            bears.fetch();

            var Table = React.createClass({
                mixins: [BackboneReactComponent],
                render: function () {
                    var idAttribute = this.props['id-attribute'];
                    var collection = this.props.collection;
                    var columns = this.props.columns.map(function (column) {
                        if (_(column).isString()) {
                            column = { name: column, label: column };
                        }

                        return column;
                    });

                    var tableRows = collection.map(function (item) {
                        return (
                            <TableRow key={item[idAttribute]} id={item[idAttribute]} data={item} columns={columns} />
                        );
                    });

                    var headerRows = columns.map(function (column) {
                        var key = column.name + '_header';

                        return (
                            <th key={key}>{column.label}</th>
                        );
                    });

                    return (
                        <table className="table table-hover">
                            <thead>{headerRows}</thead>
                            <tbody>{tableRows}</tbody>
                            <tfoot></tfoot>
                        </table>
                    );
                }
            });

            var TableRow = React.createClass({
                render: function () {
                    var rowData = this.props.data;
                    var columns = this.props.columns;
                    var id = this.props.id;

                    var tableCells = _(columns).map(function (column) {
                        var value = rowData[column.name];
                        var key = column.name + "_" + id;

                        return (
                            <td key={key}>{value}</td>
                        );
                    });

                    return (
                        <tr>{tableCells}</tr>
                    );
                }
            });

            /**
             * render my components in the DOM
             */
            // TODO: shouldn't have to use jQuery
            $(function () {
                // TODO: should pass an array of objects { key: "_id", label: "id" }
                var columns = [
                    {
                        name: "_id",
                        label: "id"
                    },
                    'name',
                    'location'
                ];

                React.render(
                    <Table collection={bears} columns={columns} id-attribute={bears.model.prototype.idAttribute}/>,
                    document.getElementById('main')
                );
            });
        },
        create: function () {
            /**
             * render my components in the DOM
             */
            // TODO: shouldn't have to use jQuery
            $(function () {
                React.render(
                    <BearForm />,
                    document.getElementById('main')
                );
            });
        },
        edit: function (id) {
            var bear = bears.get(id);

            /**
             * render my components in the DOM
             */
            // TODO: shouldn't have to use jQuery
            $(function () {
                React.render(
                    <BearForm model={bear}/>,
                    document.getElementById('main')
                );
            });
        }
    }
})();

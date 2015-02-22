var React = require('react');
var BackboneReactComponent = require('backbone-react-component');
var _ = require('underscore');

var Table = React.createClass({
    mixins: [BackboneReactComponent],
    render: function () {
        var idAttribute = this.props['id-attribute'];
        var collection = this.getCollection();
        var columns = this.props.columns.map(function (column) {
            if (_(column).isString()) {
                column = { name: column, label: column };
            }

            return column;
        });

        var tableRows = collection.map(function (model) {
            var item = model.attributes;

            return (
                <TableRow key={item[idAttribute]} id={item[idAttribute]} data={item} columns={columns} />
            );
        });

        var headerRows = columns.map(function (column) {
            var key = column.name + '_header';
            return (<TableHeaderRow key={key} label={column.label} name={column.name} collection={collection} />);
        });

        var currentPage = collection.state.currentPage;
        var startShown = collection.length > 0 ? (currentPage - 1) * collection.length + 1 : 0;
        var endShown = currentPage * collection.length;

        return (
            <div>
                <div>
                    <ShowCount collection={collection} />
                </div>
                <table className="table table-hover">
                    <thead>{headerRows}</thead>
                    <tbody>{tableRows}</tbody>
                </table>
                <div>
                    <TableCount start-shown={startShown}
                        end-shown={endShown}
                        total={collection.state.totalRecords} />
                    <Paginator collection={collection} />
                </div>
            </div>
        );
    }
});

var TableHeaderRow = React.createClass({
    mixins: [BackboneReactComponent],
    sortState: null,
    changeSort: function () {
        var collection = this.getCollection();

        if (this.sortState === 1) {
            this.sortState = null;
            collection.setSorting(null);
        } else if (this.sortState === -1) {
            this.sortState = 1;
            collection.setSorting(this.props.name, this.sortState);
        } else {
            this.sortState = -1;
            collection.setSorting(this.props.name, this.sortState);
        }

        collection.getFirstPage();
    },
    render: function () {
        var label = this.props.label;
        return (<th onClick={this.changeSort}>{label}</th>);
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

var Paginator = React.createClass({
    mixins: [BackboneReactComponent],
    previous: function (event) {
        event.preventDefault();
        this.getCollection().getPreviousPage();
    },
    next: function (event) {
        event.preventDefault();
        this.getCollection().getNextPage();
    },
    render: function () {
        var collection = this.getCollection();
        var previousDisabled = collection.state.currentPage <= collection.state.firstPage;
        var nextDisabled = collection.state.currentPage >= collection.state.totalPages;

        return (
            <div class="btn-group" role="group">
                <button type="button"
                    className="btn btn-default"
                    onClick={this.previous}
                    disabled={previousDisabled}>
                    Previous Page
                </button>
                <button type="button"
                    className="btn btn-default"
                    onClick={this.next}
                    disabled={nextDisabled}>
                    Next Page
                </button>
            </div>
        );
    }
});

var TableCount = React.createClass({
    render: function () {
        var total = this.props.total;
        var startShown = this.props['start-shown'];
        var endShown = this.props['end-shown'];

        return (<div>Showing {startShown} to {endShown} of {total} entries</div>);
    }
});

var ShowCount = React.createClass({
    mixins: [BackboneReactComponent],
    changePageSize: function () {
        var select = this.refs.page_size.getDOMNode();
        var pageSize = parseInt(select.options[select.selectedIndex].value);
        this.getCollection().setPageSize(pageSize);
    },
    render: function () {
        return (
            <select onChange={this.changePageSize} ref="page_size">
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
            </select>
        );
    }
});


module.exports = Table;
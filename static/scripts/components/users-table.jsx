var React = require('react');
var BackboneReactTable = require('backbone-react-table');

var Table = BackboneReactTable.Table;
var TableRow = BackboneReactTable.TableRow;
var TablePageSize = BackboneReactTable.TablePageSize;
var TableHeader = BackboneReactTable.TableHeader;
var TableCount = BackboneReactTable.TableCount;
var TablePaginator = BackboneReactTable.TablePaginator;
var TableElement = BackboneReactTable.TableElement;
var TableBody = BackboneReactTable.TableBody;
var TableHead = BackboneReactTable.TableHead;

var rowRender = function (model, columns, defaultRender) {
    if (model.get('first_name') !== 'Joseph') {
        return defaultRender(model, columns);
    }

    return <TableRow
            className="info"
            key={model.id}
            model={model}
            columns={columns} />
};

module.exports = React.createClass({
    render: function () {
        return (
            <Table collection={this.props.users}>
                <TablePageSize />
                <TableElement>
                    <TableHead>
                        <TableHeader name={"_id"} label={"id"} />
                        <TableHeader name={"first_name"} label={"First"} sort={true} />
                        <TableHeader name={"last_name"} label={"Last"} sort={true} />
                        <TableHeader name={"email"} label={"Email"} sort={true} />
                        <TableHeader name={"country"} label={"Country"} sort={true} />
                    </TableHead>
                    <TableBody rowRender={rowRender} />
                </TableElement>
                <TableCount />
                <TablePaginator />
            </Table>
        );
    }
});

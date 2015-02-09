define(['backgrid'], function (Backgrid) {
    return Backgrid.Grid.extend({
        columns: [
            {
                name: "name",
                label: "Name",
                editable: false,
                cell: "string"
            }
        ]
    });
});
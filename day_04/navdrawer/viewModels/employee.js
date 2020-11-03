define(['accUtils','knockout', 'jquery', 'text!data/data.json', 'ojs/ojarraydataprovider', 'ojs/ojchart'],
 function(accUtils, ko, $, data, ArrayDataProvider) {
    function EmployeesViewModel() {

        // ---------------------------------------------------

        var self = this;

        // Observables for name and age
        self.name = ko.observable("Purushotham");
        self.age  = ko.observable("35");

        self.threeDValue = ko.observable('on');
        self.innerRadius = ko.observable(0.5)
        
  
        /* chart data */
        var data2 = JSON.parse(data);
        self.datasource2 = ko.observableArray(data2);

        // ---------------------------------------------------
        
    }
    return EmployeesViewModel;
  }
);
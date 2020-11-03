/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(['accUtils','ojs/ojmodel', 'ojs/ojcollectiondataprovider','jquery', 'knockout', 'ojs/ojbootstrap', 'ojs/ojarraydataprovider', 'ojs/ojknockout', 'ojs/ojtable'],
 function(accUtils, Model, CollectionDataProvider, $, ko, Bootstrap, ArrayDataProvider) {
    function CustomerViewModel() {
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.


      // -----------------------------------------------------------------------------
      var self = this;

      self.parseData = function(response) {
        return {name: response['name'],
            short_desc: response['short_desc']
        };
      };

      self.serviceURL = "https://apex.oracle.com/pls/apex/oraclejet/lp/activities/";
      self.Department = Model.Model.extend({
              urlRoot: self.serviceURL,
              parse: self.parseData,
              idAttribute: 'id'
          });

      self.DeptCol = ko.observable();
      self.datasource = ko.observable();
      self.myDept = new self.Department();

      // Create a base object "class" for the entire dataset
      self.DeptCollection = Model.Collection.extend({
        url: self.serviceURL + "?limit=50",
        model: self.myDept
      });

      // Create a specific instance for the departments.  This will be filled with instances of the
      // model "department" for each record when the data is retrieved from the data service
      self.DeptCol(new self.DeptCollection());
      self.datasource(new CollectionDataProvider(self.DeptCol()));


      // -----------------------------------------------------------------------------

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here.
       * This method might be called multiple times - after the View is created
       * and inserted into the DOM and after the View is reconnected
       * after being disconnected.
       */
      this.connected = () => {
        accUtils.announce('Customers page loaded.', 'assertive');
        document.title = "Customers";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      this.disconnected = () => {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      this.transitionCompleted = () => {
        // Implement if needed
      };
    }

    /*
     * Returns an instance of the ViewModel providing one instance of the ViewModel. If needed,
     * return a constructor for the ViewModel so that the ViewModel is constructed
     * each time the view is displayed.
     */
    return CustomerViewModel;
  }
);

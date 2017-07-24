(function() {
    'use strict';

    angular
        .module('app.items')
        .controller('ItemsCtrl', ItemsCtrl);

    ItemsCtrl.$inject = ['dataService'];

    /////////////////

    function ItemsCtrl(dataService) {
        var self = this;
        this.items = dataPrepareFnItems();
        this.comments = dataPrepareFnComments();
        this.newItem = {};
        this.newComment = {};
        this.currentItem = self.items[0];
        this.currentUserAvatar = "images/ava_currentUser.png";
        this.setCurrentItem = setCurrentItem;
        this.isCurrentItem = isCurrentItem;
        this.addNewItemFn = addNewItemFn;
        this.addNewCommentFn = addNewCommentFn;
        this.removeItemFn = removeItemFn;

        //----------------------------------------------------------------------------------------------
        // Load Data
        //----------------------------------------------------------------------------------------------

        function dataPrepareFnItems() {
            return dataService.getItems();
        }

        function dataPrepareFnComments() {
            return dataService.getComments();
        }

        //----------------------------------------------------------------------------------------------
        // View logic
        //----------------------------------------------------------------------------------------------

        function setCurrentItem(item) {
            self.currentItem = item;
        }

        function isCurrentItem(item) {
            return item.id === self.currentItem.id;
        }

        //----------------------------------------------------------------------------------------------
        // Create Uniq ID
        //----------------------------------------------------------------------------------------------

        function uniqId() {
            return '_' + Math.random().toString(36).substr(2, 9);
        }

        //----------------------------------------------------------------------------------------------
        // CRUD
        //----------------------------------------------------------------------------------------------

        function addNewItemFn() {
            if (self.newItem.name.length > 0) {
                self.newItem.id = uniqId();
                dataService.addNewItem(self.newItem);
                self.items = dataPrepareFnItems();
                self.newItem = {};
            }
            return false;
        }

        function addNewCommentFn() {
            if(self.newComment.text.length > 0) {
                self.newComment.id = uniqId();
                self.newComment.itemName = self.currentItem.name;
                self.newComment.ava = self.currentUserAvatar;
                dataService.addNewComment(self.newComment);
                self.comments = dataPrepareFnComments();
                self.newComment = {};
            }
            return false;
        }

        function removeItemFn(item) {
            _.remove(dataService.getItems(), function(i) {
                return i.id == item.id;
            });
            dataService.updateItems();
        }
    }
})();
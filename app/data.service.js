(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataService', dataService);

    dataService.$inject = ['$localStorage'];

    /////////////

    function dataService($localStorage) {
        var local = $localStorage;
        // local.$reset();
        var items = [
            {"id": 1, "name": "Priority tasks"},
            {"id": 2, "name": "Secondary tasks"}
        ];
        var comments = [
            {
                "id": 1,
                "ava": "images/ava_user1.png",
                "text": "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu-larized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s",
                "itemName": "Secondary tasks"
            },
            {
                "id": 2,
                "ava": "images/ava_user2.png",
                "text": "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu-larized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"
                ,
                "itemName": "Secondary tasks"
            },
            {
                "id": 3,
                "ava": "images/ava_user1.png",
                "text": "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu-larized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"
                ,
                "itemName": "Secondary tasks"
            },
            {
                "id": 4,
                "ava": "images/ava_user1.png",
                "text": "A variation of the ordinary lorem ipsum text has been used in typesetting since the 1960s or earlier, when it was popu-larized by advertisements for Letraset transfer sheets. It was introduced to the Information Age in the mid-1980s"
                ,
                "itemName": "Priority tasks"
            }
        ];

        var factory = {
            getItems: getItems,
            getComments: getComments,
            addNewItem: addNewItem,
            addNewComment: addNewComment,
            updateItems: updateItems
        };
        return factory;

        function getItems() {
            if (!local.items) {
                return items;
            } else {
                return local.items;
            }
        }

        function getComments() {
            if (!local.comments) {
                return comments;
            } else {
                return local.comments;
            }
        }

        function addNewItem(newItem) {
            items.push(newItem);
            local.items = items;
        }

        function addNewComment(newComment) {
            comments.push(newComment);
            local.comments = comments;
        }

        function updateItems() {
            local.items = items;
        }
    }
})();
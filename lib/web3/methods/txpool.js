/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file txpool.js
 * @author João Rafael <jprafael@student.dei.uc.pt>
 * @date 2017
 */

"use strict";

var Method = require('../method');
var Property = require('../property');
var formatters = require('../formatters');

function Txpool(web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });

    properties().forEach(function(p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
    });
}

var methods = function () {
    return [
        new Method({
            name: 'content',
            call: 'txpool_content',
            params: 0
        }),
        new Method({
            name: 'inspect',
            call: 'txpool_inspect',
            params: 0
        }),
        new Method({
            name: 'status',
            call: 'txpool_status',
            params: 0
        }),
    ];
};

var properties = function () {
    return [];
};


module.exports = Txpool;

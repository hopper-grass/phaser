var Class = require('../../../utils/Class');
var Event = require('../../../events/Event');

var DragEnterEvent = new Class({

    Extends: Event,

    initialize:

    function DragEnterEvent (pointer, gameObject, dropZone)
    {
        Event.call(this, 'DRAG_ENTER_EVENT');

        //  The Pointer that triggered the event
        this.pointer = pointer;

        //  The native DOM event (MouseEvent, TouchEvent, etc)
        this.event = pointer.event;

        //  The Game Object the event occurred on
        this.gameObject = gameObject;

        //  The camera on which the input event occurred
        this.camera = gameObject.input.camera;

        //  The drop zone the game object was dropped on
        this.dropZone = dropZone;
    }

});

module.exports = DragEnterEvent;

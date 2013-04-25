/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg',
            type:'image',
            rect:['0px','0','1920px','1080px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"wallpaper-1476994.jpg",'0px','0px']
         },
         {
            id:'logo-trans2_blur',
            type:'image',
            rect:['841px','289px','241px','115px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo-trans2.png",'0px','0px'],
            filter:[0,0,1,1,0,0,0,23.076918822068,"rgba(0,0,0,0)",0,0,0]
         },
         {
            id:'logo-trans2',
            type:'image',
            rect:['841px','289px','241px','115px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"logo-trans2.png",'0px','0px']
         },
         {
            id:'control',
            type:'image',
            rect:['847px','384px','55px','55px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"control.png",'0px','0px']
         },
         {
            id:'input',
            type:'image',
            rect:['682px','384px','55px','55px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"input.png",'0px','0px']
         },
         {
            id:'output',
            type:'image',
            rect:['1013px','384px','55px','55px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"output.png",'0px','0px']
         },
         {
            id:'record',
            type:'image',
            rect:['1178px','384px','55px','55px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"record.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_output}": [
            ["style", "top", '384px'],
            ["style", "opacity", '1'],
            ["style", "left", '1013px']
         ],
         "${_logo-trans2}": [
            ["style", "height", '115px'],
            ["style", "top", '280px'],
            ["style", "left", '841px'],
            ["style", "width", '241px']
         ],
         "${_record}": [
            ["style", "top", '384px'],
            ["style", "opacity", '1'],
            ["style", "left", '1178px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '1080px'],
            ["style", "width", '1920px']
         ],
         "${_logo-trans2_blur}": [
            ["style", "top", '280px'],
            ["style", "height", '115px'],
            ["subproperty", "filter.blur", '23.076918822068px'],
            ["style", "left", '841px'],
            ["style", "width", '241px']
         ],
         "${_input}": [
            ["style", "top", '384px'],
            ["style", "opacity", '1'],
            ["style", "left", '682px']
         ],
         "${_control}": [
            ["style", "top", '384px'],
            ["style", "opacity", '1'],
            ["style", "left", '847px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: false,
         timeline: [
            { id: "eid7", tween: [ "style", "${_logo-trans2}", "top", '280px', { fromValue: '280px'}], position: 0, duration: 0 },
            { id: "eid8", tween: [ "style", "${_logo-trans2}", "top", '198px', { fromValue: '280px'}], position: 250, duration: 1000 },
            { id: "eid5", tween: [ "style", "${_logo-trans2_blur}", "top", '280px', { fromValue: '280px'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_logo-trans2_blur}", "top", '198px', { fromValue: '280px'}], position: 250, duration: 1000 },
            { id: "eid10", tween: [ "style", "${_output}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0 },
            { id: "eid9", tween: [ "style", "${_record}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0 },
            { id: "eid11", tween: [ "style", "${_input}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0 },
            { id: "eid12", tween: [ "style", "${_control}", "opacity", '1', { fromValue: '1'}], position: 1250, duration: 0 }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-65241670");

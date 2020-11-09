/**
 * Created by yanglizhe on 2015/11/2.
 */
(function(){
    var SVG_NS = "http://www.w3.org/2000/svg";
    var colors = ["rgb(146,210,245)","rgb(122,204,242)","rgb(173,220,236)","rgb(170,219,236)","rgb(135,205,230)","rgb(128,204,222)","rgb(202,231,238)","rgb(169,218,223)","rgb(143,208,214)","rgb(145,208,208)","rgb(141,206,202)","rgb(195,227,224)","rgb(162,212,206)","rgb(162,212,200)","rgb(181,220,201)","rgb(178,219,201)","rgb(170,212,162)","rgb(209,228,182)","rgb(225,235,183)","rgb(238,238,142)","rgb(246,240,142)","rgb(252,245,157)","rgb(255,245,131)","rgb(255,245,130)","rgb(254,243,96)","rgb(255,239,94)","rgb(255,236,124)","rgb(254,242,184)","rgb(255,238,132)","rgb(254,228,131)","rgb(252,222,150)","rgb(252,217,114)","rgb(251,219,158)","rgb(247,186,123)","rgb(253,231,184)","rgb(248,202,166)","rgb(249,208,176)","rgb(244,175,144)","rgb(247,198,184)","rgb(245,189,188)","rgb(242,170,181)","rgb(246,195,202)","rgb(245,198,208)","rgb(243,179,196)","rgb(247,204,221)","rgb(250,213,221)","rgb(245,187,211)","rgb(242,169,196)","rgb(246,198,220)","rgb(240,155,194)","rgb(242,179,206)","rgb(240,186,212)","rgb(242,200,220)","rgb(239,197,221)","rgb(235,203,224)","rgb(231,212,231)","rgb(207,180,213)","rgb(202,170,207)","rgb(188,163,205)","rgb(227,218,235)","rgb(196,189,222)","rgb(183,186,221)","rgb(167,172,214)","rgb(208,221,240)","rgb(208,229,246)","rgb(191,215,238)","rgb(181,217,243)","rgb(159,205,238)","rgb(202,231,249)","rgb(85,185,234)","rgb(29,183,237)","rgb(86,194,233)","rgb(103,197,231)","rgb(38,185,218)","rgb(35,184,214)","rgb(158,214,227)","rgb(118,199,203)","rgb(118,199,202)","rgb(116,197,198)","rgb(83,189,185)","rgb(180,221,217)","rgb(136,203,194)","rgb(122,197,176)","rgb(154,209,186)","rgb(171,216,195)","rgb(160,208,156)","rgb(193,221,162)","rgb(214,230,168)","rgb(228,230,95)","rgb(240,234,94)","rgb(254,242,111)","rgb(255,243,89)","rgb(255,243,99)","rgb(253,240,65)","rgb(255,235,74)","rgb(255,231,97)","rgb(255,235,152)","rgb(255,233,101)","rgb(251,209,81)","rgb(252,208,121)","rgb(250,200,75)","rgb(249,210,143)","rgb(243,162,83)","rgb(250,205,139)","rgb(245,178,126)","rgb(244,175,136)","rgb(242,160,120)","rgb(240,153,126)","rgb(239,136,129)","rgb(241,155,164)","rgb(235,114,133)","rgb(241,162,176)","rgb(239,136,162)","rgb(241,165,191)","rgb(241,167,184)","rgb(237,135,174)","rgb(236,130,170)","rgb(234,128,174)","rgb(229,106,163)","rgb(234,137,182)","rgb(230,152,191)","rgb(211,124,175)","rgb(224,165,201)","rgb(215,168,204)","rgb(210,179,211)","rgb(186,140,189)","rgb(172,137,188)","rgb(157,132,189)","rgb(194,184,219)","rgb(170,158,205)","rgb(145,148,201)","rgb(126,132,191)","rgb(158,173,216)","rgb(177,208,236)","rgb(86,136,199)","rgb(149,194,233)","rgb(107,175,224)","rgb(170,217,245)","rgb(0,148,215)","rgb(0,161,226)","rgb(0,168,233)","rgb(0,170,221)","rgb(0,163,216)","rgb(0,167,203)","rgb(85,191,205)","rgb(0,167,171)","rgb(0,174,183)","rgb(0,176,173)","rgb(1,164,149)","rgb(111,196,190)","rgb(0,167,142)","rgb(3,176,146)","rgb(115,194,165)","rgb(146,206,180)","rgb(101,184,94)","rgb(175,212,134)","rgb(199,222,140)","rgb(212,221,42)","rgb(231,231,83)","rgb(244,237,71)","rgb(253,237,1)","rgb(255,239,1)","rgb(255,233,0)","rgb(255,232,64)","rgb(254,220,63)","rgb(253,216,99)","rgb(254,226,92)","rgb(250,194,35)","rgb(248,186,75)","rgb(248,187,38)","rgb(247,183,86)","rgb(241,147,57)","rgb(243,165,80)","rgb(242,151,64)","rgb(240,142,67)","rgb(240,140,91)","rgb(238,128,74)","rgb(233,99,88)","rgb(233,86,94)","rgb(232,80,89)","rgb(233,95,121)","rgb(233,84,114)","rgb(232,90,132)","rgb(230,78,109)","rgb(231,74,130)","rgb(232,88,145)","rgb(227,35,134)","rgb(224,45,139)","rgb(225,110,165)","rgb(210,94,157)","rgb(191,65,146)","rgb(206,134,182)","rgb(182,108,169)","rgb(143,77,154)","rgb(144,82,157)","rgb(149,94,162)","rgb(111,76,156)","rgb(130,109,175)","rgb(136,120,182)","rgb(119,124,187)","rgb(83,85,160)","rgb(55,80,160)","rgb(58,129,195)","rgb(0,84,165)","rgb(72,142,204)","rgb(0,110,185)","rgb(102,183,230)","rgb(1,102,180)","rgb(1,114,190)","rgb(0,130,206)","rgb(0,144,218)","rgb(1,156,212)","rgb(0,156,199)","rgb(0,157,184)","rgb(0,143,138)","rgb(0,157,162)","rgb(0,161,156)","rgb(1,156,134)","rgb(1,159,136)","rgb(1,154,110)","rgb(0,161,113)","rgb(0,156,85)","rgb(1,160,80)","rgb(30,171,56)","rgb(100,182,54)","rgb(150,199,48)","rgb(199,216,32)","rgb(211,222,65)","rgb(236,233,12)","rgb(248,235,0)","rgb(254,239,2)","rgb(254,225,0)","rgb(255,221,0)","rgb(252,207,26)","rgb(249,190,0)","rgb(248,190,0)","rgb(246,174,1)","rgb(245,161,1)","rgb(241,146,0)","rgb(240,140,2)","rgb(236,111,1)","rgb(238,122,9)","rgb(238,126,0)","rgb(237,113,1)","rgb(236,113,30)","rgb(236,104,31)","rgb(233,68,48)","rgb(231,62,48)","rgb(233,53,75)","rgb(231,48,52)","rgb(229,18,69)","rgb(229,2,84)","rgb(229,1,62)","rgb(228,1,83)","rgb(229,40,120)","rgb(224,0,112)","rgb(226,0,126)","rgb(216,58,142)","rgb(204,78,151)","rgb(183,23,133)","rgb(176,47,139)","rgb(158,47,140)","rgb(106,20,129)","rgb(123,53,142)","rgb(112,47,140)","rgb(88,39,136)","rgb(75,52,143)","rgb(107,91,164)","rgb(26,26,124)","rgb(22,39,137)","rgb(17,45,142)","rgb(1,56,143)","rgb(1,57,146)","rgb(0,60,148)","rgb(0,74,159)","rgb(0,78,160)","rgb(0,94,167)","rgb(1,96,161)","rgb(0,112,172)","rgb(1,125,185)","rgb(1,139,185)","rgb(0,134,170)","rgb(0,145,168)","rgb(2,127,123)","rgb(1,147,147)","rgb(0,156,149)","rgb(1,140,124)","rgb(0,154,130)","rgb(1,126,96)","rgb(0,128,93)","rgb(0,134,77)","rgb(1,155,69)","rgb(0,158,58)","rgb(80,174,52)","rgb(132,192,45)","rgb(179,191,19)","rgb(198,209,0)","rgb(215,209,1)","rgb(208,189,1)","rgb(222,200,0)","rgb(238,191,2)","rgb(224,183,1)","rgb(249,194,0)","rgb(215,163,0)","rgb(234,171,0)","rgb(241,150,0)","rgb(230,131,1)","rgb(227,128,0)","rgb(238,126,1)","rgb(222,91,0)","rgb(224,95,1)","rgb(231,102,0)","rgb(235,99,0)","rgb(233,94,0)","rgb(233,85,22)","rgb(231,62,43)","rgb(226,30,32)","rgb(221,15,36)","rgb(223,1,50)","rgb(209,0,62)","rgb(220,0,74)","rgb(209,0,57)","rgb(188,0,71)","rgb(223,0,105)","rgb(187,0,93)","rgb(189,0,107)","rgb(210,0,127)","rgb(197,46,139)","rgb(167,0,129)","rgb(168,1,130)","rgb(153,46,139)","rgb(94,6,106)","rgb(110,21,131)","rgb(99,28,132)","rgb(72,27,131)","rgb(68,38,138)","rgb(52,34,135)","rgb(21,18,109)","rgb(19,34,128)","rgb(5,46,137)","rgb(0,50,131)","rgb(10,44,131)","rgb(0,58,132)","rgb(0,69,147)","rgb(0,64,128)","rgb(1,63,113)","rgb(1,64,105)","rgb(0,84,122)","rgb(0,96,139)","rgb(0,115,147)","rgb(1,112,139)","rgb(0,123,138)","rgb(0,109,104)","rgb(0,95,95)","rgb(0,131,125)","rgb(0,111,95)","rgb(0,133,118)","rgb(0,107,85)","rgb(0,102,78)","rgb(1,104,61)","rgb(0,124,61)","rgb(0,139,50)","rgb(81,149,38)","rgb(118,161,29)","rgb(155,161,1)","rgb(167,169,0)","rgb(195,187,0)","rgb(168,150,0)","rgb(196,173,2)","rgb(191,164,1)","rgb(195,160,0)","rgb(204,159,0)","rgb(186,146,0)","rgb(182,136,0)","rgb(203,135,0)","rgb(168,107,0)","rgb(175,103,1)","rgb(210,114,0)","rgb(158,64,0)","rgb(176,80,1)","rgb(174,77,0)","rgb(208,81,4)","rgb(186,64,1)","rgb(167,50,2)","rgb(210,43,35)","rgb(192,23,42)","rgb(171,26,47)","rgb(188,1,46)","rgb(165,1,54)","rgb(185,0,67)","rgb(171,0,45)","rgb(149,0,64)","rgb(187,0,89)","rgb(165,0,80)","rgb(145,0,85)","rgb(178,0,112)","rgb(175,0,129)","rgb(160,0,125)","rgb(156,1,131)","rgb(141,28,136)","rgb(83,0,86)","rgb(104,21,129)","rgb(90,25,126)","rgb(68,23,125)","rgb(64,24,127)","rgb(50,28,129)","rgb(14,9,92)","rgb(20,25,116)","rgb(5,34,118)","rgb(0,45,115)","rgb(6,32,110)","rgb(1,48,128)","rgb(0,57,129)","rgb(1,44,98)","rgb(0,32,66)","rgb(0,33,61)","rgb(0,58,82)","rgb(0,48,71)","rgb(1,64,84)","rgb(1,84,102)","rgb(0,99,112)","rgb(0,76,79)","rgb(1,73,72)","rgb(2,72,68)","rgb(0,55,49)","rgb(1,103,89)","rgb(1,83,69)","rgb(1,60,42)","rgb(0,63,42)","rgb(0,83,55)","rgb(38,120,44)","rgb(74,102,28)","rgb(82,98,0)","rgb(119,116,1)","rgb(138,134,1)","rgb(172,161,1)","rgb(106,88,1)","rgb(140,124,14)","rgb(169,146,1)","rgb(147,128,0)","rgb(173,139,2)","rgb(146,117,0)","rgb(117,92,0)","rgb(127,90,0)","rgb(107,67,0)","rgb(104,76,7)","rgb(170,86,0)","rgb(76,18,0)","rgb(96,41,0)","rgb(135,56,0)","rgb(117,36,0)","rgb(140,45,1)","rgb(119,41,29)","rgb(130,14,11)","rgb(127,0,16)","rgb(93,16,32)","rgb(128,0,37)","rgb(122,21,52)","rgb(156,0,59)","rgb(139,0,39)","rgb(114,0,51)","rgb(134,0,65)","rgb(113,0,56)","rgb(105,0,57)","rgb(143,0,88)","rgb(125,0,83)","rgb(133,1,103)","rgb(125,12,102)","rgb(114,17,110)","rgb(76,5,75)","rgb(78,21,90)","rgb(80,11,107)","rgb(58,14,103)","rgb(63,19,108)","rgb(36,4,87)","rgb(0,1,58)","rgb(12,6,96)","rgb(1,20,89)","rgb(0,21,73)","rgb(0,10,72)","rgb(0,18,74)","rgb(0,23,74)","rgb(0,3,38)"];
    var columns = 69;
    var rows = 7;
    function ColorSelector(options){
        this.init(options);
    }

    ColorSelector.prototype = {
        init:function(options){
            this.wrapper = options.wrapper;
            this.radius = options.radius  || 320;
            this.offsetX = options.offsetX || - this.radius;
            this.offsetY = options.offsetY || 0;
            this.initHtml();
            this.bindEvent();
        },
        initHtml:function(){
            var viewWidth = this.radius * 2 + this.offsetX;
            var viewHeight = this.radius * 2 + this.offsetY;
            this.wheel = document.createElementNS(SVG_NS,"svg");
            this.wheel.setAttribute("width", viewWidth);
            this.wheel.setAttribute("height", viewHeight);
            this.wheel.setAttribute("viewBox", "0 0 " + viewWidth +" " + viewHeight);
            this.wrapper.appendChild(this.wheel);
            this.group = document.createElementNS(SVG_NS, "g");
            this.group.setAttribute("transform", "translate("+ this.offsetX +",0)");
            this.wheel.appendChild(this.group);
            var d = Math.ceil(this.radius /16);
            var angle = Math.PI * 2 / columns;
            var r = this.radius;
            for(var i= 0,j=0;i<columns && j<rows;i++){
                var _angle = angle * i;
                var _r = r - d;
                var sin = Math.sin(_angle);
                var cos = Math.cos(_angle);
                var _sin = Math.sin(_angle + angle);
                var _cos = Math.cos(_angle + angle);
                var x1 = cos * _r + this.radius;
                var y1 = sin * _r + this.radius;
                var x2 = cos * r + this.radius;
                var y2 = sin * r + this.radius;

                var x3 = _cos * r + this.radius;
                var y3 = _sin * r + this.radius;
                var x4 = _cos * _r + this.radius;
                var y4 = _sin * _r + this.radius;


                var path = document.createElementNS(SVG_NS, "path");
                path.setAttribute("d",  "M"+x1+","+y1+" L"+x2+","+y2+" A"+r+","+r+" "+_angle+" 0,1 "+x3+","+y3+" L"+x4+","+y4+" A"+_r+","+_r+" "+_angle+" 0,0 "+x1+","+y1+" z");
                path.setAttribute("fill" , getColor(i, j));
                path.setAttribute("stroke" , "#FFFFFF");
                path.setAttribute("stroke-width", "2");
                this.group.appendChild(path);
                if( i == columns-1){
                    i = -1;
                    r -=  d + 4;
                    j++;
                }
            }


            var innerRadius = Math.ceil(this.radius / 5);
            var linearGradient = SVGElement.linearGradient("#FFFFFF", "#000000");
            this.reviewCircle = SVGElement.circle(this.radius, this.radius, innerRadius, "#1db7ed");
            this.colorRing = SVGElement.circle(this.radius, this.radius, innerRadius * 2, null, innerRadius / 2, "url(#color-ring-grad)");
            this.colorRingRadius = innerRadius * 9 / 4;

            this.group.appendChild(linearGradient);
            this.group.appendChild(this.colorRing);
            this.group.appendChild(SVGElement.circle(this.radius, this.radius, innerRadius * 7 / 4));
            this.group.appendChild(SVGElement.circle(this.radius, this.radius, innerRadius + 8, null, 1, "#eeeeee"));
            this.group.appendChild(this.reviewCircle);

        },
        bindEvent:function(){
            var _this = this;
            var cx = this.radius + this.offsetX;
            var cy = this.radius + this.offsetY;
            var startX, startY;
            var initAngle = 0;
            var angle = 0;
            var getAngle = function(x, y){
                var _x = x-cx;
                var _y = y-cy;
                var radian = Math.atan((_y)/(_x));
                if(_x > 0 && _y < 0){
                    radian = 2 * Math.PI - Math.abs(radian);
                }
                else if(_x < 0 && _y < 0){
                    radian = Math.PI + Math.abs(radian);
                }
                else if( _x < 0 && _y > 0){
                    radian = Math.PI - Math.abs(radian);
                }
                return  radian /Math.PI * 180;
            }

            var touches = null;
            var animate = null;
            this.wheel.addEventListener("touchstart", function(e){
                startX = e.touches[0].pageX;
                startY = e.touches[0].pageY;
                touches = e.touches;
                animate =  requestAnimationFrame(rotate);
            },false);

            

            this.wheel.addEventListener("touchmove", function(e){
                e.preventDefault();
                touches = e.touches;

            },false);

            function rotate(){
                
                if(touches){
                    var x = touches[0].pageX;
                    var y = touches[0].pageY;
                    var angle1 = getAngle(startX, startY);
                    var angle2 = getAngle(x, y);
                    angle = ( initAngle + angle2 - angle1) % 360;
                    _this.group.setAttribute("transform", "translate("+ _this.offsetX +",0) rotate("+ angle +", "+ _this.radius +", "+ _this.radius +")");
                    requestAnimationFrame(rotate);
                }

            }



            document.addEventListener("touchend", function(e){
                initAngle = angle;
                touches = null;
                if(animate){
                    window.cancelAnimationFrame(animate);
                }
            },false);

            this.wheel.querySelector("g").addEventListener("click", function(e){
                if(e.target.tagName == "path"){
                    var color = e.target.getAttribute("fill");
                    _this.changeColor(color);
                }
            },false);


            this.colorRing.addEventListener("click", function(e){
                var x = e.pageX;
                var y = e.pageY;
                var d = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
                var _angle = getAngle(x, y);
                _angle -= angle;
                var _d =  _this.colorRingRadius +  d * Math.sin(_angle / 180 * Math.PI);
                var value = 255 - Math.floor(255 *  _d / (_this.colorRingRadius * 2));
                var color = "rgb("+value+","+value+","+value+")";
                _this.changeColor(color);

            }, false);

        },
        changeColor:function(color){
            if(color){
                this.reviewCircle.setAttribute("fill", color);
            }
        }
    };
	
    var index = 0;
    function getColor(i, j){
        var color = colors[index++];
        return color;

    }

    var SVGElement = {
        circle:function(cx,cy, r, fillColor, strokeWidth, strokeColor){
            fillColor = fillColor || "transparent";
            strokeWidth = strokeWidth || 0;
            strokeColor = strokeColor || "#000000";
            var circle = document.createElementNS(SVG_NS, "circle");
            circle.setAttribute("cx", cx);
            circle.setAttribute("cy", cy);
            circle.setAttribute("r", r);
            circle.setAttribute("fill", fillColor);
            circle.setAttribute("stroke-width", strokeWidth);
            circle.setAttribute("stroke", strokeColor);
             return circle;
        },
        linearGradient:function(startColor, stopColor){
            var defs = document.createElementNS(SVG_NS, "defs");
            defs.innerHTML = '<linearGradient id="color-ring-grad" x1="0%" y1="10%" x2="0%" y2="90%">' +
                    '<stop offset="0%" style="stop-color:' + startColor + ';stop-opacity:1" />' +
                    '<stop offset="100%" style="stop-color:' + stopColor + ';stop-opacity:1" />' +
                '</linearGradient>';
            return defs;
        }
    };

    window.ColorSelector = ColorSelector;
})();
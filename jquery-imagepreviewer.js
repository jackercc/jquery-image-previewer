$(function($){

    $.fn.imagePreviewer = function(options) {

        var defaults = {
             //各种默认参数
             scroll: true, // 滚动弹框消失
        };

        var options = $.extend(defaults,options); //传入的参数覆盖默认参数

        this.each(function(){
            var _this = $(this);  //缓存一下插件传进来的节点对象。

            // 图片预览
            $("img",_this).css('cursor', 'zoom-in').on("click", function(e) {

                if($("#image_preview_popup").length == 0) {

                    $("body").append('\
                        <div class="layer image-preview-layer flex" id="image_preview_popup">\
                            <div class="layer-wrap">\
                                <img src="'+ $(this).attr("src") +'" alt="'+ ($(this).attr("alt")||"") +'" class="hide">\
                            </div>\
                        </div>\
                    ');
                    setTimeout(function(){
                        $("#image_preview_popup img").removeClass("hide");
                    },100);
                } else {
                    $("#image_preview_popup").show();
                    $("#image_preview_popup img").attr("src",$(this).attr("src"))
                                                 .attr("alt",$(this).attr("alt"))
                                                 .removeClass("hide");
                }

                var hideImagePop = function() {
                    if($("#image_preview_popup").length) {
                        $("#image_preview_popup img").addClass("hide");
                        setTimeout(function(){
                            $("#image_preview_popup").hide();
                        }, 200);
                    }
                    $("#image_preview_popup").off("click.image_preview_popup");
                    options.scroll && $(window).off("scroll.image_preview_popup");
                };

                $("#image_preview_popup").on("click.image_preview_popup", hideImagePop);

                options.scroll && $(window).on("scroll.image_preview_popup", hideImagePop);
            });
        });

        return $(this);   //把节点对象返回去，为了支持链式调用。
    };
    $(document.head).append('<style>.layer {position: fixed;z-index: 100000;top: 0;right: 0;bottom: 0;left: 0;overflow: auto;background-color: rgba(43,51,59,0.80);}\
                                .flex {display:flex;display:-webkit-flex;align-items: center;justify-content: center;}\
                                #image_preview_popup img.hide {opacity:0;transform:scale(0);transition:all 0.2;cursor:zoom-out;}\
                                #image_preview_popup img {width:100%;height:auto;opacity:1;transform:scale(1);transition:all 0.2s;cursor:zoom-out;}\
                            </style>');
}(jQuery));
    
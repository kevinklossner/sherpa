Sherpa.counter("Sherpa Global Events");check_ff();$(window).resize(function(){check_ff()});function check_ff(){var a={};a.w=$(window).width();a.isDesktop=a.w>head_conf.screens[1];a.isTablet=a.w>=head_conf.screens[0]&&a.w<=head_conf.screens[1];a.isMobile=a.w<head_conf.screens[0];if(a.isDesktop){$("html").addClass("desktop");$("html").removeClass("no-desktop")}else{$("html").removeClass("desktop");$("html").addClass("no-desktop")}if(a.isTablet){$("html").addClass("tablet");$("html").removeClass("no-tablet")}else{$("html").removeClass("tablet");$("html").addClass("no-tablet")}if(a.isMobile){$("html").addClass("mobile");$("html").removeClass("no-mobile")}else{$("html").removeClass("mobile");$("html").addClass("no-mobile")}viewModel.isDesktop=ko.observable(a.isDesktop);viewModel.isTablet=ko.observable(a.isTablet);viewModel.isMobile=ko.observable(a.isMobile)}if(location.hostname==="localhost"){viewModel.localhost=true}else{viewModel.localhost=false}Eve.scope("*",function(){this.listen(".tabbable","load",function(){$(".tabbable .nav li").removeClass("active");$(".tabbable .nav li:first").addClass("active")})});Sherpa.counter("Sherpa Global Events");
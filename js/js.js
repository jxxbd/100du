/*
* @Author: admin
* @Date:   2016-08-17 08:42:18
* @Last Modified by:   admin
* @Last Modified time: 2016-08-19 16:14:29
*/

'use strict';
$(function(){
	$('#header').find('.city').find('a').on('click',function(){
		$(this).siblings().removeClass('header_active');
		$(this).addClass('header_active');
	})

	$('#index_logo').find('li').on('click',function(){
		$('#index_logo').find('li').css('background-position','');
		if($(this).parent().attr('class')=='fl'){
			$(this).css('background-position',10-$(this).index()*65 +'px -84px');
		}else{
			$(this).css('background-position',-320-$(this).index()*65 +'px -84px');
		}
	})
	$('#nav_bar').find('.nav_list').find('li').on('click',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	})
	$('.tab_list').find('li').on('click',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	})
	$('.lucky_day').find('.calendar').find('td').hover(function(){
		$(this).addClass('img2');
	},function(){
		$(this).removeClass('img2');
	})
	$('.recommend').find('li').on('click',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		$(this).parent().prev().attr('src','image/picList'+ ($(this).index()+1) +'.jpg')
	})
	$('.recommend').find('.info_list').find('li').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	})
	$('.subway').find('.subway_btn').find('li').on('click',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	})
	$('.forum').find('.forum_list').find('li').on('click',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	})
	$('.advice_tab').find('li').on('click',function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	})
	fn();
	function fn(){
		var arr1=[];
		var arr2=[];
		var a=0;
		var b=0;
		var w=Math.round($('.pic_top').width()/$('.pic_top').find('li').width());		$('.pic_top').find('li').each(function(i,aElement){
			arr1[i]=$(aElement).offset().top;
			arr2[i]=$(aElement).offset().left;

		})
		$('.pic_top').find('li').each(function(i,aElement){
			$(aElement).css('position','absolute').css('top',arr1[i]).css('left',arr2[i]);
		})
		setInterval(function(){
			var arr3=[];
			$('.pic_top').find('li').each(function(i,aElement){
				if($(aElement).children().length==0){
					a=$(aElement).index();
					if(a%w==0){
						arr3=[a-w,a+1,a+w];	
					}else if((a+1)%w==0){
						arr3=[a-w,a-1,a+w];	
					}
					else{
						arr3=[a-w,a-1,a+1,a+w];	
					}
				}
    		})
    		for(var i=0;i<arr3.length;i++){
    			if(arr3[i]>($('.pic_top').find('li').length-1)||arr3[i]<0||arr3[i]==b){
					arr3.splice(i,1);  
					i--;
    			}
    		}
    		var r=Math.round(Math.random()*(arr3.length-1));
    		var q=arr3[r];
    		var m=$('.pic_top').find('li').eq(q).offset().left;
    		var s=$('.pic_top').find('li').eq(q).offset().top;
    		var p=$('.pic_top').find('li').eq(q).index();
			$('.pic_top').find('li').eq(q).animate({left:$('.pic_top').find('li').eq(a).offset().left,top:$('.pic_top').find('li').eq(a).offset().top},500,'linear');
			$('.pic_top').find('li').eq(a).animate({left:m,top:s},500,'linear',function(){
				if(a>p){
					$('.pic_top').find('li').eq(p).insertBefore($('.pic_top').find('li').eq(a));
					if(p==0){
						$('.pic_top').find('li').eq(a).insertBefore($('.pic_top').find('li').eq(0));
					}else{
						$('.pic_top').find('li').eq(a).insertAfter($('.pic_top').find('li').eq(p-1)); 
					}
				}else if(a<p){
					$('.pic_top').find('li').eq(p).insertBefore($('.pic_top').find('li').eq(a));
					if(p==($('.pic_top').find('li').length-1)&&a==(p-1)){
						
					}else{
						$('.pic_top').find('li').eq(a+1).insertAfter($('.pic_top').find('li').eq(p));
					}
				}
			});
			b=a;
		},1000)	
	};
})
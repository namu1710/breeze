!function o(a,l,c){function s(i,e){if(!l[i]){if(!a[i]){var n="function"==typeof require&&require;if(!e&&n)return n(i,!0);if(_)return _(i,!0);var r=new Error("Cannot find module '"+i+"'");throw r.code="MODULE_NOT_FOUND",r}var t=l[i]={exports:{}};a[i][0].call(t.exports,function(e){return s(a[i][1][e]||e)},t,t.exports,o,a,l,c)}return l[i].exports}for(var _="function"==typeof require&&require,e=0;e<c.length;e++)s(c[e]);return s}({1:[function(e,i,n){"use strict";$(document).ready(function(){$(".header_langs_item").click(function(){$(".header_langs_item").removeClass("header_langs_active"),$(this).addClass("header_langs_active")}),$(".header_currency_item").click(function(){$(".header_currency_item").removeClass("header_currency_active"),$(this).addClass("header_currency_active")}),$("#login").click(function(){$(".header_nav_registration-form").slideToggle()}),$("#signup").click(function(){$(".header_nav_registration-form").slideToggle()}),$(".header_nav_form_close").click(function(){$(".header_nav_registration-form").css("display","none")}),$(".header_nav_form_message a").click(function(){$("form").animate({height:"toggle",opacity:"toggle"},"slow")}),$(".main_slider_corousel").slick({slidesToShow:1,slidesToScroll:1,arrows:!0,fade:!0,dots:!0}),$(".header_mobile-menu_btn").click(function(){$(".main").slideToggle(),$(this).toggleClass("mobile-menu_active"),$(".header_nav").slideToggle()}),$(".main_nav_list-mobile").click(function(){$(".main_nav_list").slideToggle("slow")}),$(".main_nav_list li a").click(function(){var e=$(this).text();$(".main_nav_list-mobile span").text(e)}),$("#dropdown_item").click(function(){$(".main_nav_dropdown-list").slideToggle("slow")}),$(".main_nav_dropdown-list li").children().click(function(){var e=$(this).text();$(".main_nav_list-mobile span").text(e)})})},{}]},{},[1]);
//# sourceMappingURL=maps/app.js.map

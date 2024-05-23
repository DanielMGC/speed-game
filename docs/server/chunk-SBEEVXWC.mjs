import './polyfills.server.mjs';
import{$ as S1,A as z1,Aa as o4,B as X,Ba as t4,C as J,Ca as l4,D as Q,Da as y1,E as H1,Ea as f4,F as Z3,Fa as m4,G as $3,Ga as v4,H as t2,Ha as v2,I as p1,Ia as h2,J as l2,Ja as z2,K as p,Ka as H2,L,La as h4,M as U1,N as f2,O as N1,Oa as z4,P as q2,Q as b,R as u1,S as U2,Sa as H4,T as Y3,Ta as p4,U as K3,V as s1,W as M,Wa as u4,X as V,Y as $,Z as X3,_ as J3,a as _2,aa as Q3,b as _1,ba as E,c as E1,ca as x,d as s2,da as c4,e as n2,ea as a4,f as E2,fa as W1,g as g1,ga as P,h as b1,ha as n1,i as I3,ia as Y,j as I2,ja as e4,k as q3,ka as U,l as U3,la as W2,m as o2,n as W3,o as G3,p as j3,q as I1,r as q1,ra as i4,s as x1,t as k,ta as r4,u as D,ua as G1,v as O,w as A,wa as s4,x as B,xa as m2,y as _,ya as w1,z as R,za as n4}from"./chunk-SHN7ZWX5.mjs";import{a as S,b as O1,d as E3}from"./chunk-KRLCULJA.mjs";var M4=(()=>{let a=class a{constructor(){this.title="game"}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=_({type:a,selectors:[["app-root"]],standalone:!0,features:[U],decls:1,vars:0,template:function(r,s){r&1&&$(0,"router-outlet")},dependencies:[w1,p4],styles:["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%;width:100%;margin:0!important}"]});let c=a;return c})();var p2=class{static getRandomEmoji(){let a=["\u{1F603}","\u{1F604}","\u{1F601}","\u{1F606}","\u{1F605}","\u{1F602}","\u{1F923}","\u{1F62D}","\u{1F609}","\u{1F617}","\u{1F619}","\u{1F61A}","\u{1F618}","\u{1F970}","\u{1F60D}","\u{1F929}","\u{1F973}","\u{1FAE0}","\u{1F643}","\u{1F642}","\u{1F972}","\u{1F979}","\u{1F60A}","\u263A\uFE0F","\u{1F60C}","\u{1F60F}","\u{1F634}","\u{1F62A}","\u{1F924}","\u{1F60B}","\u{1F61B}","\u{1F61D}","\u{1F61C}","\u{1F92A}","\u{1F974}","\u{1F614}","\u{1F97A}","\u{1F62C}","\u{1FAE5}","\u{1F611}","\u{1F610}","\u{1F636}","\u{1F636}\u200D\u{1F32B}\uFE0F","\u{1F910}","\u{1FAE1}","\u{1F914}","\u{1F92B}","\u{1FAE2}","\u{1F92D}","\u{1F971}","\u{1F917}","\u{1FAE3}","\u{1F631}","\u{1F928}","\u{1F9D0}","\u{1F612}","\u{1F644}","\u{1F62E}\u200D\u{1F4A8}","\u{1F624}","\u{1F620}","\u{1F621}","\u{1F92C}","\u{1F61E}","\u{1F613}","\u{1F61F}","\u{1F625}","\u{1F622}","\u2639\uFE0F","\u{1F641}","\u{1FAE4}","\u{1F615}","\u{1F630}","\u{1F628}","\u{1F627}","\u{1F626}","\u{1F62E}","\u{1F62F}","\u{1F632}","\u{1F633}","\u{1F92F}","\u{1F616}","\u{1F623}","\u{1F629}","\u{1F62B}","\u{1F635}","\u{1F635}\u200D\u{1F4AB}","\u{1FAE8}","\u{1F976}","\u{1F975}","\u{1F922}","\u{1F92E}","\u{1F927}","\u{1F912}","\u{1F915}","\u{1F637}","\u{1F925}","\u{1F607}","\u{1F920}","\u{1F911}","\u{1F913}","\u{1F60E}","\u{1F978}","\u{1F921}","\u{1F608}","\u{1F47F}","\u{1F47B}","\u{1F383}","\u{1F4A9}","\u{1F916}","\u{1F47D}","\u{1F47E}","\u{1F31B}","\u{1F31C}","\u{1F31A}","\u{1F31D}","\u{1F31E}","\u2620\uFE0F","\u{1F479}","\u{1F47A}","\u{1F525}","\u{1F4AF}","\u{1F4AB}","\u2B50","\u{1F31F}","\u2728","\u{1F4A5}","\u{1F4A8}","\u{1F4A6}","\u{1F4A4}","\u{1F573}\uFE0F","\u{1F389}","\u{1F648}","\u{1F649}","\u{1F64A}","\u{1F63A}","\u{1F638}","\u{1F639}","\u{1F63B}","\u{1F63C}","\u{1F63D}","\u{1F640}","\u{1F63F}","\u{1F63E}","\u2764\uFE0F","\u{1F9E1}","\u{1F49B}","\u{1F49A}","\u{1FA75}","\u{1F499}","\u{1F49C}","\u{1F90E}","\u{1F5A4}","\u{1FA76}","\u{1F90D}","\u{1FA77}","\u{1F498}","\u{1F49D}","\u{1F496}","\u{1F497}","\u{1F493}","\u{1F49E}","\u{1F495}","\u{1F48C}","\u{1F49F}","\u2665\uFE0F","\u2763\uFE0F","\u2764\uFE0F\u200D\u{1FA79}","\u{1F494}","\u2764\uFE0F\u200D\u{1F525}","\u{1F48B}","\u{1FAC2}","\u{1F465}","\u{1F464}","\u{1F5E3}\uFE0F","\u{1F463}","\u{1F9E0}","\u{1FAC0}","\u{1FAC1}","\u{1FA78}","\u{1F9A0}","\u{1F9B7}","\u{1F9B4}","\u{1F480}","\u{1F440}","\u{1F441}\uFE0F","\u{1F444}","\u{1FAE6}","\u{1F445}","\u{1F443}","\u{1F442}","\u{1F9BB}","\u{1F9B6}","\u{1F9B5}","\u{1F9BF}","\u{1F9BE}","\u{1F4AA}","\u{1F44F}","\u{1F44D}","\u{1F44E}","\u{1FAF6}","\u{1F64C}","\u{1F450}","\u{1F932}","\u{1F91D}","\u{1F91C}","\u{1F91B}","\u270A","\u{1F44A}","\u{1FAF3}","\u{1FAF4}","\u{1FAF1}","\u{1FAF2}","\u{1FAF8}","\u{1FAF7}","\u{1F44B}","\u{1F91A}","\u{1F590}\uFE0F","\u270B","\u{1F596}","\u{1F91F}","\u{1F918}","\u270C\uFE0F","\u{1F91E}","\u{1FAF0}","\u{1F919}","\u{1F90C}","\u{1F90F}","\u{1F44C}","\u{1FAF5}","\u{1F449}","\u{1F448}","\u261D\uFE0F","\u{1F446}","\u{1F447}","\u{1F595}","\u270D\uFE0F","\u{1F933}","\u{1F64F}","\u{1F485}","\u{1F647}","\u{1F64B}","\u{1F481}","\u{1F646}","\u{1F645}","\u{1F937}","\u{1F926}","\u{1F64D}","\u{1F64E}","\u{1F9CF}","\u{1F486}","\u{1F487}","\u{1F9D6}","\u{1F6C0}","\u{1F6CC}","\u{1F9D8}","\u{1F9D1}\u200D\u{1F9AF}","\u{1F9D1}\u200D\u{1F9BC}","\u{1F9D1}\u200D\u{1F9BD}","\u{1F9CE}","\u{1F9CD}","\u{1F6B6}","\u{1F3C3}","\u{1F938}","\u{1F3CB}\uFE0F","\u26F9\uFE0F","\u{1F93E}","\u{1F6B4}","\u{1F6B5}","\u{1F9D7}","\u{1F93C}","\u{1F939}","\u{1F3CC}\uFE0F","\u{1F3C7}","\u{1F93A}","\u26F7\uFE0F","\u{1F3C2}","\u{1FA82}","\u{1F3C4}","\u{1F6A3}","\u{1F3CA}","\u{1F93D}","\u{1F9DC}","\u{1F9DA}","\u{1F9DE}","\u{1F9DD}","\u{1F9D9}","\u{1F9DB}","\u{1F9DF}","\u{1F9CC}","\u{1F9B8}","\u{1F9B9}","\u{1F977}","\u{1F9D1}\u200D\u{1F384}","\u{1F47C}","\u{1F482}","\u{1FAC5}","\u{1F935}","\u{1F470}","\u{1F9D1}\u200D\u{1F680}","\u{1F477}","\u{1F46E}","\u{1F575}\uFE0F","\u{1F9D1}\u200D\u2708\uFE0F","\u{1F9D1}\u200D\u{1F52C}","\u{1F9D1}\u200D\u2695\uFE0F","\u{1F9D1}\u200D\u{1F527}","\u{1F9D1}\u200D\u{1F3ED}","\u{1F9D1}\u200D\u{1F692}","\u{1F9D1}\u200D\u{1F33E}","\u{1F9D1}\u200D\u{1F3EB}","\u{1F9D1}\u200D\u{1F393}","\u{1F9D1}\u200D\u{1F4BC}","\u{1F9D1}\u200D\u2696\uFE0F","\u{1F9D1}\u200D\u{1F4BB}","\u{1F9D1}\u200D\u{1F3A4}","\u{1F9D1}\u200D\u{1F3A8}","\u{1F9D1}\u200D\u{1F373}","\u{1F473}","\u{1F9D5}","\u{1F472}","\u{1F476}","\u{1F9D2}","\u{1F9D1}","\u{1F9D3}","\u{1F9D1}\u200D\u{1F9B3}","\u{1F9D1}\u200D\u{1F9B0}","\u{1F471}","\u{1F9D1}\u200D\u{1F9B1}","\u{1F9D1}\u200D\u{1F9B2}","\u{1F9D4}","\u{1F574}\uFE0F","\u{1F483}","\u{1F57A}","\u{1F46F}","\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}","\u{1F46D}","\u{1F46C}","\u{1F46B}","\u{1F48F}","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}","\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}","\u{1F491}","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}","\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}","\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}","\u{1FAC4}","\u{1F931}","\u{1F9D1}\u200D\u{1F37C}","\u{1F46A}","\u{1F490}","\u{1F339}","\u{1F940}","\u{1F33A}","\u{1F337}","\u{1FAB7}","\u{1F338}","\u{1F4AE}","\u{1F3F5}\uFE0F","\u{1FABB}","\u{1F33B}","\u{1F33C}","\u{1F342}","\u{1F341}","\u{1F344}","\u{1F33E}","\u{1F331}","\u{1F33F}","\u{1F343}","\u2618\uFE0F","\u{1F340}","\u{1FAB4}","\u{1F335}","\u{1F334}","\u{1F333}","\u{1F332}","\u{1FAB5}","\u{1FAB9}","\u{1FABA}","\u{1FAA8}","\u26F0\uFE0F","\u{1F3D4}\uFE0F","\u2744\uFE0F","\u2603\uFE0F","\u26C4","\u{1F32B}\uFE0F","\u{1F321}\uFE0F","\u{1F525}","\u{1F30B}","\u{1F3DC}\uFE0F","\u{1F3DE}\uFE0F","\u{1F3DD}\uFE0F","\u{1F3D6}\uFE0F","\u{1F305}","\u{1F304}","\u{1F308}","\u{1FAE7}","\u{1F30A}","\u{1F32C}\uFE0F","\u{1F300}","\u{1F32A}\uFE0F","\u26A1","\u2614","\u{1F4A7}","\u{1F327}\uFE0F","\u{1F329}\uFE0F","\u26C8\uFE0F","\u{1F328}\uFE0F","\u2601\uFE0F","\u{1F326}\uFE0F","\u{1F325}\uFE0F","\u26C5","\u{1F324}\uFE0F","\u2600\uFE0F","\u{1F31E}","\u{1F31D}","\u{1F31A}","\u{1F31C}","\u{1F31B}","\u2B50","\u{1F31F}","\u2728","\u{1F4AB}","\u{1F319}","\u2604\uFE0F","\u{1F573}\uFE0F","\u{1F320}","\u{1F30C}","\u{1F30D}","\u{1F30E}","\u{1F30F}","\u{1FA90}","\u{1F311}","\u{1F312}","\u{1F313}","\u{1F314}","\u{1F315}","\u{1F316}","\u{1F317}","\u{1F318}","\u{1F648}","\u{1F649}","\u{1F64A}","\u{1F435}","\u{1F981}","\u{1F42F}","\u{1F431}","\u{1F436}","\u{1F43A}","\u{1F43B}","\u{1F43B}\u200D\u2744\uFE0F","\u{1F428}","\u{1F43C}","\u{1F439}","\u{1F42D}","\u{1F430}","\u{1F98A}","\u{1F99D}","\u{1F42E}","\u{1F437}","\u{1F43D}","\u{1F417}","\u{1F993}","\u{1F984}","\u{1F434}","\u{1FACE}","\u{1F432}","\u{1F98E}","\u{1F409}","\u{1F996}","\u{1F995}","\u{1F422}","\u{1F40A}","\u{1F40D}","\u{1F438}","\u{1F407}","\u{1F401}","\u{1F400}","\u{1F408}","\u{1F408}\u200D\u2B1B","\u{1F429}","\u{1F415}","\u{1F9AE}","\u{1F415}\u200D\u{1F9BA}","\u{1F416}","\u{1F40E}","\u{1FACF}","\u{1F404}","\u{1F402}","\u{1F403}","\u{1F9AC}","\u{1F40F}","\u{1F411}","\u{1F410}","\u{1F98C}","\u{1F999}","\u{1F9A5}","\u{1F998}","\u{1F418}","\u{1F9A3}","\u{1F98F}","\u{1F99B}","\u{1F992}","\u{1F406}","\u{1F405}","\u{1F412}","\u{1F98D}","\u{1F9A7}","\u{1F42A}","\u{1F42B}","\u{1F43F}\uFE0F","\u{1F9AB}","\u{1F9A8}","\u{1F9A1}","\u{1F994}","\u{1F9A6}","\u{1F987}","\u{1FABD}","\u{1FAB6}","\u{1F426}","\u{1F426}\u200D\u2B1B","\u{1F413}","\u{1F414}","\u{1F423}","\u{1F424}","\u{1F425}","\u{1F985}","\u{1F989}","\u{1F99C}","\u{1F54A}\uFE0F","\u{1F9A4}","\u{1F9A2}","\u{1F986}","\u{1FABF}","\u{1F9A9}","\u{1F99A}","\u{1F983}","\u{1F427}","\u{1F9AD}","\u{1F988}","\u{1F42C}","\u{1F40B}","\u{1F433}","\u{1F41F}","\u{1F420}","\u{1F421}","\u{1F990}","\u{1F99E}","\u{1F980}","\u{1F991}","\u{1F419}","\u{1FABC}","\u{1F9AA}","\u{1FAB8}","\u{1F982}","\u{1F577}\uFE0F","\u{1F578}\uFE0F","\u{1F41A}","\u{1F40C}","\u{1F41C}","\u{1F997}","\u{1FAB2}","\u{1F99F}","\u{1FAB3}","\u{1FAB0}","\u{1F41D}","\u{1F41E}","\u{1F98B}","\u{1F41B}","\u{1FAB1}","\u{1F9A0}","\u{1F43E}","\u{1F353}","\u{1F352}","\u{1F34E}","\u{1F349}","\u{1F351}","\u{1F34A}","\u{1F96D}","\u{1F34D}","\u{1F34C}","\u{1F34B}","\u{1F348}","\u{1F34F}","\u{1F350}","\u{1F95D}","\u{1FAD2}","\u{1FAD0}","\u{1F347}","\u{1F965}","\u{1F345}","\u{1F336}\uFE0F","\u{1FADA}","\u{1F955}","\u{1F360}","\u{1F9C5}","\u{1F33D}","\u{1F966}","\u{1F952}","\u{1F96C}","\u{1FADB}","\u{1FAD1}","\u{1F951}","\u{1F346}","\u{1F9C4}","\u{1F954}","\u{1FAD8}","\u{1F330}","\u{1F95C}","\u{1F35E}","\u{1FAD3}","\u{1F950}","\u{1F956}","\u{1F96F}","\u{1F9C7}","\u{1F95E}","\u{1F373}","\u{1F95A}","\u{1F9C0}","\u{1F953}","\u{1F969}","\u{1F357}","\u{1F356}","\u{1F354}","\u{1F32D}","\u{1F96A}","\u{1F968}","\u{1F35F}","\u{1F355}","\u{1FAD4}","\u{1F32E}","\u{1F32F}","\u{1F959}","\u{1F9C6}","\u{1F958}","\u{1F35D}","\u{1F96B}","\u{1FAD5}","\u{1F963}","\u{1F957}","\u{1F372}","\u{1F35B}","\u{1F35C}","\u{1F9AA}","\u{1F99E}","\u{1F363}","\u{1F364}","\u{1F961}","\u{1F35A}","\u{1F371}","\u{1F95F}","\u{1F362}","\u{1F359}","\u{1F358}","\u{1F365}","\u{1F361}","\u{1F960}","\u{1F96E}","\u{1F367}","\u{1F368}","\u{1F366}","\u{1F967}","\u{1F370}","\u{1F36E}","\u{1F382}","\u{1F9C1}","\u{1F36D}","\u{1F36C}","\u{1F36B}","\u{1F369}","\u{1F36A}","\u{1F36F}","\u{1F9C2}","\u{1F9C8}","\u{1F37F}","\u{1F9CA}","\u{1FAD9}","\u{1F964}","\u{1F9CB}","\u{1F9C3}","\u{1F95B}","\u{1F37C}","\u{1F375}","\u2615","\u{1FAD6}","\u{1F9C9}","\u{1F37A}","\u{1F37B}","\u{1F942}","\u{1F37E}","\u{1F377}","\u{1F943}","\u{1FAD7}","\u{1F378}","\u{1F379}","\u{1F376}","\u{1F962}","\u{1F374}","\u{1F944}","\u{1F52A}","\u{1F37D}\uFE0F","\u{1F6D1}","\u{1F6A7}","\u{1F6A8}","\u26FD","\u{1F6E2}\uFE0F","\u{1F9ED}","\u{1F6DE}","\u{1F6DF}","\u2693","\u{1F68F}","\u{1F687}","\u{1F6A5}","\u{1F6A6}","\u{1F6F4}","\u{1F9BD}","\u{1F9BC}","\u{1FA7C}","\u{1F6B2}","\u{1F6F5}","\u{1F3CD}\uFE0F","\u{1F699}","\u{1F697}","\u{1F6FB}","\u{1F690}","\u{1F69A}","\u{1F69B}","\u{1F69C}","\u{1F3CE}\uFE0F","\u{1F692}","\u{1F691}","\u{1F693}","\u{1F695}","\u{1F6FA}","\u{1F68C}","\u{1F688}","\u{1F69D}","\u{1F685}","\u{1F684}","\u{1F682}","\u{1F683}","\u{1F68B}","\u{1F68E}","\u{1F69E}","\u{1F68A}","\u{1F689}","\u{1F68D}","\u{1F694}","\u{1F698}","\u{1F696}","\u{1F686}","\u{1F6A2}","\u{1F6F3}\uFE0F","\u{1F6E5}\uFE0F","\u{1F6A4}","\u26F4\uFE0F","\u26F5","\u{1F6F6}","\u{1F69F}","\u{1F6A0}","\u{1F6A1}","\u{1F681}","\u{1F6F8}","\u{1F680}","\u2708\uFE0F","\u{1F6EB}","\u{1F6EC}","\u{1F6E9}\uFE0F","\u{1F6DD}","\u{1F3A2}","\u{1F3A1}","\u{1F3A0}","\u{1F3AA}","\u{1F5FC}","\u{1F5FD}","\u{1F5FF}","\u{1F5FB}","\u{1F3DB}\uFE0F","\u{1F488}","\u26F2","\u26E9\uFE0F","\u{1F54D}","\u{1F54C}","\u{1F54B}","\u{1F6D5}","\u26EA","\u{1F492}","\u{1F3E9}","\u{1F3EF}","\u{1F3F0}","\u{1F3D7}\uFE0F","\u{1F3E2}","\u{1F3ED}","\u{1F3EC}","\u{1F3EA}","\u{1F3DF}\uFE0F","\u{1F3E6}","\u{1F3EB}","\u{1F3E8}","\u{1F3E3}","\u{1F3E4}","\u{1F3E5}","\u{1F3DA}\uFE0F","\u{1F3E0}","\u{1F3E1}","\u{1F3D8}\uFE0F","\u{1F6D6}","\u26FA","\u{1F3D5}\uFE0F","\u26F1\uFE0F","\u{1F3D9}\uFE0F","\u{1F306}","\u{1F307}","\u{1F303}","\u{1F309}","\u{1F301}","\u{1F6E4}\uFE0F","\u{1F6E3}\uFE0F","\u{1F5FE}","\u{1F5FA}\uFE0F","\u{1F310}","\u{1F4BA}","\u{1F9F3}","\u{1F389}","\u{1F38A}","\u{1F388}","\u{1F382}","\u{1F380}","\u{1F381}","\u{1F387}","\u{1F386}","\u{1F9E8}","\u{1F9E7}","\u{1FA94}","\u{1FA85}","\u{1FAA9}","\u{1F390}","\u{1F38F}","\u{1F38E}","\u{1F391}","\u{1F38D}","\u{1F38B}","\u{1F384}","\u{1F383}","\u{1F397}\uFE0F","\u{1F947}","\u{1F948}","\u{1F949}","\u{1F3C5}","\u{1F396}\uFE0F","\u{1F3C6}","\u{1F4E2}","\u26BD","\u26BE","\u{1F94E}","\u{1F3C0}","\u{1F3D0}","\u{1F3C8}","\u{1F3C9}","\u{1F945}","\u{1F3BE}","\u{1F3F8}","\u{1F94D}","\u{1F3CF}","\u{1F3D1}","\u{1F3D2}","\u{1F94C}","\u{1F6F7}","\u{1F3BF}","\u26F8\uFE0F","\u{1F6FC}","\u{1FA70}","\u{1F6F9}","\u26F3","\u{1F3AF}","\u{1F3F9}","\u{1F94F}","\u{1FA83}","\u{1FA81}","\u{1F3A3}","\u{1F93F}","\u{1FA71}","\u{1F3BD}","\u{1F94B}","\u{1F94A}","\u{1F3B1}","\u{1F3D3}","\u{1F3B3}","\u265F\uFE0F","\u{1FA80}","\u{1F9E9}","\u{1F3AE}","\u{1F579}\uFE0F","\u{1F47E}","\u{1F52B}","\u{1F3B2}","\u{1F3B0}","\u{1F3B4}","\u{1F004}","\u{1F0CF}","\u{1FA84}","\u{1F3A9}","\u{1F4F7}","\u{1F4F8}","\u{1F5BC}\uFE0F","\u{1F3A8}","\u{1F58C}\uFE0F","\u{1F58D}\uFE0F","\u{1FAA1}","\u{1F9F5}","\u{1F9F6}","\u{1F3B9}","\u{1F3B7}","\u{1F3BA}","\u{1F3B8}","\u{1FA95}","\u{1F3BB}","\u{1FA98}","\u{1F941}","\u{1FA87}","\u{1FA88}","\u{1FA97}","\u{1F3A4}","\u{1F3A7}","\u{1F39A}\uFE0F","\u{1F39B}\uFE0F","\u{1F399}\uFE0F","\u{1F4FB}","\u{1F4FA}","\u{1F4FC}","\u{1F4F9}","\u{1F4FD}\uFE0F","\u{1F3A5}","\u{1F39E}\uFE0F","\u{1F3AC}","\u{1F3AD}","\u{1F3AB}","\u{1F39F}\uFE0F","\u{1F4F1}","\u260E\uFE0F","\u{1F4DE}","\u{1F4DF}","\u{1F4E0}","\u{1F50C}","\u{1F50B}","\u{1FAAB}","\u{1F5B2}\uFE0F","\u{1F4BD}","\u{1F4BE}","\u{1F4BF}","\u{1F4C0}","\u{1F5A5}\uFE0F","\u{1F4BB}","\u2328\uFE0F","\u{1F5A8}\uFE0F","\u{1F5B1}\uFE0F","\u{1FA99}","\u{1F4B8}","\u{1F4B5}","\u{1F4B4}","\u{1F4B6}","\u{1F4B7}","\u{1F4B3}","\u{1F4B0}","\u{1F9FE}","\u{1F9EE}","\u2696\uFE0F","\u{1F6D2}","\u{1F6CD}\uFE0F","\u{1F56F}\uFE0F","\u{1F4A1}","\u{1F526}","\u{1F3EE}","\u{1F9F1}","\u{1FA9F}","\u{1FA9E}","\u{1F6AA}","\u{1FA91}","\u{1F6CF}\uFE0F","\u{1F6CB}\uFE0F","\u{1F6BF}","\u{1F6C1}","\u{1F6BD}","\u{1F9FB}","\u{1FAA0}","\u{1F9F8}","\u{1FA86}","\u{1F9F7}","\u{1FAA2}","\u{1F9F9}","\u{1F9F4}","\u{1F9FD}","\u{1F9FC}","\u{1FAA5}","\u{1FA92}","\u{1FAAE}","\u{1F9FA}","\u{1F9E6}","\u{1F9E4}","\u{1F9E3}","\u{1F456}","\u{1F455}","\u{1F3BD}","\u{1F45A}","\u{1F454}","\u{1F457}","\u{1F458}","\u{1F97B}","\u{1FA71}","\u{1F459}","\u{1FA73}","\u{1FA72}","\u{1F9E5}","\u{1F97C}","\u{1F9BA}","\u26D1\uFE0F","\u{1FA96}","\u{1F393}","\u{1F3A9}","\u{1F452}","\u{1F9E2}","\u{1F451}","\u{1FAAD}","\u{1F392}","\u{1F45D}","\u{1F45B}","\u{1F45C}","\u{1F4BC}","\u{1F9F3}","\u2602\uFE0F","\u{1F302}","\u{1F48D}","\u{1F48E}","\u{1F484}","\u{1F460}","\u{1F45F}","\u{1F45E}","\u{1F97F}","\u{1FA74}","\u{1F461}","\u{1F462}","\u{1F97E}","\u{1F9AF}","\u{1F576}\uFE0F","\u{1F453}","\u{1F97D}","\u2697\uFE0F","\u{1F9EB}","\u{1F9EA}","\u{1F321}\uFE0F","\u{1F489}","\u{1F48A}","\u{1FA79}","\u{1FA7A}","\u{1FA7B}","\u{1F9EC}","\u{1F52D}","\u{1F52C}","\u{1F4E1}","\u{1F6F0}\uFE0F","\u{1F9EF}","\u{1FA93}","\u{1FA9C}","\u{1FAA3}","\u{1FA9D}","\u{1F9F2}","\u{1F9F0}","\u{1F5DC}\uFE0F","\u{1F529}","\u{1FA9B}","\u{1FA9A}","\u{1F527}","\u{1F528}","\u2692\uFE0F","\u{1F6E0}\uFE0F","\u26CF\uFE0F","\u2699\uFE0F","\u{1F517}","\u26D3\uFE0F","\u{1F4CE}","\u{1F587}\uFE0F","\u{1F4CF}","\u{1F4D0}","\u{1F58C}\uFE0F","\u{1F58D}\uFE0F","\u{1F58A}\uFE0F","\u{1F58B}\uFE0F","\u2712\uFE0F","\u270F\uFE0F","\u{1F4DD}","\u{1F4D6}","\u{1F4DA}","\u{1F4D2}","\u{1F4D4}","\u{1F4D5}","\u{1F4D3}","\u{1F4D7}","\u{1F4D8}","\u{1F4D9}","\u{1F516}","\u{1F5D2}\uFE0F","\u{1F4C4}","\u{1F4C3}","\u{1F4CB}","\u{1F4D1}","\u{1F4C2}","\u{1F4C1}","\u{1F5C2}\uFE0F","\u{1F5C3}\uFE0F","\u{1F5C4}\uFE0F","\u{1F4CA}","\u{1F4C8}","\u{1F4C9}","\u{1F4C7}","\u{1FAAA}","\u{1F4CC}","\u{1F4CD}","\u2702\uFE0F","\u{1F5D1}\uFE0F","\u{1F4F0}","\u{1F5DE}\uFE0F","\u{1F3F7}\uFE0F","\u{1F4E6}","\u{1F4EB}","\u{1F4EA}","\u{1F4EC}","\u{1F4ED}","\u{1F4EE}","\u2709\uFE0F","\u{1F4E7}","\u{1F4E9}","\u{1F4E8}","\u{1F48C}","\u{1F4E4}","\u{1F4E5}","\u{1F5F3}\uFE0F","\u{1F55B}","\u{1F567}","\u{1F550}","\u{1F55C}","\u{1F551}","\u{1F55D}","\u{1F552}","\u{1F55E}","\u{1F553}","\u{1F55F}","\u{1F554}","\u{1F560}","\u{1F555}","\u{1F561}","\u{1F556}","\u{1F562}","\u{1F557}","\u{1F563}","\u{1F558}","\u{1F564}","\u{1F559}","\u{1F565}","\u{1F55A}","\u{1F566}","\u23F1\uFE0F","\u231A","\u{1F570}\uFE0F","\u231B","\u23F3","\u23F2\uFE0F","\u23F0","\u{1F4C5}","\u{1F4C6}","\u{1F5D3}\uFE0F","\u{1FAA7}","\u{1F6CE}\uFE0F","\u{1F514}","\u{1F4EF}","\u{1F4E2}","\u{1F4E3}","\u{1F50D}","\u{1F50E}","\u{1F52E}","\u{1F9FF}","\u{1FAAC}","\u{1F4FF}","\u{1F3FA}","\u26B1\uFE0F","\u26B0\uFE0F","\u{1FAA6}","\u{1F6AC}","\u{1F4A3}","\u{1FAA4}","\u{1F4DC}","\u2694\uFE0F","\u{1F5E1}\uFE0F","\u{1F6E1}\uFE0F","\u{1F5DD}\uFE0F","\u{1F511}","\u{1F510}","\u{1F50F}","\u{1F512}","\u{1F513}","\u{1F534}","\u{1F7E0}","\u{1F7E1}","\u{1F7E2}","\u{1F535}","\u{1F7E3}","\u{1F7E4}","\u26AB","\u26AA","\u{1F7E5}","\u{1F7E7}","\u{1F7E8}","\u{1F7E9}","\u{1F7E6}","\u{1F7EA}","\u{1F7EB}","\u2B1B","\u2B1C","\u2764\uFE0F","\u{1F9E1}","\u{1F49B}","\u{1F49A}","\u{1F499}","\u{1F49C}","\u{1F90E}","\u{1F5A4}","\u{1F90D}","\u{1FA77}","\u{1FA75}","\u{1FA76}","\u2665\uFE0F","\u2666\uFE0F","\u2663\uFE0F","\u2660\uFE0F","\u2648","\u2649","\u264A","\u264B","\u264C","\u264D","\u264E","\u264F","\u2650","\u2651","\u2652","\u2653","\u26CE","\u2640\uFE0F","\u2642\uFE0F","\u26A7\uFE0F","\u{1F4AD}","\u{1F5EF}\uFE0F","\u{1F4AC}","\u{1F5E8}\uFE0F","\u2755","\u2757","\u2754","\u2753","\u2049\uFE0F","\u203C\uFE0F","\u2B55","\u274C","\u{1F6AB}","\u{1F6B3}","\u{1F6AD}","\u{1F6AF}","\u{1F6B1}","\u{1F6B7}","\u{1F4F5}","\u{1F51E}","\u{1F515}","\u{1F507}","\u{1F170}\uFE0F","\u{1F18E}","\u{1F171}\uFE0F","\u{1F17E}\uFE0F","\u{1F191}","\u{1F198}","\u{1F6D1}","\u26D4","\u{1F4DB}","\u2668\uFE0F","\u{1F4A2}","\u{1F53B}","\u{1F53A}","\u{1F250}","\u3299\uFE0F","\u3297\uFE0F","\u{1F234}","\u{1F235}","\u{1F239}","\u{1F232}","\u{1F251}","\u{1F236}","\u{1F21A}","\u{1F238}","\u{1F23A}","\u{1F237}\uFE0F","\u2734\uFE0F","\u{1F536}","\u{1F538}","\u{1F506}","\u{1F505}","\u{1F19A}","\u{1F3A6}","\u{1F4F6}","\u{1F501}","\u{1F502}","\u{1F500}","\u25B6\uFE0F","\u23E9","\u23ED\uFE0F","\u23EF\uFE0F","\u25C0\uFE0F","\u23EA","\u23EE\uFE0F","\u{1F53C}","\u23EB","\u{1F53D}","\u23EC","\u23F8\uFE0F","\u23F9\uFE0F","\u23FA\uFE0F","\u23CF\uFE0F","\u{1F4F4}","\u{1F6DC}","\u{1F4F3}","\u{1F4F2}","\u{1F508}","\u{1F509}","\u{1F50A}","\u{1F3BC}","\u{1F3B5}","\u{1F3B6}","\u2622\uFE0F","\u2623\uFE0F","\u26A0\uFE0F","\u{1F6B8}","\u269C\uFE0F","\u{1F531}","\u303D\uFE0F","\u{1F530}","\u2733\uFE0F","\u2747\uFE0F","\u267B\uFE0F","\u{1F4B1}","\u{1F4B2}","\u{1F4B9}","\u{1F22F}","\u274E","\u2705","\u2714\uFE0F","\u2611\uFE0F","\u2B06\uFE0F","\u2197\uFE0F","\u27A1\uFE0F","\u2198\uFE0F","\u2B07\uFE0F","\u2199\uFE0F","\u2B05\uFE0F","\u2196\uFE0F","\u2195\uFE0F","\u2194\uFE0F","\u21A9\uFE0F","\u21AA\uFE0F","\u2934\uFE0F","\u2935\uFE0F","\u{1F503}","\u{1F504}","\u{1F519}","\u{1F51B}","\u{1F51D}","\u{1F51A}","\u{1F51C}","\u{1F195}","\u{1F193}","\u{1F199}","\u{1F197}","\u{1F192}","\u{1F196}","\u2139\uFE0F","\u{1F17F}\uFE0F","\u{1F201}","\u{1F202}\uFE0F","\u{1F233}","\u{1F523}","\u{1F524}","\u{1F520}","\u{1F521}","\u{1F522}","#\uFE0F\u20E3","*\uFE0F\u20E3","0\uFE0F\u20E3","1\uFE0F\u20E3","2\uFE0F\u20E3","3\uFE0F\u20E3","4\uFE0F\u20E3","5\uFE0F\u20E3","6\uFE0F\u20E3","7\uFE0F\u20E3","8\uFE0F\u20E3","9\uFE0F\u20E3","\u{1F51F}","\u{1F4A0}","\u{1F537}","\u{1F539}","\u{1F310}","\u{1F3E7}","\u24C2\uFE0F","\u{1F6BE}","\u{1F6BB}","\u{1F6B9}","\u{1F6BA}","\u267F","\u{1F6BC}","\u{1F6D7}","\u{1F6AE}","\u{1F6B0}","\u{1F6C2}","\u{1F6C3}","\u{1F6C4}","\u{1F6C5}","\u{1F49F}","\u269B\uFE0F","\u{1F6D0}","\u{1F549}\uFE0F","\u2638\uFE0F","\u262E\uFE0F","\u262F\uFE0F","\u262A\uFE0F","\u{1FAAF}","\u271D\uFE0F","\u2626\uFE0F","\u2721\uFE0F","\u{1F52F}","\u{1F54E}","\u267E\uFE0F","\u{1F194}","\u2695\uFE0F","\u2716\uFE0F","\u2795","\u2796","\u2797","\u{1F7F0}","\u27B0","\u27BF","\u3030\uFE0F","\xA9\uFE0F","\xAE\uFE0F","\u2122\uFE0F","\u{1F518}","\u{1F533}","\u25FC\uFE0F","\u25FE","\u25AA\uFE0F","\u{1F532}","\u25FB\uFE0F","\u25FD","\u25AB\uFE0F","\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F","\u{1F3C1}","\u{1F6A9}","\u{1F38C}","\u{1F3F4}","\u{1F3F3}\uFE0F","\u{1F3F3}\uFE0F\u200D\u{1F308}","\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F","\u{1F3F4}\u200D\u2620\uFE0F","\u{1F1E6}\u{1F1E8}","\u{1F1E6}\u{1F1E9}","\u{1F1E6}\u{1F1EA}","\u{1F1E6}\u{1F1EB}","\u{1F1E6}\u{1F1EC}","\u{1F1E6}\u{1F1EE}","\u{1F1E6}\u{1F1F1}","\u{1F1E6}\u{1F1F2}","\u{1F1E6}\u{1F1F4}","\u{1F1E6}\u{1F1F6}","\u{1F1E6}\u{1F1F7}","\u{1F1E6}\u{1F1F8}","\u{1F1E6}\u{1F1F9}","\u{1F1E6}\u{1F1FA}","\u{1F1E6}\u{1F1FC}","\u{1F1E6}\u{1F1FD}","\u{1F1E6}\u{1F1FF}","\u{1F1E7}\u{1F1E6}","\u{1F1E7}\u{1F1E7}","\u{1F1E7}\u{1F1E9}","\u{1F1E7}\u{1F1EA}","\u{1F1E7}\u{1F1EB}","\u{1F1E7}\u{1F1EC}","\u{1F1E7}\u{1F1ED}","\u{1F1E7}\u{1F1EE}","\u{1F1E7}\u{1F1EF}","\u{1F1E7}\u{1F1F1}","\u{1F1E7}\u{1F1F2}","\u{1F1E7}\u{1F1F3}","\u{1F1E7}\u{1F1F4}","\u{1F1E7}\u{1F1F6}","\u{1F1E7}\u{1F1F7}","\u{1F1E7}\u{1F1F8}","\u{1F1E7}\u{1F1F9}","\u{1F1E7}\u{1F1FB}","\u{1F1E7}\u{1F1FC}","\u{1F1E7}\u{1F1FE}","\u{1F1E7}\u{1F1FF}","\u{1F1E8}\u{1F1E6}","\u{1F1E8}\u{1F1E8}","\u{1F1E8}\u{1F1E9}","\u{1F1E8}\u{1F1EB}","\u{1F1E8}\u{1F1EC}","\u{1F1E8}\u{1F1ED}","\u{1F1E8}\u{1F1EE}","\u{1F1E8}\u{1F1F0}","\u{1F1E8}\u{1F1F1}","\u{1F1E8}\u{1F1F2}","\u{1F1E8}\u{1F1F3}","\u{1F1E8}\u{1F1F4}","\u{1F1E8}\u{1F1F5}","\u{1F1E8}\u{1F1F7}","\u{1F1E8}\u{1F1FA}","\u{1F1E8}\u{1F1FB}","\u{1F1E8}\u{1F1FC}","\u{1F1E8}\u{1F1FD}","\u{1F1E8}\u{1F1FE}","\u{1F1E8}\u{1F1FF}","\u{1F1E9}\u{1F1EA}","\u{1F1E9}\u{1F1EC}","\u{1F1E9}\u{1F1EF}","\u{1F1E9}\u{1F1F0}","\u{1F1E9}\u{1F1F2}","\u{1F1E9}\u{1F1F4}","\u{1F1E9}\u{1F1FF}","\u{1F1EA}\u{1F1E6}","\u{1F1EA}\u{1F1E8}","\u{1F1EA}\u{1F1EA}","\u{1F1EA}\u{1F1EC}","\u{1F1EA}\u{1F1ED}","\u{1F1EA}\u{1F1F7}","\u{1F1EA}\u{1F1F8}","\u{1F1EA}\u{1F1F9}","\u{1F1EA}\u{1F1FA}","\u{1F1EB}\u{1F1EE}","\u{1F1EB}\u{1F1EF}","\u{1F1EB}\u{1F1F0}","\u{1F1EB}\u{1F1F2}","\u{1F1EB}\u{1F1F4}","\u{1F1EB}\u{1F1F7}","\u{1F1EC}\u{1F1E6}","\u{1F1EC}\u{1F1E7}","\u{1F1EC}\u{1F1E9}","\u{1F1EC}\u{1F1EA}","\u{1F1EC}\u{1F1EB}","\u{1F1EC}\u{1F1EC}","\u{1F1EC}\u{1F1ED}","\u{1F1EC}\u{1F1EE}","\u{1F1EC}\u{1F1F1}","\u{1F1EC}\u{1F1F2}","\u{1F1EC}\u{1F1F3}","\u{1F1EC}\u{1F1F5}","\u{1F1EC}\u{1F1F6}","\u{1F1EC}\u{1F1F7}","\u{1F1EC}\u{1F1F8}","\u{1F1EC}\u{1F1F9}","\u{1F1EC}\u{1F1FA}","\u{1F1EC}\u{1F1FC}","\u{1F1EC}\u{1F1FE}","\u{1F1ED}\u{1F1F0}","\u{1F1ED}\u{1F1F2}","\u{1F1ED}\u{1F1F3}","\u{1F1ED}\u{1F1F7}","\u{1F1ED}\u{1F1F9}","\u{1F1ED}\u{1F1FA}","\u{1F1EE}\u{1F1E8}","\u{1F1EE}\u{1F1E9}","\u{1F1EE}\u{1F1EA}","\u{1F1EE}\u{1F1F1}","\u{1F1EE}\u{1F1F2}","\u{1F1EE}\u{1F1F3}","\u{1F1EE}\u{1F1F4}","\u{1F1EE}\u{1F1F6}","\u{1F1EE}\u{1F1F7}","\u{1F1EE}\u{1F1F8}","\u{1F1EE}\u{1F1F9}","\u{1F1EF}\u{1F1EA}","\u{1F1EF}\u{1F1F2}","\u{1F1EF}\u{1F1F4}","\u{1F1EF}\u{1F1F5}","\u{1F1F0}\u{1F1EA}","\u{1F1F0}\u{1F1EC}","\u{1F1F0}\u{1F1ED}","\u{1F1F0}\u{1F1EE}","\u{1F1F0}\u{1F1F2}","\u{1F1F0}\u{1F1F3}","\u{1F1F0}\u{1F1F5}","\u{1F1F0}\u{1F1F7}","\u{1F1F0}\u{1F1FC}","\u{1F1F0}\u{1F1FE}","\u{1F1F0}\u{1F1FF}","\u{1F1F1}\u{1F1E6}","\u{1F1F1}\u{1F1E7}","\u{1F1F1}\u{1F1E8}","\u{1F1F1}\u{1F1EE}","\u{1F1F1}\u{1F1F0}","\u{1F1F1}\u{1F1F7}","\u{1F1F1}\u{1F1F8}","\u{1F1F1}\u{1F1F9}","\u{1F1F1}\u{1F1FA}","\u{1F1F1}\u{1F1FB}","\u{1F1F1}\u{1F1FE}","\u{1F1F2}\u{1F1E6}","\u{1F1F2}\u{1F1E8}","\u{1F1F2}\u{1F1E9}","\u{1F1F2}\u{1F1EA}","\u{1F1F2}\u{1F1EB}","\u{1F1F2}\u{1F1EC}","\u{1F1F2}\u{1F1ED}","\u{1F1F2}\u{1F1F0}","\u{1F1F2}\u{1F1F1}","\u{1F1F2}\u{1F1F2}","\u{1F1F2}\u{1F1F3}","\u{1F1F2}\u{1F1F4}","\u{1F1F2}\u{1F1F5}","\u{1F1F2}\u{1F1F6}","\u{1F1F2}\u{1F1F7}","\u{1F1F2}\u{1F1F8}","\u{1F1F2}\u{1F1F9}","\u{1F1F2}\u{1F1FA}","\u{1F1F2}\u{1F1FB}","\u{1F1F2}\u{1F1FC}","\u{1F1F2}\u{1F1FD}","\u{1F1F2}\u{1F1FE}","\u{1F1F2}\u{1F1FF}","\u{1F1F3}\u{1F1E6}","\u{1F1F3}\u{1F1E8}","\u{1F1F3}\u{1F1EA}","\u{1F1F3}\u{1F1EB}","\u{1F1F3}\u{1F1EC}","\u{1F1F3}\u{1F1EE}","\u{1F1F3}\u{1F1F1}","\u{1F1F3}\u{1F1F4}","\u{1F1F3}\u{1F1F5}","\u{1F1F3}\u{1F1F7}","\u{1F1F3}\u{1F1FA}","\u{1F1F3}\u{1F1FF}","\u{1F1F4}\u{1F1F2}","\u{1F1F5}\u{1F1E6}","\u{1F1F5}\u{1F1EA}","\u{1F1F5}\u{1F1EB}","\u{1F1F5}\u{1F1EC}","\u{1F1F5}\u{1F1ED}","\u{1F1F5}\u{1F1F0}","\u{1F1F5}\u{1F1F1}","\u{1F1F5}\u{1F1F2}","\u{1F1F5}\u{1F1F3}","\u{1F1F5}\u{1F1F7}","\u{1F1F5}\u{1F1F8}","\u{1F1F5}\u{1F1F9}","\u{1F1F5}\u{1F1FC}","\u{1F1F5}\u{1F1FE}","\u{1F1F6}\u{1F1E6}","\u{1F1F7}\u{1F1EA}","\u{1F1F7}\u{1F1F4}","\u{1F1F7}\u{1F1F8}","\u{1F1F7}\u{1F1FA}","\u{1F1F7}\u{1F1FC}","\u{1F1F8}\u{1F1E6}","\u{1F1F8}\u{1F1E7}","\u{1F1F8}\u{1F1E8}","\u{1F1F8}\u{1F1E9}","\u{1F1F8}\u{1F1EA}","\u{1F1F8}\u{1F1EC}","\u{1F1F8}\u{1F1ED}","\u{1F1F8}\u{1F1EE}","\u{1F1F8}\u{1F1EF}","\u{1F1F8}\u{1F1F0}","\u{1F1F8}\u{1F1F1}","\u{1F1F8}\u{1F1F2}","\u{1F1F8}\u{1F1F3}","\u{1F1F8}\u{1F1F4}","\u{1F1F8}\u{1F1F7}","\u{1F1F8}\u{1F1F8}","\u{1F1F8}\u{1F1F9}","\u{1F1F8}\u{1F1FB}","\u{1F1F8}\u{1F1FD}","\u{1F1F8}\u{1F1FE}","\u{1F1F8}\u{1F1FF}","\u{1F1F9}\u{1F1E6}","\u{1F1F9}\u{1F1E8}","\u{1F1F9}\u{1F1E9}","\u{1F1F9}\u{1F1EB}","\u{1F1F9}\u{1F1EC}","\u{1F1F9}\u{1F1ED}","\u{1F1F9}\u{1F1EF}","\u{1F1F9}\u{1F1F0}","\u{1F1F9}\u{1F1F1}","\u{1F1F9}\u{1F1F2}","\u{1F1F9}\u{1F1F3}","\u{1F1F9}\u{1F1F4}","\u{1F1F9}\u{1F1F7}","\u{1F1F9}\u{1F1F9}","\u{1F1F9}\u{1F1FB}","\u{1F1F9}\u{1F1FC}","\u{1F1F9}\u{1F1FF}","\u{1F1FA}\u{1F1E6}","\u{1F1FA}\u{1F1EC}","\u{1F1FA}\u{1F1F2}","\u{1F1FA}\u{1F1F3}","\u{1F1FA}\u{1F1F8}","\u{1F1FA}\u{1F1FE}","\u{1F1FA}\u{1F1FF}","\u{1F1FB}\u{1F1E6}","\u{1F1FB}\u{1F1E8}","\u{1F1FB}\u{1F1EA}","\u{1F1FB}\u{1F1EC}","\u{1F1FB}\u{1F1EE}","\u{1F1FB}\u{1F1F3}","\u{1F1FB}\u{1F1FA}","\u{1F1FC}\u{1F1EB}","\u{1F1FC}\u{1F1F8}","\u{1F1FD}\u{1F1F0}","\u{1F1FE}\u{1F1EA}","\u{1F1FE}\u{1F1F9}","\u{1F1FF}\u{1F1E6}","\u{1F1FF}\u{1F1F2}","\u{1F1FF}\u{1F1FC}","\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}","\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}","\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}"];return a[Math.floor(Math.random()*a.length)]}};var V4=(()=>{let a=class a{constructor(){this.item={value:""}}};a.\u0275fac=function(r){return new(r||a)},a.\u0275cmp=_({type:a,selectors:[["speed-item"]],inputs:{item:"item"},standalone:!0,features:[U],decls:2,vars:1,consts:[[1,"item"]],template:function(r,s){r&1&&(M(0,"p",0),P(1),V()),r&2&&(p(1),n1(s.item.value))},styles:['.item[_ngcontent-%COMP%]{font-family:"Noto Color Emoji",sans-serif;cursor:pointer}']});let c=a;return c})();function u2(c){c||(Z3(u2),c=B(f2));let a=new _1(i=>c.onDestroy(i.next.bind(i)));return i=>i.pipe(q1(a))}function C4(c){return c&&c.constructor&&typeof c.constructor.isBuffer=="function"&&c.constructor.isBuffer(c)}function d4(c){return c}function G2(c,a){a=a||{};let i=a.delimiter||".",e=a.maxDepth,r=a.transformKey||d4,s={};function n(o,t,f){f=f||1,Object.keys(o).forEach(function(l){let m=o[l],z=a.safe&&Array.isArray(m),H=Object.prototype.toString.call(m),u=C4(m),w=H==="[object Object]"||H==="[object Array]",y=t?t+i+r(l):r(l);if(!z&&!u&&w&&Object.keys(m).length&&(!a.maxDepth||f<e))return n(m,y,f+1);s[y]=m})}return n(c),s}function j2(c,a){a=a||{};let i=a.delimiter||".",e=a.overwrite||!1,r=a.transformKey||d4,s={};if(C4(c)||Object.prototype.toString.call(c)!=="[object Object]")return c;function o(l){let m=Number(l);return isNaN(m)||l.indexOf(".")!==-1||a.object?l:m}function t(l,m,z){return Object.keys(z).reduce(function(H,u){return H[l+i+u]=z[u],H},m)}function f(l){let m=Object.prototype.toString.call(l),z=m==="[object Array]",H=m==="[object Object]";if(l){if(z)return!l.length;if(H)return!Object.keys(l).length}else return!0}return c=Object.keys(c).reduce(function(l,m){let z=Object.prototype.toString.call(c[m]);return!(z==="[object Object]"||z==="[object Array]")||f(c[m])?(l[m]=c[m],l):t(m,l,G2(c[m],a))},{}),Object.keys(c).forEach(function(l){let m=l.split(i).map(r),z=o(m.shift()),H=o(m[0]),u=s;for(;H!==void 0;){if(z==="__proto__")return;let w=Object.prototype.toString.call(u[z]),y=w==="[object Object]"||w==="[object Array]";if(!e&&!y&&typeof u[z]<"u")return;(e&&!y||!e&&u[z]==null)&&(u[z]=typeof H=="number"&&!a.object?[]:{}),u=u[z],m.length>0&&(z=o(m.shift()),H=o(m[0]))}u[z]=j2(c[l],a)}),s}var Y2=class{translations;constructor(a){this.translations=a}getTranslation(a){return g1(this.translations.get(a)||{})}},b4=new O("TRANSLOCO_LOADER");function Z2(c,a){return c&&(Object.prototype.hasOwnProperty.call(c,a)?c[a]:a.split(".").reduce((i,e)=>i?.[e],c))}function g8(c,a,i){c=S({},c);let e=a.split("."),r=e.length-1;return e.reduce((s,n,o)=>(o===r?s[n]=i:s[n]=Array.isArray(s[n])?s[n].slice():S({},s[n]),s&&s[n]),c),c}function x4(c){return c?Array.isArray(c)?c.length:a3(c)?Object.keys(c).length:c?c.length:0:0}function b8(c){return x4(c)===0}function x8(c){return typeof c=="function"}function k1(c){return typeof c=="string"}function a3(c){return!!c&&typeof c=="object"&&!Array.isArray(c)}function N4(c){return c.replace(/(?:^\w|[A-Z]|\b\w)/g,(a,i)=>i==0?a.toLowerCase():a.toUpperCase()).replace(/\s+|_|-|\//g,"")}function K2(c){return c==null}function L4(c){return K2(c)===!1}function e3(c){return c&&typeof c.scope=="string"}function N8(c){return Array.isArray(c)&&c.every(e3)}function S8(c){return c&&a3(c.loader)}function w8(c){return j2(c)}function g4(c){return G2(c,{safe:!0})}var A1=new O("TRANSLOCO_CONFIG",{providedIn:"root",factory:()=>j1}),j1={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"]};function y8(c={}){return O1(S(S({},j1),c),{missingHandler:S(S({},j1.missingHandler),c.missingHandler),flatten:S(S({},j1.flatten),c.flatten)})}var S4=new O("TRANSLOCO_TRANSPILER"),k8=(()=>{class c{config=B(A1,{optional:!0})??j1;get interpolationMatcher(){return A8(this.config)}transpile({value:i,params:e={},translation:r,key:s}){if(k1(i)){let n,o=i;for(;(n=this.interpolationMatcher.exec(o))!==null;){let[t,f]=n;o=o.replace(t,()=>{let l=f.trim(),m=Z2(e,l);return L4(m)?m:L4(r[l])?this.transpile({params:e,translation:r,key:s,value:r[l]}):""})}return o}else e&&(a3(i)?i=this.handleObject({value:i,params:e,translation:r,key:s}):Array.isArray(i)&&(i=this.handleArray({value:i,params:e,translation:r,key:s})));return i}handleObject({value:i,params:e={},translation:r,key:s}){let n=i;return Object.keys(e).forEach(o=>{let t=this.transpile({value:Z2(n,o),params:Z2(e,o),translation:r,key:s});n=g8(n,o,t)}),n}handleArray(r){var s=r,{value:i}=s,e=E3(s,["value"]);return i.map(n=>this.transpile(S({value:n},e)))}static \u0275fac=function(e){return new(e||c)};static \u0275prov=k({token:c,factory:c.\u0275fac})}return c})();function A8(c){let[a,i]=c.interpolation;return new RegExp(`${a}([^${a}${i}]*?)${i}`,"g")}var w4=new O("TRANSLOCO_MISSING_HANDLER"),P8=(()=>{class c{handle(i,e){if(e.missingHandler.logMissingKey&&!e.prodMode){let r=`Missing translation for '${i}'`;console.warn(`%c ${r}`,"font-size: 12px; color: red")}return i}static \u0275fac=function(e){return new(e||c)};static \u0275prov=k({token:c,factory:c.\u0275fac})}return c})(),y4=new O("TRANSLOCO_INTERCEPTOR"),T8=(()=>{class c{preSaveTranslation(i){return i}preSaveTranslationKey(i,e){return e}static \u0275fac=function(e){return new(e||c)};static \u0275prov=k({token:c,factory:c.\u0275fac})}return c})(),k4=new O("TRANSLOCO_FALLBACK_STRATEGY"),B8=(()=>{class c{userConfig;constructor(i){this.userConfig=i}getNextLangs(){let i=this.userConfig.fallbackLang;if(!i)throw new Error("When using the default fallback, a fallback language must be provided in the config!");return Array.isArray(i)?i:[i]}static \u0275fac=function(e){return new(e||c)(A(A1))};static \u0275prov=k({token:c,factory:c.\u0275fac})}return c})();function Z1(c){if(!c)return"";let a=c.split("/");return a.pop(),a.join("/")}function o1(c){return c?c.split("/").pop():""}function X2(c,a,i="|"){if(k1(c)){let e=c.split(i),r=e.pop();return r===a?[!0,e.toString()]:[!1,r]}return[!1,""]}function F8(c,a){let[i]=X2(a,"static");return i?!1:!!c.config.reRenderOnLangChange}function D8(c){return c?a=>a:o2(1)}function R8(c,a){return Object.keys(c).reduce((i,e)=>(i[`${a}/${e}`]=c[e],i),{})}function A4(c,a){return S8(c)?R8(c.loader,a):void 0}function $2(c){return{scope:Z1(c)||null,langName:o1(c)}}function P4(c){let{path:a,inlineLoader:i,mainLoader:e,data:r}=c;if(i){let s=i[a];if(x8(s)===!1)throw`You're using an inline loader but didn't provide a loader for ${a}`;return i[a]().then(n=>n.default?n.default:n)}return e.getTranslation(a,r)}function O8({mainLoader:c,path:a,data:i,fallbackPath:e,inlineLoader:r}){return(e?[a,e]:[a]).map(n=>{let o=P4({path:n,mainLoader:c,inlineLoader:r,data:i});return E2(o).pipe(b1(t=>({translation:t,lang:n})))})}var _8;var E8=(()=>{class c{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new E1;events$=this.events.asObservable();config;constructor(i,e,r,s,n,o){this.loader=i,this.parser=e,this.missingHandler=r,this.interceptor=s,this.fallbackStrategy=o,this.loader||(this.loader=new Y2(this.translations)),_8=this,this.config=JSON.parse(JSON.stringify(n)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new s2(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.events$.pipe(u2()).subscribe(t=>{t.type==="translationLoadSuccess"&&t.wasFailure&&this.setActiveLang(t.payload.langName)})}getDefaultLang(){return this.defaultLang}setDefaultLang(i){this.defaultLang=i}getActiveLang(){return this.lang.getValue()}setActiveLang(i){return this.parser.onLangChanged?.(i),this.lang.next(i),this.events.next({type:"langChanged",payload:$2(i)}),this}setAvailableLangs(i){this.availableLangs=i}getAvailableLangs(){return this.availableLangs}load(i,e={}){let r=this.cache.get(i);if(r)return r;let s,n=this._isLangScoped(i),o;n&&(o=Z1(i));let t={path:i,mainLoader:this.loader,inlineLoader:e.inlineLoader,data:n?{scope:o}:void 0};if(this.useFallbackTranslation(i)){let l=n?`${o}/${this.firstFallbackLang}`:this.firstFallbackLang,m=O8(O1(S({},t),{fallbackPath:l}));s=I2(m)}else{let l=P4(t);s=E2(l)}let f=s.pipe(G3(this.config.failedRetries),x1(l=>{if(Array.isArray(l)){l.forEach(m=>{this.handleSuccess(m.lang,m.translation),m.lang!==i&&this.cache.set(m.lang,g1({}))});return}this.handleSuccess(i,l)}),U3(l=>(this.config.prodMode||console.error(`Error while trying to load "${i}"`,l),this.handleFailure(i,e))),j3(1));return this.cache.set(i,f),f}translate(i,e={},r=this.getActiveLang()){if(!i)return i;let{scope:s,resolveLang:n}=this.resolveLangAndScope(r);if(Array.isArray(i))return i.map(f=>this.translate(s?`${s}.${f}`:f,e,n));i=s?`${s}.${i}`:i;let o=this.getTranslation(n),t=o[i];return t?this.parser.transpile({value:t,params:e,translation:o,key:i}):this._handleMissingKey(i,t,e)}selectTranslate(i,e,r,s=!1){let n,o=(f,l)=>this.load(f,l).pipe(b1(()=>s?this.translateObject(i,e,f):this.translate(i,e,f)));if(K2(r))return this.langChanges$.pipe(I1(f=>o(f)));if(N8(r)||e3(r)){let f=Array.isArray(r)?r[0]:r;r=f.scope,n=A4(f,f.scope)}if(r=r,this.isLang(r)||this.isScopeWithLang(r))return o(r);let t=r;return this.langChanges$.pipe(I1(f=>o(`${t}/${f}`,{inlineLoader:n})))}isScopeWithLang(i){return this.isLang(o1(i))}translateObject(i,e={},r=this.getActiveLang()){if(k1(i)||Array.isArray(i)){let{resolveLang:n,scope:o}=this.resolveLangAndScope(r);if(Array.isArray(i))return i.map(l=>this.translateObject(o?`${o}.${l}`:l,e,n));let t=this.getTranslation(n);i=o?`${o}.${i}`:i;let f=w8(this.getObjectByKey(t,i));return b8(f)?this.translate(i,e,r):this.parser.transpile({value:f,params:e,translation:t,key:i})}let s=[];for(let[n,o]of this.getEntries(i))s.push(this.translateObject(n,o,r));return s}selectTranslateObject(i,e,r){if(k1(i)||Array.isArray(i))return this.selectTranslate(i,e,r,!0);let[[s,n],...o]=this.getEntries(i);return this.selectTranslateObject(s,n,r).pipe(b1(t=>{let f=[t];for(let[l,m]of o)f.push(this.translateObject(l,m,r));return f}))}getTranslation(i){if(i){if(this.isLang(i))return this.translations.get(i)||{};{let{scope:e,resolveLang:r}=this.resolveLangAndScope(i),s=this.translations.get(r)||{};return this.getObjectByKey(s,e)}}return this.translations}selectTranslation(i){let e=this.langChanges$;if(i){let r=o1(i)!==i;this.isLang(i)||r?e=g1(i):e=this.langChanges$.pipe(b1(s=>`${i}/${s}`))}return e.pipe(I1(r=>this.load(r).pipe(b1(()=>this.getTranslation(r)))))}setTranslation(i,e=this.getActiveLang(),r={}){let n=S(S({},{merge:!0,emitChange:!0}),r),o=Z1(e),t=i;if(o){let H=this.getMappedScope(o);t=g4({[H]:i})}let f=o?o1(e):e,l=S(S({},n.merge&&this.getTranslation(f)),t),m=this.config.flatten.aot?l:g4(l),z=this.interceptor.preSaveTranslation(m,f);this.translations.set(f,z),n.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(i,e,r={}){let s=r.lang||this.getActiveLang(),n=this.interceptor.preSaveTranslationKey(i,e,s),o={[i]:n};this.setTranslation(o,s,O1(S({},r),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:i}){let e=Array.isArray(i)?i[0]:i;i&&this.useFallbackTranslation(e)&&(this.firstFallbackLang=e)}_handleMissingKey(i,e,r){if(this.config.missingHandler.allowEmpty&&e==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let s=this.translate(i,r,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,s}return this.missingHandler.handle(i,this.getMissingHandlerData(),r)}_isLangScoped(i){return this.getAvailableLangsIds().indexOf(i)===-1}isLang(i){return this.getAvailableLangsIds().indexOf(i)!==-1}_loadDependencies(i,e){let r=o1(i);return this._isLangScoped(i)&&!this.isLoadedTranslation(r)?I3([this.load(r),this.load(i,{inlineLoader:e})]):this.load(i,{inlineLoader:e})}_completeScopeWithLang(i){return this._isLangScoped(i)&&!this.isLang(o1(i))?`${i}/${this.getActiveLang()}`:i}_setScopeAlias(i,e){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[i]=e}ngOnDestroy(){this.cache.clear()}isLoadedTranslation(i){return x4(this.getTranslation(i))}getAvailableLangsIds(){let i=this.getAvailableLangs()[0];return k1(i)?this.getAvailableLangs():this.getAvailableLangs().map(e=>e.id)}getMissingHandlerData(){return O1(S({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(i){return this.config.missingHandler.useFallbackTranslation&&i!==this.firstFallbackLang}handleSuccess(i,e){this.setTranslation(e,i,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:$2(i)}),this.failedLangs.forEach(r=>this.cache.delete(r)),this.failedLangs.clear()}handleFailure(i,e){K2(e.failedCounter)&&(e.failedCounter=0,e.fallbackLangs||(e.fallbackLangs=this.fallbackStrategy.getNextLangs(i)));let r=i.split("/"),n=e.fallbackLangs[e.failedCounter];if(this.failedLangs.add(i),this.cache.has(n))return this.handleSuccess(n,this.getTranslation(n)),n2;let o=n===r[r.length-1];if(!n||o){let f="Unable to load translation and all the fallback languages";throw r.length>1&&(f+=", did you misspelled the scope name?"),new Error(f)}let t=n;return r.length>1&&(r[r.length-1]=n,t=r.join("/")),e.failedCounter++,this.events.next({type:"translationLoadFailure",payload:$2(i)}),this.load(t,e)}getMappedScope(i){let{scopeMapping:e={}}=this.config;return e[i]||N4(i)}resolveLangAndScope(i){let e=i,r;if(this._isLangScoped(i)){let s=o1(i),n=this.isLang(s);e=n?s:this.getActiveLang(),r=this.getMappedScope(n?Z1(i):i)}return{scope:r,resolveLang:e}}getObjectByKey(i,e){let r={},s=`${e}.`;for(let n in i)n.startsWith(s)&&(r[n.replace(s,"")]=i[n]);return r}getEntries(i){return i instanceof Map?i.entries():Object.entries(i)}static \u0275fac=function(e){return new(e||c)(A(b4,8),A(S4),A(w4),A(y4),A(A1),A(k4))};static \u0275prov=k({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),I8=(()=>{class c{html;static \u0275fac=function(e){return new(e||c)};static \u0275cmp=_({type:c,selectors:[["ng-component"]],inputs:{html:"html"},standalone:!0,features:[U],decls:1,vars:1,consts:[[1,"transloco-loader-template",3,"innerHTML"]],template:function(e,r){e&1&&$(0,"div",0),e&2&&b("innerHTML",r.html,t2)},encapsulation:2})}return c})(),J2=class{view;vcr;constructor(a,i){this.view=a,this.vcr=i}attachView(){if(this.view instanceof W2)this.vcr.createEmbeddedView(this.view);else if(k1(this.view)){let a=this.vcr.createComponent(I8);a.instance.html=this.view,a.hostView.detectChanges()}else this.vcr.createComponent(this.view)}detachView(){this.vcr.clear()}},q8=new O("TRANSLOCO_LANG"),U8=new O("TRANSLOCO_LOADING_TEMPLATE"),W8=new O("TRANSLOCO_SCOPE"),Q2=class{initialized=!1;resolve({inline:a,provider:i,active:e}){let r=e;if(this.initialized)return r=e,r;if(i){let[,s]=X2(i,"static");r=s}if(a){let[,s]=X2(a,"static");r=s}return this.initialized=!0,r}resolveLangBasedOnScope(a){return Z1(a)?o1(a):a}resolveLangPath(a,i){return i?`${i}/${a}`:a}},c3=class{service;constructor(a){this.service=a}resolve(a){let{inline:i,provider:e}=a;if(i)return i;if(e){if(e3(e)){let{scope:r,alias:s=N4(r)}=e;return this.service._setScopeAlias(r,s),r}return e}}},T4=(()=>{class c{destroyRef=B(f2);service=B(E8);tpl=B(W2,{optional:!0});providerLang=B(q8,{optional:!0});providerScope=B(W8,{optional:!0});providedLoadingTpl=B(U8,{optional:!0});cdr=B(U1);host=B(p1);vcr=B(K3);renderer=B(l2);view;memo=new Map;key;params={};inlineScope;inlineRead;prefix;inlineLang;inlineTpl;currentLang;loaderTplHandler;initialized=!1;path;langResolver=new Q2;scopeResolver=new c3(this.service);strategy=this.tpl===null?"attribute":"structural";static ngTemplateContextGuard(i,e){return!0}ngOnInit(){let i=F8(this.service,this.providerLang||this.inlineLang);if(this.service.langChanges$.pipe(I1(e=>{let r=this.langResolver.resolve({inline:this.inlineLang,provider:this.providerLang,active:e});return Array.isArray(this.providerScope)?I2(this.providerScope.map(s=>this.resolveScope(r,s))):this.resolveScope(r,this.providerScope)}),D8(i),u2(this.destroyRef)).subscribe(()=>{this.currentLang=this.langResolver.resolveLangBasedOnScope(this.path),this.strategy==="attribute"?this.attributeStrategy():this.structuralStrategy(this.currentLang,this.prefix||this.inlineRead),this.cdr.markForCheck(),this.initialized=!0}),!this.initialized){let e=this.resolveLoadingContent();e&&(this.loaderTplHandler=new J2(e,this.vcr),this.loaderTplHandler.attachView())}}ngOnChanges(i){this.strategy==="attribute"&&Object.keys(i).some(r=>!i[r].firstChange)&&this.attributeStrategy()}attributeStrategy(){this.detachLoader(),this.renderer.setProperty(this.host.nativeElement,"innerText",this.service.translate(this.key,this.params,this.currentLang))}structuralStrategy(i,e){this.memo.clear();let r=this.getTranslateFn(i,e);this.view?(this.view.context.$implicit=r,this.view.context.currentLang=this.currentLang):(this.detachLoader(),this.view=this.vcr.createEmbeddedView(this.tpl,{$implicit:r,currentLang:this.currentLang}))}getTranslateFn(i,e){return(r,s)=>{let n=e?`${e}.${r}`:r,o=s?`${n}${JSON.stringify(s)}`:n;return this.memo.has(o)||this.memo.set(o,this.service.translate(n,s,i)),this.memo.get(o)}}resolveLoadingContent(){return this.inlineTpl||this.providedLoadingTpl}ngOnDestroy(){this.memo.clear()}detachLoader(){this.loaderTplHandler?.detachView()}resolveScope(i,e){let r=this.scopeResolver.resolve({inline:this.inlineScope,provider:e});this.path=this.langResolver.resolveLangPath(i,r);let s=A4(e,r);return this.service._loadDependencies(this.path,s)}static \u0275fac=function(e){return new(e||c)};static \u0275dir=z1({type:c,selectors:[["","transloco",""]],inputs:{key:["transloco","key"],params:["translocoParams","params"],inlineScope:["translocoScope","inlineScope"],inlineRead:["translocoRead","inlineRead"],prefix:["translocoPrefix","prefix"],inlineLang:["translocoLang","inlineLang"],inlineTpl:["translocoLoadingTpl","inlineTpl"]},standalone:!0,features:[X]})}return c})();function B4(c){let a=[Z8(k8),Y8(P8),K8(T8),$8(B8)];return c.config&&a.push(G8(c.config)),c.loader&&a.push(j8(c.loader)),a}function G8(c){return H1([{provide:A1,useValue:y8(c)}])}function j8(c){return H1([{provide:b4,useClass:c}])}function Z8(c){return H1([{provide:S4,useClass:c,deps:[A1]}])}function $8(c){return H1([{provide:k4,useClass:c,deps:[A1]}])}function Y8(c){return H1([{provide:w4,useClass:c}])}function K8(c){return H1([{provide:y4,useClass:c}])}var R7=new O("TRANSLOCO_TEST_LANGS - Available testing languages"),O7=new O("TRANSLOCO_TEST_OPTIONS - Testing options");var i3;try{i3=typeof Intl<"u"&&Intl.v8BreakIterator}catch{i3=!1}var F4=(()=>{let a=class a{constructor(e){this._platformId=e,this.isBrowser=this._platformId?n4(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||i3)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};a.\u0275fac=function(r){return new(r||a)(A($3))},a.\u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),D4=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=R({type:a}),a.\u0275inj=D({});let c=a;return c})();var r3=class{constructor(a,i){this._document=i;let e=this._textarea=this._document.createElement("textarea"),r=e.style;r.position="fixed",r.top=r.opacity="0",r.left="-999em",e.setAttribute("aria-hidden","true"),e.value=a,e.readOnly=!0,(this._document.fullscreenElement||this._document.body).appendChild(e)}copy(){let a=this._textarea,i=!1;try{if(a){let e=this._document.activeElement;a.select(),a.setSelectionRange(0,a.value.length),i=this._document.execCommand("copy"),e&&e.focus()}}catch{}return i}destroy(){let a=this._textarea;a&&(a.remove(),this._textarea=void 0)}},R4=(()=>{let a=class a{constructor(e){this._document=e}copy(e){let r=this.beginCopy(e),s=r.copy();return r.destroy(),s}beginCopy(e){return new r3(e,this._document)}};a.\u0275fac=function(r){return new(r||a)(A(G1))},a.\u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var O4=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=R({type:a}),a.\u0275inj=D({});let c=a;return c})();var P1=new O("shareButtonsConfig");var V2=function(c){return c.Anchor="anchor",c.Window="window",c}(V2||{});function s3(c){return c&&typeof c=="object"&&!Array.isArray(c)}function n3(c,...a){if(!a.length)return c;let i=a.shift();if(s3(c)&&s3(i))for(let e in i)s3(i[e])?(c[e]||Object.assign(c,{[e]:{}}),n3(c[e],i[e])):Object.assign(c,{[e]:i[e]});return n3(c,...a)}function Q8(c,a){if(c){if(/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(c))return c;console.warn(`[ShareButtons]: Sharing link '${c}' is invalid!`)}return a}function c0(){return new _1(c=>document.defaultView.print())}function a0({params:c,data:a,clipboard:i,updater:e}){return g1(null).pipe(x1(()=>{i.copy(c.url),e.next({icon:a.successIcon,text:a.successText,disabled:!0})}),W3(a.delay),x1(()=>e.next({icon:a.icon,text:a.text,disabled:!1})),o2(1))}var M2={description:c=>c.description?`${c.description}\r
${c.url}`:c.url},E4={facebook:{type:"facebook",text:"Facebook",ariaLabel:"Share on Facebook",icon:["fab","facebook-f"],color:"#4267B2",share:{desktop:"https://www.facebook.com/sharer/sharer.php?"},params:{url:"u"}},twitter:{type:"twitter",text:"Twitter",ariaLabel:"Share on Twitter",icon:["fab","twitter"],color:"#00acee",share:{desktop:"https://twitter.com/intent/tweet?"},params:{url:"url",description:"text",tags:"hashtags",via:"via"}},linkedin:{type:"linkedin",text:"LinkedIn",ariaLabel:"Share on LinkedIn",icon:["fab","linkedin-in"],color:"#006fa6",share:{desktop:"https://www.linkedin.com/shareArticle?"},params:{url:"url",title:"title",description:"summary"}},pinterest:{type:"pinterest",text:"Pinterest",ariaLabel:"Share on Pinterest",icon:["fab","pinterest-p"],color:"#BD091D",share:{desktop:"https://pinterest.com/pin/create/button/?"},params:{url:"url",description:"description",image:"media"}},reddit:{type:"reddit",text:"Reddit",ariaLabel:"Share on Reddit",icon:["fab","reddit-alien"],color:"#FF4006",share:{desktop:"https://www.reddit.com/submit?"},params:{url:"url",title:"title"}},tumblr:{type:"tumblr",text:"Tumblr",ariaLabel:"Share on Tumblr",icon:["fab","tumblr"],color:"#36465D",share:{desktop:"https://tumblr.com/widgets/share/tool?"},params:{url:"canonicalUrl",description:"caption",tags:"tags"}},mix:{type:"mix",text:"Mix",ariaLabel:"Share on Mix",icon:["fab","mix"],color:"#eb4924",share:{desktop:"https://mix.com/add?"},params:{url:"url"}},viber:{type:"viber",text:"Viber",ariaLabel:"Share on Viber",icon:["fab","viber"],color:"#665ca7",share:{android:"viber://forward?",ios:"viber://forward?"},params:{description:"text"},paramsFunc:M2},vk:{type:"vk",text:"VKontakte",ariaLabel:"Share on VKontakte",icon:["fab","vk"],color:"#4C75A3",share:{desktop:"https://vk.com/share.php?"},params:{url:"url"}},telegram:{type:"telegram",text:"Telegram",ariaLabel:"Share on Telegram",icon:["fab","telegram-plane"],color:"#0088cc",share:{desktop:"https://t.me/share/url?"},params:{url:"url",description:"text"}},messenger:{type:"messenger",text:"Messenger",ariaLabel:"Share on Messenger",icon:["fab","facebook-messenger"],color:"#0080FF",share:{desktop:"https://www.facebook.com/dialog/send?",android:"fb-messenger://share/?",ios:"fb-messenger://share/?"},params:{url:"link",appId:"app_id",redirectUrl:"redirect_uri"}},whatsapp:{type:"whatsapp",text:"WhatsApp",ariaLabel:"Share on WhatsApp",icon:["fab","whatsapp"],color:"#25D366",share:{desktop:"https://api.whatsapp.com/send?",android:"whatsapp://send?",ios:"https://api.whatsapp.com/send?"},params:{url:"link",description:"text"},paramsFunc:M2},xing:{type:"xing",text:"Xing",ariaLabel:"Share on Xing",icon:["fab","xing"],color:"#006567",share:{desktop:"https://www.xing.com/spi/shares/new?"},params:{url:"url"}},line:{type:"line",text:"Line",ariaLabel:"Share on Line",icon:["fab","line"],color:"#00b900",share:{desktop:"https://social-plugins.line.me/lineit/share?"},params:{url:"url"}},sms:{type:"sms",text:"SMS",ariaLabel:"Share link via SMS",icon:["fas","sms"],color:"#20c16c",share:{desktop:"sms:?",ios:"sms:&"},params:{description:"body"},paramsFunc:M2},email:{type:"email",text:"Email",ariaLabel:"Share link via email",icon:["fas","envelope"],color:"#FF961C",share:{desktop:"mailto:?"},params:{title:"subject",description:"body"},paramsFunc:M2},print:{type:"print",text:"Print",ariaLabel:"Print page",icon:["fas","print"],color:"#765AA2",func:c0},copy:{type:"copy",text:"Copy link",ariaLabel:"Copy link",icon:["fas","link"],color:"#607D8B",data:{text:"Copy link",icon:["fas","link"],successText:"Copied",successIcon:["fas","check"],delay:2e3},func:a0}},o3=(()=>{let a=class a{constructor(e,r){this._document=r,this.config={sharerMethod:V2.Anchor,sharerTarget:"_blank",windowObj:this._document.defaultView,windowFuncName:"open",prop:E4,theme:"default",include:[],exclude:[],autoSetMeta:!0,windowWidth:800,windowHeight:500,moreButtonIcon:"ellipsis-h",lessButtonIcon:"minus",moreButtonAriaLabel:"Show more share buttons",lessButtonAriaLabel:"Show less share buttons"},this.config$=new s2(this.config),e&&this.setConfig(e)}get prop(){return this.config.prop}get windowSize(){return`width=${this.config.windowWidth}, height=${this.config.windowHeight}`}setConfig(e){this.config=n3(this.config,e),this.config$.next(this.config)}addButton(e,r){this.setConfig({prop:{[e]:r}})}};a.\u0275fac=function(r){return new(r||a)(A(P1,8),A(G1))},a.\u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),I4=(()=>{let a=class a{constructor(e,r,s,n,o,t,f){this._meta=r,this._platform=s,this._clipboard=n,this._share=o,this._cd=t,this._document=f,this._destroyed=new E1,this._updater=new E1,this.autoSetMeta=this._share.config.autoSetMeta,this.url=this._share.config.url,this.title=this._share.config.title,this.description=this._share.config.description,this.image=this._share.config.image,this.tags=this._share.config.tags,this.redirectUrl=this._share.config.redirectUrl,this.opened=new N1,this.closed=new N1,this._el=e.nativeElement}share(){if(this._platform.isBrowser&&this.shareButton){let e=this.autoSetMeta?this.getParamsFromMetaTags():this.getParamsFromInputs();(this.shareButton.share?this.open(e):this.shareButton.func({params:e,data:this.shareButton.data,clipboard:this._clipboard,updater:this._updater})).pipe(q1(this._destroyed)).subscribe()}else console.warn(`${this.text} button is not compatible on this Platform`)}ngOnInit(){this._updater.pipe(x1(e=>{this.icon=e.icon,this.text=e.text,this._el.style.pointerEvents=e.disabled?"none":"auto",this._cd.markForCheck()}),q1(this._destroyed)).subscribe()}ngOnChanges(e){this._platform.isBrowser&&(this._shareButtonChanged(e.shareButtonName)&&this._createShareButton(),this._urlChanged(e.url)&&(this.url=Q8(this.autoSetMeta?this.url||this._getMetaTagContent("og:url"):this.url,this._document.defaultView.location.href)))}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_createShareButton(){let e=this._share.config.prop[this.shareButtonName];e?(this.shareButton=e,this._el.classList.remove(`sb-${this._buttonClass}`),this._el.classList.add(`sb-${this.shareButtonName}`),this._el.style.setProperty("--button-color",this.shareButton.color),this._buttonClass=this.shareButtonName,this.color=this.shareButton.color,this.text=this.shareButton.text,this.icon=this.shareButton.icon,this._el.setAttribute("aria-label",e.ariaLabel)):console.error(`[ShareButtons]: The share button '${this.shareButtonName}' does not exist!`)}_getMetaTagContent(e){let r=this._meta.getTag(`property="${e}"`);if(r)return r.getAttribute("content");let s=this._meta.getTag(`name="${e}"`);if(s)return s.getAttribute("content")}_shareButtonChanged(e){return e&&(e.firstChange||e.previousValue!==e.currentValue)}_urlChanged(e){return!this.url||e&&e.previousValue!==e.currentValue}getParamsFromMetaTags(){return{url:this.url,title:this.title||this._getMetaTagContent("og:title"),description:this.description||this._getMetaTagContent("og:description"),image:this.image||this._getMetaTagContent("og:image"),via:this._share.config.twitterAccount,tags:this.tags,appId:this._share.config.appId||this._getMetaTagContent("fb:app_id"),redirectUrl:this.redirectUrl||this.url}}getParamsFromInputs(){return{url:this.url,title:this.title,description:this.description,image:this.image,tags:this.tags,via:this._share.config.twitterAccount,appId:this._share.config.appId,redirectUrl:this.redirectUrl||this.url}}open(e){let r;if(this._platform.IOS&&this.shareButton.share.ios?r=this.shareButton.share.ios:this._platform.ANDROID&&this.shareButton.share.android?r=this.shareButton.share.android:r=this.shareButton.share.desktop,r){this._finalUrl=r+this._serializeParams(e),this._share.config.debug&&console.log("[DEBUG SHARE BUTTON]: ",this._finalUrl);let s=this.shareButton.method||this._share.config.sharerMethod,n=this.shareButton.target||this._share.config.sharerTarget;switch(s){case V2.Anchor:let o=this._document.createElement("a");o.setAttribute("target",n),o.setAttribute("rel","noopener noreferrer"),o.href=this._finalUrl,o.click(),o.remove();break;case V2.Window:let t=this._share.config.windowObj[this._share.config.windowFuncName],f=t(this._finalUrl,n,this._share.windowSize);if(this._share.config.windowObj.opener=null,f)return new _1(l=>{let m=this._document.defaultView.setInterval(()=>{f.closed&&(this._document.defaultView.clearInterval(m),this.closed.emit(this.shareButtonName),l.next(),l.complete())},200)});break}this.opened.emit(this.shareButtonName)}return n2}_serializeParams(e){return Object.entries(this.shareButton.params).map(([r,s])=>{let n=this.shareButton.paramsFunc?this.shareButton.paramsFunc[r]:null;if(e[r]||n){let o=n?n(e):e[r];return`${s}=${encodeURIComponent(o)}`}return""}).filter(r=>r!=="").join("&")}};a.\u0275fac=function(r){return new(r||a)(L(p1),L(y1),L(F4),L(R4),L(o3),L(U1),L(G1))},a.\u0275dir=z1({type:a,selectors:[["","shareButton",""]],hostBindings:function(r,s){r&1&&E("click",function(){return s.share()})},inputs:{shareButtonName:["shareButton","shareButtonName"],autoSetMeta:"autoSetMeta",url:"url",title:"title",description:"description",image:"image",tags:"tags",redirectUrl:"redirectUrl"},outputs:{opened:"opened",closed:"closed"},exportAs:["shareButton"],features:[X]});let c=a;return c})(),t3=(()=>{let a=class a{static withConfig(e){return{ngModule:a,providers:[{provide:P1,useValue:e}]}}};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=R({type:a}),a.\u0275inj=D({imports:[D4,O4]});let c=a;return c})();function q4(c,a){var i=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);a&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),i.push.apply(i,e)}return i}function v(c){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?q4(Object(i),!0).forEach(function(e){N(c,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(i)):q4(Object(i)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(i,e))})}return c}function A2(c){"@babel/helpers - typeof";return A2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},A2(c)}function i0(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function U4(c,a){for(var i=0;i<a.length;i++){var e=a[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,e.key,e)}}function r0(c,a,i){return a&&U4(c.prototype,a),i&&U4(c,i),Object.defineProperty(c,"prototype",{writable:!1}),c}function N(c,a,i){return a in c?Object.defineProperty(c,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):c[a]=i,c}function b3(c,a){return n0(c)||t0(c,a)||z6(c,a)||f0()}function e2(c){return s0(c)||o0(c)||z6(c)||l0()}function s0(c){if(Array.isArray(c))return h3(c)}function n0(c){if(Array.isArray(c))return c}function o0(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function t0(c,a){var i=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(i!=null){var e=[],r=!0,s=!1,n,o;try{for(i=i.call(c);!(r=(n=i.next()).done)&&(e.push(n.value),!(a&&e.length===a));r=!0);}catch(t){s=!0,o=t}finally{try{!r&&i.return!=null&&i.return()}finally{if(s)throw o}}return e}}function z6(c,a){if(c){if(typeof c=="string")return h3(c,a);var i=Object.prototype.toString.call(c).slice(8,-1);if(i==="Object"&&c.constructor&&(i=c.constructor.name),i==="Map"||i==="Set")return Array.from(c);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return h3(c,a)}}function h3(c,a){(a==null||a>c.length)&&(a=c.length);for(var i=0,e=new Array(a);i<a;i++)e[i]=c[i];return e}function l0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var W4=function(){},x3={},H6={},p6=null,u6={mark:W4,measure:W4};try{typeof window<"u"&&(x3=window),typeof document<"u"&&(H6=document),typeof MutationObserver<"u"&&(p6=MutationObserver),typeof performance<"u"&&(u6=performance)}catch{}var m0=x3.navigator||{},G4=m0.userAgent,j4=G4===void 0?"":G4,l1=x3,d=H6,Z4=p6,C2=u6,t9=!!l1.document,i1=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",M6=~j4.indexOf("MSIE")||~j4.indexOf("Trident/"),d2,L2,g2,b2,x2,c1="___FONT_AWESOME___",z3=16,V6="fa",C6="svg-inline--fa",C1="data-fa-i2svg",H3="data-fa-pseudo-element",v0="data-fa-pseudo-element-pending",N3="data-prefix",S3="data-icon",$4="fontawesome-i2svg",h0="async",z0=["HTML","HEAD","STYLE","SCRIPT"],d6=function(){try{return process.env.NODE_ENV==="production"}catch{return!1}}(),C="classic",g="sharp",w3=[C,g];function i2(c){return new Proxy(c,{get:function(i,e){return e in i?i[e]:i[C]}})}var X1=i2((d2={},N(d2,C,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),N(d2,g,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),d2)),J1=i2((L2={},N(L2,C,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(L2,g,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),L2)),Q1=i2((g2={},N(g2,C,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(g2,g,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),g2)),H0=i2((b2={},N(b2,C,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(b2,g,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),b2)),p0=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,L6="fa-layers-text",u0=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,M0=i2((x2={},N(x2,C,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(x2,g,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),x2)),g6=[1,2,3,4,5,6,7,8,9,10],V0=g6.concat([11,12,13,14,15,16,17,18,19,20]),C0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],M1={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},c2=new Set;Object.keys(J1[C]).map(c2.add.bind(c2));Object.keys(J1[g]).map(c2.add.bind(c2));var d0=[].concat(w3,e2(c2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",M1.GROUP,M1.SWAP_OPACITY,M1.PRIMARY,M1.SECONDARY]).concat(g6.map(function(c){return"".concat(c,"x")})).concat(V0.map(function(c){return"w-".concat(c)})),Y1=l1.FontAwesomeConfig||{};function L0(c){var a=d.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function g0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}d&&typeof d.querySelector=="function"&&(Y4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],Y4.forEach(function(c){var a=b3(c,2),i=a[0],e=a[1],r=g0(L0(i));r!=null&&(Y1[e]=r)}));var Y4,b6={styleDefault:"solid",familyDefault:"classic",cssPrefix:V6,replacementClass:C6,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Y1.familyPrefix&&(Y1.cssPrefix=Y1.familyPrefix);var D1=v(v({},b6),Y1);D1.autoReplaceSvg||(D1.observeMutations=!1);var h={};Object.keys(b6).forEach(function(c){Object.defineProperty(h,c,{enumerable:!0,set:function(i){D1[c]=i,K1.forEach(function(e){return e(h)})},get:function(){return D1[c]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(a){D1.cssPrefix=a,K1.forEach(function(i){return i(h)})},get:function(){return D1.cssPrefix}});l1.FontAwesomeConfig=h;var K1=[];function b0(c){return K1.push(c),function(){K1.splice(K1.indexOf(c),1)}}var t1=z3,K={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function x0(c){if(!(!c||!i1)){var a=d.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var i=d.head.childNodes,e=null,r=i.length-1;r>-1;r--){var s=i[r],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(e=s)}return d.head.insertBefore(a,e),c}}var N0="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function a2(){for(var c=12,a="";c-- >0;)a+=N0[Math.random()*62|0];return a}function R1(c){for(var a=[],i=(c||[]).length>>>0;i--;)a[i]=c[i];return a}function y3(c){return c.classList?R1(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function x6(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function S0(c){return Object.keys(c||{}).reduce(function(a,i){return a+"".concat(i,'="').concat(x6(c[i]),'" ')},"").trim()}function B2(c){return Object.keys(c||{}).reduce(function(a,i){return a+"".concat(i,": ").concat(c[i].trim(),";")},"")}function k3(c){return c.size!==K.size||c.x!==K.x||c.y!==K.y||c.rotate!==K.rotate||c.flipX||c.flipY}function w0(c){var a=c.transform,i=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),o="rotate(".concat(a.rotate," 0 0)"),t={transform:"".concat(s," ").concat(n," ").concat(o)},f={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:t,path:f}}function y0(c){var a=c.transform,i=c.width,e=i===void 0?z3:i,r=c.height,s=r===void 0?z3:r,n=c.startCentered,o=n===void 0?!1:n,t="";return o&&M6?t+="translate(".concat(a.x/t1-e/2,"em, ").concat(a.y/t1-s/2,"em) "):o?t+="translate(calc(-50% + ".concat(a.x/t1,"em), calc(-50% + ").concat(a.y/t1,"em)) "):t+="translate(".concat(a.x/t1,"em, ").concat(a.y/t1,"em) "),t+="scale(".concat(a.size/t1*(a.flipX?-1:1),", ").concat(a.size/t1*(a.flipY?-1:1),") "),t+="rotate(".concat(a.rotate,"deg) "),t}var k0=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function N6(){var c=V6,a=C6,i=h.cssPrefix,e=h.replacementClass,r=k0;if(i!==c||e!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),o=new RegExp("\\.".concat(a),"g");r=r.replace(s,".".concat(i,"-")).replace(n,"--".concat(i,"-")).replace(o,".".concat(e))}return r}var K4=!1;function l3(){h.autoAddCss&&!K4&&(x0(N6()),K4=!0)}var A0={mixout:function(){return{dom:{css:N6,insertCss:l3}}},hooks:function(){return{beforeDOMElementCreation:function(){l3()},beforeI2svg:function(){l3()}}}},a1=l1||{};a1[c1]||(a1[c1]={});a1[c1].styles||(a1[c1].styles={});a1[c1].hooks||(a1[c1].hooks={});a1[c1].shims||(a1[c1].shims=[]);var G=a1[c1],S6=[],P0=function c(){d.removeEventListener("DOMContentLoaded",c),P2=1,S6.map(function(a){return a()})},P2=!1;i1&&(P2=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),P2||d.addEventListener("DOMContentLoaded",P0));function T0(c){i1&&(P2?setTimeout(c,0):S6.push(c))}function r2(c){var a=c.tag,i=c.attributes,e=i===void 0?{}:i,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?x6(c):"<".concat(a," ").concat(S0(e),">").concat(s.map(r2).join(""),"</").concat(a,">")}function X4(c,a,i){if(c&&c[a]&&c[a][i])return{prefix:a,iconName:i,icon:c[a][i]}}var B0=function(a,i){return function(e,r,s,n){return a.call(i,e,r,s,n)}},f3=function(a,i,e,r){var s=Object.keys(a),n=s.length,o=r!==void 0?B0(i,r):i,t,f,l;for(e===void 0?(t=1,l=a[s[0]]):(t=0,l=e);t<n;t++)f=s[t],l=o(l,a[f],f,a);return l};function F0(c){for(var a=[],i=0,e=c.length;i<e;){var r=c.charCodeAt(i++);if(r>=55296&&r<=56319&&i<e){var s=c.charCodeAt(i++);(s&64512)==56320?a.push(((r&1023)<<10)+(s&1023)+65536):(a.push(r),i--)}else a.push(r)}return a}function p3(c){var a=F0(c);return a.length===1?a[0].toString(16):null}function D0(c,a){var i=c.length,e=c.charCodeAt(a),r;return e>=55296&&e<=56319&&i>a+1&&(r=c.charCodeAt(a+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function J4(c){return Object.keys(c).reduce(function(a,i){var e=c[i],r=!!e.icon;return r?a[e.iconName]=e.icon:a[i]=e,a},{})}function u3(c,a){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=i.skipHooks,r=e===void 0?!1:e,s=J4(a);typeof G.hooks.addPack=="function"&&!r?G.hooks.addPack(c,J4(a)):G.styles[c]=v(v({},G.styles[c]||{}),s),c==="fas"&&u3("fa",a)}var N2,S2,w2,T1=G.styles,R0=G.shims,O0=(N2={},N(N2,C,Object.values(Q1[C])),N(N2,g,Object.values(Q1[g])),N2),A3=null,w6={},y6={},k6={},A6={},P6={},_0=(S2={},N(S2,C,Object.keys(X1[C])),N(S2,g,Object.keys(X1[g])),S2);function E0(c){return~d0.indexOf(c)}function I0(c,a){var i=a.split("-"),e=i[0],r=i.slice(1).join("-");return e===c&&r!==""&&!E0(r)?r:null}var T6=function(){var a=function(s){return f3(T1,function(n,o,t){return n[t]=f3(o,s,{}),n},{})};w6=a(function(r,s,n){if(s[3]&&(r[s[3]]=n),s[2]){var o=s[2].filter(function(t){return typeof t=="number"});o.forEach(function(t){r[t.toString(16)]=n})}return r}),y6=a(function(r,s,n){if(r[n]=n,s[2]){var o=s[2].filter(function(t){return typeof t=="string"});o.forEach(function(t){r[t]=n})}return r}),P6=a(function(r,s,n){var o=s[2];return r[n]=n,o.forEach(function(t){r[t]=n}),r});var i="far"in T1||h.autoFetchSvg,e=f3(R0,function(r,s){var n=s[0],o=s[1],t=s[2];return o==="far"&&!i&&(o="fas"),typeof n=="string"&&(r.names[n]={prefix:o,iconName:t}),typeof n=="number"&&(r.unicodes[n.toString(16)]={prefix:o,iconName:t}),r},{names:{},unicodes:{}});k6=e.names,A6=e.unicodes,A3=F2(h.styleDefault,{family:h.familyDefault})};b0(function(c){A3=F2(c.styleDefault,{family:h.familyDefault})});T6();function P3(c,a){return(w6[c]||{})[a]}function q0(c,a){return(y6[c]||{})[a]}function V1(c,a){return(P6[c]||{})[a]}function B6(c){return k6[c]||{prefix:null,iconName:null}}function U0(c){var a=A6[c],i=P3("fas",c);return a||(i?{prefix:"fas",iconName:i}:null)||{prefix:null,iconName:null}}function f1(){return A3}var T3=function(){return{prefix:null,iconName:null,rest:[]}};function F2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.family,e=i===void 0?C:i,r=X1[e][c],s=J1[e][c]||J1[e][r],n=c in G.styles?c:null;return s||n||null}var Q4=(w2={},N(w2,C,Object.keys(Q1[C])),N(w2,g,Object.keys(Q1[g])),w2);function D2(c){var a,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.skipLookups,r=e===void 0?!1:e,s=(a={},N(a,C,"".concat(h.cssPrefix,"-").concat(C)),N(a,g,"".concat(h.cssPrefix,"-").concat(g)),a),n=null,o=C;(c.includes(s[C])||c.some(function(f){return Q4[C].includes(f)}))&&(o=C),(c.includes(s[g])||c.some(function(f){return Q4[g].includes(f)}))&&(o=g);var t=c.reduce(function(f,l){var m=I0(h.cssPrefix,l);if(T1[l]?(l=O0[o].includes(l)?H0[o][l]:l,n=l,f.prefix=l):_0[o].indexOf(l)>-1?(n=l,f.prefix=F2(l,{family:o})):m?f.iconName=m:l!==h.replacementClass&&l!==s[C]&&l!==s[g]&&f.rest.push(l),!r&&f.prefix&&f.iconName){var z=n==="fa"?B6(f.iconName):{},H=V1(f.prefix,f.iconName);z.prefix&&(n=null),f.iconName=z.iconName||H||f.iconName,f.prefix=z.prefix||f.prefix,f.prefix==="far"&&!T1.far&&T1.fas&&!h.autoFetchSvg&&(f.prefix="fas")}return f},T3());return(c.includes("fa-brands")||c.includes("fab"))&&(t.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(t.prefix="fad"),!t.prefix&&o===g&&(T1.fass||h.autoFetchSvg)&&(t.prefix="fass",t.iconName=V1(t.prefix,t.iconName)||t.iconName),(t.prefix==="fa"||n==="fa")&&(t.prefix=f1()||"fas"),t}var W0=function(){function c(){i0(this,c),this.definitions={}}return r0(c,[{key:"add",value:function(){for(var i=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var n=r.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(o){i.definitions[o]=v(v({},i.definitions[o]||{}),n[o]),u3(o,n[o]);var t=Q1[C][o];t&&u3(t,n[o]),T6()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(i,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var n=r[s],o=n.prefix,t=n.iconName,f=n.icon,l=f[2];i[o]||(i[o]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(i[o][m]=f)}),i[o][t]=f}),i}}]),c}(),c6=[],B1={},F1={},G0=Object.keys(F1);function j0(c,a){var i=a.mixoutsTo;return c6=c,B1={},Object.keys(F1).forEach(function(e){G0.indexOf(e)===-1&&delete F1[e]}),c6.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(n){typeof r[n]=="function"&&(i[n]=r[n]),A2(r[n])==="object"&&Object.keys(r[n]).forEach(function(o){i[n]||(i[n]={}),i[n][o]=r[n][o]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(n){B1[n]||(B1[n]=[]),B1[n].push(s[n])})}e.provides&&e.provides(F1)}),i}function M3(c,a){for(var i=arguments.length,e=new Array(i>2?i-2:0),r=2;r<i;r++)e[r-2]=arguments[r];var s=B1[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(e))}),a}function d1(c){for(var a=arguments.length,i=new Array(a>1?a-1:0),e=1;e<a;e++)i[e-1]=arguments[e];var r=B1[c]||[];r.forEach(function(s){s.apply(null,i)})}function e1(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return F1[c]?F1[c].apply(null,a):void 0}function V3(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,i=c.prefix||f1();if(a)return a=V1(i,a)||a,X4(F6.definitions,i,a)||X4(G.styles,i,a)}var F6=new W0,Z0=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,d1("noAuto")},$0={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return i1?(d1("beforeI2svg",a),e1("pseudoElements2svg",a),e1("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,T0(function(){K0({autoReplaceSvgRoot:i}),d1("watch",a)})}},Y0={icon:function(a){if(a===null)return null;if(A2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:V1(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var i=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],e=F2(a[0]);return{prefix:e,iconName:V1(e,i)||i}}if(typeof a=="string"&&(a.indexOf("".concat(h.cssPrefix,"-"))>-1||a.match(p0))){var r=D2(a.split(" "),{skipLookups:!0});return{prefix:r.prefix||f1(),iconName:V1(r.prefix,r.iconName)||r.iconName}}if(typeof a=="string"){var s=f1();return{prefix:s,iconName:V1(s,a)||a}}}},q={noAuto:Z0,config:h,dom:$0,parse:Y0,library:F6,findIconDefinition:V3,toHtml:r2},K0=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=a.autoReplaceSvgRoot,e=i===void 0?d:i;(Object.keys(G.styles).length>0||h.autoFetchSvg)&&i1&&h.autoReplaceSvg&&q.dom.i2svg({node:e})};function R2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return r2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(i1){var e=d.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function X0(c){var a=c.children,i=c.main,e=c.mask,r=c.attributes,s=c.styles,n=c.transform;if(k3(n)&&i.found&&!e.found){var o=i.width,t=i.height,f={x:o/t/2,y:.5};r.style=B2(v(v({},s),{},{"transform-origin":"".concat(f.x+n.x/16,"em ").concat(f.y+n.y/16,"em")}))}return[{tag:"svg",attributes:r,children:a}]}function J0(c){var a=c.prefix,i=c.iconName,e=c.children,r=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(h.cssPrefix,"-").concat(i):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},r),{},{id:n}),children:e}]}]}function B3(c){var a=c.icons,i=a.main,e=a.mask,r=c.prefix,s=c.iconName,n=c.transform,o=c.symbol,t=c.title,f=c.maskId,l=c.titleId,m=c.extra,z=c.watchable,H=z===void 0?!1:z,u=e.found?e:i,w=u.width,y=u.height,j=r==="fak",T=[h.replacementClass,s?"".concat(h.cssPrefix,"-").concat(s):""].filter(function(r1){return m.classes.indexOf(r1)===-1}).filter(function(r1){return r1!==""||!!r1}).concat(m.classes).join(" "),F={children:[],attributes:v(v({},m.attributes),{},{"data-prefix":r,"data-icon":s,class:T,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(y)})},Z=j&&!~m.classes.indexOf("fa-fw")?{width:"".concat(w/y*16*.0625,"em")}:{};H&&(F.attributes[C1]=""),t&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(l||a2())},children:[t]}),delete F.attributes.title);var I=v(v({},F),{},{prefix:r,iconName:s,main:i,mask:e,maskId:f,transform:n,symbol:o,styles:v(v({},Z),m.styles)}),v1=e.found&&i.found?e1("generateAbstractMask",I)||{children:[],attributes:{}}:e1("generateAbstractIcon",I)||{children:[],attributes:{}},h1=v1.children,O2=v1.attributes;return I.children=h1,I.attributes=O2,o?J0(I):X0(I)}function a6(c){var a=c.content,i=c.width,e=c.height,r=c.transform,s=c.title,n=c.extra,o=c.watchable,t=o===void 0?!1:o,f=v(v(v({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});t&&(f[C1]="");var l=v({},n.styles);k3(r)&&(l.transform=y0({transform:r,startCentered:!0,width:i,height:e}),l["-webkit-transform"]=l.transform);var m=B2(l);m.length>0&&(f.style=m);var z=[];return z.push({tag:"span",attributes:f,children:[a]}),s&&z.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),z}function Q0(c){var a=c.content,i=c.title,e=c.extra,r=v(v(v({},e.attributes),i?{title:i}:{}),{},{class:e.classes.join(" ")}),s=B2(e.styles);s.length>0&&(r.style=s);var n=[];return n.push({tag:"span",attributes:r,children:[a]}),i&&n.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),n}var m3=G.styles;function C3(c){var a=c[0],i=c[1],e=c.slice(4),r=b3(e,1),s=r[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(M1.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(M1.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(M1.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:i,icon:n}}var c5={found:!1,width:512,height:512};function a5(c,a){!d6&&!h.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function d3(c,a){var i=a;return a==="fa"&&h.styleDefault!==null&&(a=f1()),new Promise(function(e,r){var s={found:!1,width:512,height:512,icon:e1("missingIconAbstract")||{}};if(i==="fa"){var n=B6(c)||{};c=n.iconName||c,a=n.prefix||a}if(c&&a&&m3[a]&&m3[a][c]){var o=m3[a][c];return e(C3(o))}a5(c,a),e(v(v({},c5),{},{icon:h.showMissingIcons&&c?e1("missingIconAbstract")||{}:{}}))})}var e6=function(){},L3=h.measurePerformance&&C2&&C2.mark&&C2.measure?C2:{mark:e6,measure:e6},$1='FA "6.5.2"',e5=function(a){return L3.mark("".concat($1," ").concat(a," begins")),function(){return D6(a)}},D6=function(a){L3.mark("".concat($1," ").concat(a," ends")),L3.measure("".concat($1," ").concat(a),"".concat($1," ").concat(a," begins"),"".concat($1," ").concat(a," ends"))},F3={begin:e5,end:D6},y2=function(){};function i6(c){var a=c.getAttribute?c.getAttribute(C1):null;return typeof a=="string"}function i5(c){var a=c.getAttribute?c.getAttribute(N3):null,i=c.getAttribute?c.getAttribute(S3):null;return a&&i}function r5(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(h.replacementClass)}function s5(){if(h.autoReplaceSvg===!0)return k2.replace;var c=k2[h.autoReplaceSvg];return c||k2.replace}function n5(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function o5(c){return d.createElement(c)}function R6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=a.ceFn,e=i===void 0?c.tag==="svg"?n5:o5:i;if(typeof c=="string")return d.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(n){r.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){r.appendChild(R6(n,{ceFn:e}))}),r}function t5(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var k2={replace:function(a){var i=a[0];if(i.parentNode)if(a[1].forEach(function(r){i.parentNode.insertBefore(R6(r),i)}),i.getAttribute(C1)===null&&h.keepOriginalSource){var e=d.createComment(t5(i));i.parentNode.replaceChild(e,i)}else i.remove()},nest:function(a){var i=a[0],e=a[1];if(~y3(i).indexOf(h.replacementClass))return k2.replace(a);var r=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(o,t){return t===h.replacementClass||t.match(r)?o.toSvg.push(t):o.toNode.push(t),o},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?i.removeAttribute("class"):i.setAttribute("class",s.toNode.join(" "))}var n=e.map(function(o){return r2(o)}).join(`
`);i.setAttribute(C1,""),i.innerHTML=n}};function r6(c){c()}function O6(c,a){var i=typeof a=="function"?a:y2;if(c.length===0)i();else{var e=r6;h.mutateApproach===h0&&(e=l1.requestAnimationFrame||r6),e(function(){var r=s5(),s=F3.begin("mutate");c.map(r),s(),i()})}}var D3=!1;function _6(){D3=!0}function g3(){D3=!1}var T2=null;function s6(c){if(Z4&&h.observeMutations){var a=c.treeCallback,i=a===void 0?y2:a,e=c.nodeCallback,r=e===void 0?y2:e,s=c.pseudoElementsCallback,n=s===void 0?y2:s,o=c.observeMutationsRoot,t=o===void 0?d:o;T2=new Z4(function(f){if(!D3){var l=f1();R1(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!i6(m.addedNodes[0])&&(h.searchPseudoElements&&n(m.target),i(m.target)),m.type==="attributes"&&m.target.parentNode&&h.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&i6(m.target)&&~C0.indexOf(m.attributeName))if(m.attributeName==="class"&&i5(m.target)){var z=D2(y3(m.target)),H=z.prefix,u=z.iconName;m.target.setAttribute(N3,H||l),u&&m.target.setAttribute(S3,u)}else r5(m.target)&&r(m.target)})}}),i1&&T2.observe(t,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function l5(){T2&&T2.disconnect()}function f5(c){var a=c.getAttribute("style"),i=[];return a&&(i=a.split(";").reduce(function(e,r){var s=r.split(":"),n=s[0],o=s.slice(1);return n&&o.length>0&&(e[n]=o.join(":").trim()),e},{})),i}function m5(c){var a=c.getAttribute("data-prefix"),i=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=D2(y3(c));return r.prefix||(r.prefix=f1()),a&&i&&(r.prefix=a,r.iconName=i),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=q0(r.prefix,c.innerText)||P3(r.prefix,p3(c.innerText))),!r.iconName&&h.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function v5(c){var a=R1(c.attributes).reduce(function(r,s){return r.name!=="class"&&r.name!=="style"&&(r[s.name]=s.value),r},{}),i=c.getAttribute("title"),e=c.getAttribute("data-fa-title-id");return h.autoA11y&&(i?a["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(e||a2()):(a["aria-hidden"]="true",a.focusable="false")),a}function h5(){return{iconName:null,title:null,titleId:null,prefix:null,transform:K,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function n6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},i=m5(c),e=i.iconName,r=i.prefix,s=i.rest,n=v5(c),o=M3("parseNodeAttributes",{},c),t=a.styleParser?f5(c):[];return v({iconName:e,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:r,transform:K,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:t,attributes:n}},o)}var z5=G.styles;function E6(c){var a=h.autoReplaceSvg==="nest"?n6(c,{styleParser:!1}):n6(c);return~a.extra.classes.indexOf(L6)?e1("generateLayersText",c,a):e1("generateSvgReplacementMutation",c,a)}var m1=new Set;w3.map(function(c){m1.add("fa-".concat(c))});Object.keys(X1[C]).map(m1.add.bind(m1));Object.keys(X1[g]).map(m1.add.bind(m1));m1=e2(m1);function o6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!i1)return Promise.resolve();var i=d.documentElement.classList,e=function(m){return i.add("".concat($4,"-").concat(m))},r=function(m){return i.remove("".concat($4,"-").concat(m))},s=h.autoFetchSvg?m1:w3.map(function(l){return"fa-".concat(l)}).concat(Object.keys(z5));s.includes("fa")||s.push("fa");var n=[".".concat(L6,":not([").concat(C1,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(C1,"])")})).join(", ");if(n.length===0)return Promise.resolve();var o=[];try{o=R1(c.querySelectorAll(n))}catch{}if(o.length>0)e("pending"),r("complete");else return Promise.resolve();var t=F3.begin("onTree"),f=o.reduce(function(l,m){try{var z=E6(m);z&&l.push(z)}catch(H){d6||H.name==="MissingIcon"&&console.error(H)}return l},[]);return new Promise(function(l,m){Promise.all(f).then(function(z){O6(z,function(){e("active"),e("complete"),r("pending"),typeof a=="function"&&a(),t(),l()})}).catch(function(z){t(),m(z)})})}function H5(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;E6(c).then(function(i){i&&O6([i],a)})}function p5(c){return function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(a||{}).icon?a:V3(a||{}),r=i.mask;return r&&(r=(r||{}).icon?r:V3(r||{})),c(e,v(v({},i),{},{mask:r}))}}var u5=function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=i.transform,r=e===void 0?K:e,s=i.symbol,n=s===void 0?!1:s,o=i.mask,t=o===void 0?null:o,f=i.maskId,l=f===void 0?null:f,m=i.title,z=m===void 0?null:m,H=i.titleId,u=H===void 0?null:H,w=i.classes,y=w===void 0?[]:w,j=i.attributes,T=j===void 0?{}:j,F=i.styles,Z=F===void 0?{}:F;if(a){var I=a.prefix,v1=a.iconName,h1=a.icon;return R2(v({type:"icon"},a),function(){return d1("beforeDOMElementCreation",{iconDefinition:a,params:i}),h.autoA11y&&(z?T["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(u||a2()):(T["aria-hidden"]="true",T.focusable="false")),B3({icons:{main:C3(h1),mask:t?C3(t.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:v1,transform:v(v({},K),r),symbol:n,title:z,maskId:l,titleId:u,extra:{attributes:T,styles:Z,classes:y}})})}},M5={mixout:function(){return{icon:p5(u5)}},hooks:function(){return{mutationObserverCallbacks:function(i){return i.treeCallback=o6,i.nodeCallback=H5,i}}},provides:function(a){a.i2svg=function(i){var e=i.node,r=e===void 0?d:e,s=i.callback,n=s===void 0?function(){}:s;return o6(r,n)},a.generateSvgReplacementMutation=function(i,e){var r=e.iconName,s=e.title,n=e.titleId,o=e.prefix,t=e.transform,f=e.symbol,l=e.mask,m=e.maskId,z=e.extra;return new Promise(function(H,u){Promise.all([d3(r,o),l.iconName?d3(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var y=b3(w,2),j=y[0],T=y[1];H([i,B3({icons:{main:j,mask:T},prefix:o,iconName:r,transform:t,symbol:f,maskId:m,title:s,titleId:n,extra:z,watchable:!0})])}).catch(u)})},a.generateAbstractIcon=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.transform,o=i.styles,t=B2(o);t.length>0&&(r.style=t);var f;return k3(n)&&(f=e1("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),e.push(f||s.icon),{children:e,attributes:r}}}},V5={mixout:function(){return{layer:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return R2({type:"layer"},function(){d1("beforeDOMElementCreation",{assembler:i,params:e});var n=[];return i(function(o){Array.isArray(o)?o.map(function(t){n=n.concat(t.abstract)}):n=n.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(e2(s)).join(" ")},children:n}]})}}}},C5={mixout:function(){return{counter:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,n=e.classes,o=n===void 0?[]:n,t=e.attributes,f=t===void 0?{}:t,l=e.styles,m=l===void 0?{}:l;return R2({type:"counter",content:i},function(){return d1("beforeDOMElementCreation",{content:i,params:e}),Q0({content:i.toString(),title:s,extra:{attributes:f,styles:m,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(e2(o))}})})}}}},d5={mixout:function(){return{text:function(i){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?K:r,n=e.title,o=n===void 0?null:n,t=e.classes,f=t===void 0?[]:t,l=e.attributes,m=l===void 0?{}:l,z=e.styles,H=z===void 0?{}:z;return R2({type:"text",content:i},function(){return d1("beforeDOMElementCreation",{content:i,params:e}),a6({content:i,transform:v(v({},K),s),title:o,extra:{attributes:m,styles:H,classes:["".concat(h.cssPrefix,"-layers-text")].concat(e2(f))}})})}}},provides:function(a){a.generateLayersText=function(i,e){var r=e.title,s=e.transform,n=e.extra,o=null,t=null;if(M6){var f=parseInt(getComputedStyle(i).fontSize,10),l=i.getBoundingClientRect();o=l.width/f,t=l.height/f}return h.autoA11y&&!r&&(n.attributes["aria-hidden"]="true"),Promise.resolve([i,a6({content:i.innerHTML,width:o,height:t,transform:s,title:r,extra:n,watchable:!0})])}}},L5=new RegExp('"',"ug"),t6=[1105920,1112319];function g5(c){var a=c.replace(L5,""),i=D0(a,0),e=i>=t6[0]&&i<=t6[1],r=a.length===2?a[0]===a[1]:!1;return{value:p3(r?a[0]:a),isSecondary:e||r}}function l6(c,a){var i="".concat(v0).concat(a.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(i)!==null)return e();var s=R1(c.children),n=s.filter(function(h1){return h1.getAttribute(H3)===a})[0],o=l1.getComputedStyle(c,a),t=o.getPropertyValue("font-family").match(u0),f=o.getPropertyValue("font-weight"),l=o.getPropertyValue("content");if(n&&!t)return c.removeChild(n),e();if(t&&l!=="none"&&l!==""){var m=o.getPropertyValue("content"),z=~["Sharp"].indexOf(t[2])?g:C,H=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(t[2])?J1[z][t[2].toLowerCase()]:M0[z][f],u=g5(m),w=u.value,y=u.isSecondary,j=t[0].startsWith("FontAwesome"),T=P3(H,w),F=T;if(j){var Z=U0(w);Z.iconName&&Z.prefix&&(T=Z.iconName,H=Z.prefix)}if(T&&!y&&(!n||n.getAttribute(N3)!==H||n.getAttribute(S3)!==F)){c.setAttribute(i,F),n&&c.removeChild(n);var I=h5(),v1=I.extra;v1.attributes[H3]=a,d3(T,H).then(function(h1){var O2=B3(v(v({},I),{},{icons:{main:h1,mask:T3()},prefix:H,iconName:F,extra:v1,watchable:!0})),r1=d.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(r1,c.firstChild):c.appendChild(r1),r1.outerHTML=O2.map(function(C8){return r2(C8)}).join(`
`),c.removeAttribute(i),e()}).catch(r)}else e()}else e()})}function b5(c){return Promise.all([l6(c,"::before"),l6(c,"::after")])}function x5(c){return c.parentNode!==document.head&&!~z0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(H3)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function f6(c){if(i1)return new Promise(function(a,i){var e=R1(c.querySelectorAll("*")).filter(x5).map(b5),r=F3.begin("searchPseudoElements");_6(),Promise.all(e).then(function(){r(),g3(),a()}).catch(function(){r(),g3(),i()})})}var N5={hooks:function(){return{mutationObserverCallbacks:function(i){return i.pseudoElementsCallback=f6,i}}},provides:function(a){a.pseudoElements2svg=function(i){var e=i.node,r=e===void 0?d:e;h.searchPseudoElements&&f6(r)}}},m6=!1,S5={mixout:function(){return{dom:{unwatch:function(){_6(),m6=!0}}}},hooks:function(){return{bootstrap:function(){s6(M3("mutationObserverCallbacks",{}))},noAuto:function(){l5()},watch:function(i){var e=i.observeMutationsRoot;m6?g3():s6(M3("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},v6=function(a){var i={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),n=s[0],o=s.slice(1).join("-");if(n&&o==="h")return e.flipX=!0,e;if(n&&o==="v")return e.flipY=!0,e;if(o=parseFloat(o),isNaN(o))return e;switch(n){case"grow":e.size=e.size+o;break;case"shrink":e.size=e.size-o;break;case"left":e.x=e.x-o;break;case"right":e.x=e.x+o;break;case"up":e.y=e.y-o;break;case"down":e.y=e.y+o;break;case"rotate":e.rotate=e.rotate+o;break}return e},i)},w5={mixout:function(){return{parse:{transform:function(i){return v6(i)}}}},hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-transform");return r&&(i.transform=v6(r)),i}}},provides:function(a){a.generateAbstractTransformGrouping=function(i){var e=i.main,r=i.transform,s=i.containerWidth,n=i.iconWidth,o={transform:"translate(".concat(s/2," 256)")},t="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(t," ").concat(f," ").concat(l)},z={transform:"translate(".concat(n/2*-1," -256)")},H={outer:o,inner:m,path:z};return{tag:"g",attributes:v({},H.outer),children:[{tag:"g",attributes:v({},H.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:v(v({},e.icon.attributes),H.path)}]}]}}}},v3={x:0,y:0,width:"100%",height:"100%"};function h6(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function y5(c){return c.tag==="g"?c.children:[c]}var k5={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-mask"),s=r?D2(r.split(" ").map(function(n){return n.trim()})):T3();return s.prefix||(s.prefix=f1()),i.mask=s,i.maskId=e.getAttribute("data-fa-mask-id"),i}}},provides:function(a){a.generateAbstractMask=function(i){var e=i.children,r=i.attributes,s=i.main,n=i.mask,o=i.maskId,t=i.transform,f=s.width,l=s.icon,m=n.width,z=n.icon,H=w0({transform:t,containerWidth:m,iconWidth:f}),u={tag:"rect",attributes:v(v({},v3),{},{fill:"white"})},w=l.children?{children:l.children.map(h6)}:{},y={tag:"g",attributes:v({},H.inner),children:[h6(v({tag:l.tag,attributes:v(v({},l.attributes),H.path)},w))]},j={tag:"g",attributes:v({},H.outer),children:[y]},T="mask-".concat(o||a2()),F="clip-".concat(o||a2()),Z={tag:"mask",attributes:v(v({},v3),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[u,j]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:y5(z)},Z]};return e.push(I,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(T,")")},v3)}),{children:e,attributes:r}}}},A5={provides:function(a){var i=!1;l1.matchMedia&&(i=l1.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var n=v(v({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return i||o.children.push({tag:"animate",attributes:v(v({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},n),{},{values:"1;0;1;1;0;1;"})}),e.push(o),e.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:i?[]:[{tag:"animate",attributes:v(v({},n),{},{values:"1;0;0;0;0;1;"})}]}),i||e.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},n),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},P5={hooks:function(){return{parseNodeAttributes:function(i,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return i.symbol=s,i}}}},T5=[A0,M5,V5,C5,d5,N5,S5,w5,k5,A5,P5];j0(T5,{mixoutsTo:q});var l9=q.noAuto,f9=q.config,m9=q.library,v9=q.dom,I6=q.parse,h9=q.findIconDefinition,z9=q.toHtml,q6=q.icon,H9=q.layer,B5=q.text,F5=q.counter;var D5=["*"],R5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},O5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},_5=c=>{let a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:c.rotate!==null,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(i=>a[i]?i:null).filter(i=>i)},E5=c=>c.prefix!==void 0&&c.iconName!==void 0,I5=(c,a)=>E5(c)?c:typeof c=="string"?{prefix:a,iconName:c}:{prefix:c[0],iconName:c[1]},q5=(()=>{let a=class a{constructor(){this.defaultPrefix="fas",this.fallbackIcon=null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),R3=(()=>{let a=class a{constructor(){this.definitions={}}addIcons(...e){for(let r of e){r.prefix in this.definitions||(this.definitions[r.prefix]={}),this.definitions[r.prefix][r.iconName]=r;for(let s of r.icon[2])typeof s=="string"&&(this.definitions[r.prefix][s]=r)}}addIconPacks(...e){for(let r of e){let s=Object.keys(r).map(n=>r[n]);this.addIcons(...s)}}getIconDefinition(e,r){return e in this.definitions&&r in this.definitions[e]?this.definitions[e][r]:null}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})(),U5=(()=>{let a=class a{constructor(){this.stackItemSize="1x"}ngOnChanges(e){if("size"in e)throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')}};a.\u0275fac=function(r){return new(r||a)},a.\u0275dir=z1({type:a,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:"stackItemSize",size:"size"},standalone:!0,features:[X]});let c=a;return c})(),W5=(()=>{let a=class a{constructor(e,r){this.renderer=e,this.elementRef=r}ngOnInit(){this.renderer.addClass(this.elementRef.nativeElement,"fa-stack")}ngOnChanges(e){"size"in e&&(e.size.currentValue!=null&&this.renderer.addClass(this.elementRef.nativeElement,`fa-${e.size.currentValue}`),e.size.previousValue!=null&&this.renderer.removeClass(this.elementRef.nativeElement,`fa-${e.size.previousValue}`))}};a.\u0275fac=function(r){return new(r||a)(L(l2),L(p1))},a.\u0275cmp=_({type:a,selectors:[["fa-stack"]],inputs:{size:"size"},standalone:!0,features:[X,U],ngContentSelectors:D5,decls:1,vars:0,template:function(r,s){r&1&&(c4(),a4(0))},encapsulation:2});let c=a;return c})(),U6=(()=>{let a=class a{set spin(e){this.animation=e?"spin":void 0}set pulse(e){this.animation=e?"spin-pulse":void 0}constructor(e,r,s,n,o){this.sanitizer=e,this.config=r,this.iconLibrary=s,this.stackItem=n,this.classes=[],o!=null&&n==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x"></fa-icon>.')}ngOnChanges(e){if(this.icon==null&&this.config.fallbackIcon==null){O5();return}if(e){let r=this.icon!=null?this.icon:this.config.fallbackIcon,s=this.findIconDefinition(r);if(s!=null){let n=this.buildParams();this.renderIcon(s,n)}}}render(){this.ngOnChanges({})}findIconDefinition(e){let r=I5(e,this.config.defaultPrefix);if("icon"in r)return r;let s=this.iconLibrary.getIconDefinition(r.prefix,r.iconName);return s??(R5(r),null)}buildParams(){let e={flip:this.flip,animation:this.animation,border:this.border,inverse:this.inverse,size:this.size||null,pull:this.pull||null,rotate:this.rotate||null,fixedWidth:typeof this.fixedWidth=="boolean"?this.fixedWidth:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize:null},r=typeof this.transform=="string"?I6.transform(this.transform):this.transform;return{title:this.title,transform:r,classes:[..._5(e),...this.classes],mask:this.mask!=null?this.findIconDefinition(this.mask):null,styles:this.styles!=null?this.styles:{},symbol:this.symbol,attributes:{role:this.a11yRole}}}renderIcon(e,r){let s=q6(e,r);this.renderedIconHTML=this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))}};a.\u0275fac=function(r){return new(r||a)(L(f4),L(q5),L(R3),L(U5,8),L(W5,8))},a.\u0275cmp=_({type:a,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(r,s){r&2&&(Q3("innerHTML",s.renderedIconHTML,t2),q2("title",s.title))},inputs:{icon:"icon",title:"title",animation:"animation",spin:"spin",pulse:"pulse",mask:"mask",styles:"styles",flip:"flip",size:"size",pull:"pull",border:"border",inverse:"inverse",symbol:"symbol",rotate:"rotate",fixedWidth:"fixedWidth",classes:"classes",transform:"transform",a11yRole:"a11yRole"},standalone:!0,features:[X,U],decls:0,vars:0,template:function(r,s){},encapsulation:2});let c=a;return c})();var L1=(()=>{let a=class a{};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=R({type:a}),a.\u0275inj=D({});let c=a;return c})();function G5(c,a){if(c&1&&(M(0,"div",6),$(1,"fa-icon",7),V()),c&2){let i=x(2),e=W1(1);p(1),b("icon",i.icon||e.icon)("fixedWidth",!0)}}function j5(c,a){if(c&1&&(M(0,"div",8),P(1),V()),c&2){let i=x(2),e=W1(1);p(1),Y(" ",i.text||e.text," ")}}function Z5(c,a){if(c&1&&(M(0,"div",3),s1(1,G5,2,2,"div",4)(2,j5,2,1,"div",5),V()),c&2){let i=x(),e=W1(1);p(1),b("ngIf",i.showIcon&&e.icon),p(1),b("ngIf",i.showText)}}var G6=(()=>{let a=class a{get buttonClass(){return`sb-button sb-${this.theme}`}constructor(e){this._share=e,this.redirectUrl=this._share.config.redirectUrl,this.showIcon=!0,this.showText=!1,this.theme=this._share.config.theme,this.opened=new N1,this.closed=new N1}};a.\u0275fac=function(r){return new(r||a)(L(o3))},a.\u0275cmp=_({type:a,selectors:[["share-button"]],hostVars:2,hostBindings:function(r,s){r&2&&Y3(s.buttonClass)},inputs:{button:"button",url:"url",title:"title",description:"description",image:"image",tags:"tags",redirectUrl:"redirectUrl",autoSetMeta:"autoSetMeta",showIcon:"showIcon",showText:"showText",text:"text",icon:"icon",theme:"theme",disabled:"disabled"},outputs:{opened:"opened",closed:"closed"},decls:3,vars:14,consts:[["type","button",1,"sb-wrapper",3,"shareButton","url","image","title","description","tags","redirectUrl","autoSetMeta","disabled","opened","closed"],["btn","shareButton"],["class","sb-content",4,"ngIf"],[1,"sb-content"],["class","sb-icon",4,"ngIf"],["class","sb-text",4,"ngIf"],[1,"sb-icon"],[3,"icon","fixedWidth"],[1,"sb-text"]],template:function(r,s){if(r&1&&(M(0,"button",0,1),E("opened",function(o){return s.opened.emit(o)})("closed",function(o){return s.closed.emit(o)}),s1(2,Z5,3,2,"div",2),V()),r&2){let n=W1(1);U2("sb-show-icon",s.showIcon)("sb-show-text",s.showText),b("shareButton",s.button)("url",s.url)("image",s.image)("title",s.title)("description",s.description)("tags",s.tags)("redirectUrl",s.redirectUrl)("autoSetMeta",s.autoSetMeta)("disabled",s.disabled),p(2),b("ngIf",n)}},dependencies:[I4,U6,m2],styles:["[button=facebook][_nghost-%COMP%], [button=facebook]   [_nghost-%COMP%]{--button-color: #4267B2}[button=twitter][_nghost-%COMP%], [button=twitter]   [_nghost-%COMP%]{--button-color: #00acee}[button=google][_nghost-%COMP%], [button=google]   [_nghost-%COMP%]{--button-color: #db4437}[button=mix][_nghost-%COMP%], [button=mix]   [_nghost-%COMP%]{--button-color: #ff8226}[button=line][_nghost-%COMP%], [button=line]   [_nghost-%COMP%]{--button-color: #00b900}[button=linkedin][_nghost-%COMP%], [button=linkedin]   [_nghost-%COMP%]{--button-color: #006fa6}[button=pinterest][_nghost-%COMP%], [button=pinterest]   [_nghost-%COMP%]{--button-color: #bd081c}[button=reddit][_nghost-%COMP%], [button=reddit]   [_nghost-%COMP%]{--button-color: #ff4006}[button=tumblr][_nghost-%COMP%], [button=tumblr]   [_nghost-%COMP%]{--button-color: #36465d}[button=whatsapp][_nghost-%COMP%], [button=whatsapp]   [_nghost-%COMP%]{--button-color: #25d366}[button=messenger][_nghost-%COMP%], [button=messenger]   [_nghost-%COMP%]{--button-color: #0080FF}[button=telegram][_nghost-%COMP%], [button=telegram]   [_nghost-%COMP%]{--button-color: #0088cc}[button=xing][_nghost-%COMP%], [button=xing]   [_nghost-%COMP%]{--button-color: #006567}[button=sms][_nghost-%COMP%], [button=sms]   [_nghost-%COMP%]{--button-color: #20c16c}[button=email][_nghost-%COMP%], [button=email]   [_nghost-%COMP%]{--button-color: #FF961C}[button=viber][_nghost-%COMP%], [button=viber]   [_nghost-%COMP%]{--button-color: #665ca7}[button=vk][_nghost-%COMP%], [button=vk]   [_nghost-%COMP%]{--button-color: #4C75A3}[button=copy][_nghost-%COMP%], [button=copy]   [_nghost-%COMP%]{--button-color: #607D8B}[button=print][_nghost-%COMP%], [button=print]   [_nghost-%COMP%]{--button-color: #765AA2}[button=expand][_nghost-%COMP%], [button=expand]   [_nghost-%COMP%]{--button-color: #FF6651}button[_ngcontent-%COMP%]{cursor:pointer;position:relative;outline:0;-webkit-print-color-adjust:exact;margin:var(--sb-margin, .3125em);padding:var(--sb-padding, 0);min-width:var(--sb-min-width, 4.125em);height:var(--sb-height, 2.5em);color:var(--sb-color, #fff);background:var(--sb-background);font-size:var(--sb-font-size, 13px);line-height:var(--sb-line-height, 2.571em);border:var(--sb-border);border-radius:var(--sb-border-radius);transition:var(--sb-transition);box-shadow:var(--sb-box-shadow);text-shadow:var(--sb-text-shadow);overflow:var(--sb-overflow)}.sb-icon[_ngcontent-%COMP%], .sb-text[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.sb-content[_ngcontent-%COMP%]{flex:1;display:flex;height:100%;width:100%;position:relative}.sb-text[_ngcontent-%COMP%]{flex:1;height:100%;white-space:nowrap;padding:var(--sb-text-padding, 0 .7em);font-weight:var(--sb-font-weight, bold)}.sb-icon[_ngcontent-%COMP%]{text-align:center;width:100%;height:100%;min-width:2em;font-size:var(--sb-icon-size, 1.2em)}"],changeDetection:0});let c=a;return c})(),O3=(()=>{let a=class a{static withConfig(e){return{ngModule:a,providers:[{provide:P1,useValue:e}]}}};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=R({type:a}),a.\u0275inj=D({imports:[t3,L1,w1,t3,L1]});let c=a;return c})();var j6=(()=>{let a=class a{static withConfig(e){return{ngModule:a,providers:[{provide:P1,useValue:e}]}}};a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=R({type:a}),a.\u0275inj=D({imports:[O3,w1,O3]});let c=a;return c})();var Z6={prefix:"fab",iconName:"vk",icon:[448,512,[],"f189","M31.4907 63.4907C0 94.9813 0 145.671 0 247.04V264.96C0 366.329 0 417.019 31.4907 448.509C62.9813 480 113.671 480 215.04 480H232.96C334.329 480 385.019 480 416.509 448.509C448 417.019 448 366.329 448 264.96V247.04C448 145.671 448 94.9813 416.509 63.4907C385.019 32 334.329 32 232.96 32H215.04C113.671 32 62.9813 32 31.4907 63.4907ZM75.6 168.267H126.747C128.427 253.76 166.133 289.973 196 297.44V168.267H244.16V242C273.653 238.827 304.64 205.227 315.093 168.267H363.253C359.313 187.435 351.46 205.583 340.186 221.579C328.913 237.574 314.461 251.071 297.733 261.227C316.41 270.499 332.907 283.63 346.132 299.751C359.357 315.873 369.01 334.618 374.453 354.747H321.44C316.555 337.262 306.614 321.61 292.865 309.754C279.117 297.899 262.173 290.368 244.16 288.107V354.747H238.373C136.267 354.747 78.0267 284.747 75.6 168.267Z"]};var $6={prefix:"fab",iconName:"linkedin-in",icon:[448,512,[],"f0e1","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"]};var Y6={prefix:"fab",iconName:"mix",icon:[448,512,[],"f3cb","M0 64v348.9c0 56.2 88 58.1 88 0V174.3c7.9-52.9 88-50.4 88 6.5v175.3c0 57.9 96 58 96 0V240c5.3-54.7 88-52.5 88 4.3v23.8c0 59.9 88 56.6 88 0V64H0z"]};var K6={prefix:"fab",iconName:"xing",icon:[384,512,[],"f168","M162.7 210c-1.8 3.3-25.2 44.4-70.1 123.5-4.9 8.3-10.8 12.5-17.7 12.5H9.8c-7.7 0-12.1-7.5-8.5-14.4l69-121.3c.2 0 .2-.1 0-.3l-43.9-75.6c-4.3-7.8.3-14.1 8.5-14.1H100c7.3 0 13.3 4.1 18 12.2l44.7 77.5zM382.6 46.1l-144 253v.3L330.2 466c3.9 7.1.2 14.1-8.5 14.1h-65.2c-7.6 0-13.6-4-18-12.2l-92.4-168.5c3.3-5.8 51.5-90.8 144.8-255.2 4.6-8.1 10.4-12.2 17.5-12.2h65.7c8 0 12.3 6.7 8.5 14.1z"]};var X6={prefix:"fab",iconName:"reddit-alien",icon:[512,512,[],"f281","M373 138.6c-25.2 0-46.3-17.5-51.9-41l0 0c-30.6 4.3-54.2 30.7-54.2 62.4l0 .2c47.4 1.8 90.6 15.1 124.9 36.3c12.6-9.7 28.4-15.5 45.5-15.5c41.3 0 74.7 33.4 74.7 74.7c0 29.8-17.4 55.5-42.7 67.5c-2.4 86.8-97 156.6-213.2 156.6S45.5 410.1 43 323.4C17.6 311.5 0 285.7 0 255.7c0-41.3 33.4-74.7 74.7-74.7c17.2 0 33 5.8 45.7 15.6c34-21.1 76.8-34.4 123.7-36.4l0-.3c0-44.3 33.7-80.9 76.8-85.5C325.8 50.2 347.2 32 373 32c29.4 0 53.3 23.9 53.3 53.3s-23.9 53.3-53.3 53.3zM157.5 255.3c-20.9 0-38.9 20.8-40.2 47.9s17.1 38.1 38 38.1s36.6-9.8 37.8-36.9s-14.7-49.1-35.7-49.1zM395 303.1c-1.2-27.1-19.2-47.9-40.2-47.9s-36.9 22-35.7 49.1c1.2 27.1 16.9 36.9 37.8 36.9s39.3-11 38-38.1zm-60.1 70.8c1.5-3.6-1-7.7-4.9-8.1c-23-2.3-47.9-3.6-73.8-3.6s-50.8 1.3-73.8 3.6c-3.9 .4-6.4 4.5-4.9 8.1c12.9 30.8 43.3 52.4 78.7 52.4s65.8-21.6 78.7-52.4z"]};var J6={prefix:"fab",iconName:"facebook-f",icon:[320,512,[],"f39e","M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"]};var Q6={prefix:"fab",iconName:"viber",icon:[512,512,[],"f409","M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"]};var c8={prefix:"fab",iconName:"facebook-messenger",icon:[512,512,[],"f39f","M256.55 8C116.52 8 8 110.34 8 248.57c0 72.3 29.71 134.78 78.07 177.94 8.35 7.51 6.63 11.86 8.05 58.23A19.92 19.92 0 0 0 122 502.31c52.91-23.3 53.59-25.14 62.56-22.7C337.85 521.8 504 423.7 504 248.57 504 110.34 396.59 8 256.55 8zm149.24 185.13l-73 115.57a37.37 37.37 0 0 1-53.91 9.93l-58.08-43.47a15 15 0 0 0-18 0l-78.37 59.44c-10.46 7.93-24.16-4.6-17.11-15.67l73-115.57a37.36 37.36 0 0 1 53.91-9.93l58.06 43.46a15 15 0 0 0 18 0l78.41-59.38c10.44-7.98 24.14 4.54 17.09 15.62z"]};var a8={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};var e8={prefix:"fab",iconName:"line",icon:[512,512,[],"f3c0","M311 196.8v81.3c0 2.1-1.6 3.7-3.7 3.7h-13c-1.3 0-2.4-.7-3-1.5l-37.3-50.3v48.2c0 2.1-1.6 3.7-3.7 3.7h-13c-2.1 0-3.7-1.6-3.7-3.7V196.9c0-2.1 1.6-3.7 3.7-3.7h12.9c1.1 0 2.4 .6 3 1.6l37.3 50.3V196.9c0-2.1 1.6-3.7 3.7-3.7h13c2.1-.1 3.8 1.6 3.8 3.5zm-93.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 2.1 1.6 3.7 3.7 3.7h13c2.1 0 3.7-1.6 3.7-3.7V196.8c0-1.9-1.6-3.7-3.7-3.7zm-31.4 68.1H150.3V196.8c0-2.1-1.6-3.7-3.7-3.7h-13c-2.1 0-3.7 1.6-3.7 3.7v81.3c0 1 .3 1.8 1 2.5c.7 .6 1.5 1 2.5 1h52.2c2.1 0 3.7-1.6 3.7-3.7v-13c0-1.9-1.6-3.7-3.5-3.7zm193.7-68.1H327.3c-1.9 0-3.7 1.6-3.7 3.7v81.3c0 1.9 1.6 3.7 3.7 3.7h52.2c2.1 0 3.7-1.6 3.7-3.7V265c0-2.1-1.6-3.7-3.7-3.7H344V247.7h35.5c2.1 0 3.7-1.6 3.7-3.7V230.9c0-2.1-1.6-3.7-3.7-3.7H344V213.5h35.5c2.1 0 3.7-1.6 3.7-3.7v-13c-.1-1.9-1.7-3.7-3.7-3.7zM512 93.4V419.4c-.1 51.2-42.1 92.7-93.4 92.6H92.6C41.4 511.9-.1 469.8 0 418.6V92.6C.1 41.4 42.2-.1 93.4 0H419.4c51.2 .1 92.7 42.1 92.6 93.4zM441.6 233.5c0-83.4-83.7-151.3-186.4-151.3s-186.4 67.9-186.4 151.3c0 74.7 66.3 137.4 155.9 149.3c21.8 4.7 19.3 12.7 14.4 42.1c-.8 4.7-3.8 18.4 16.1 10.1s107.3-63.2 146.5-108.2c27-29.7 39.9-59.8 39.9-93.1z"]};var i8={prefix:"fab",iconName:"pinterest-p",icon:[384,512,[],"f231","M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z"]};var r8={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};var Y5={prefix:"fab",iconName:"telegram",icon:[496,512,[62462,"telegram-plane"],"f2c6","M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]},s8=Y5;var n8={prefix:"fab",iconName:"tumblr",icon:[320,512,[],"f173","M309.8 480.3c-13.6 14.5-50 31.7-97.4 31.7-120.8 0-147-88.8-147-140.6v-144H17.9c-5.5 0-10-4.5-10-10v-68c0-7.2 4.5-13.6 11.3-16 62-21.8 81.5-76 84.3-117.1.8-11 6.5-16.3 16.1-16.3h70.9c5.5 0 10 4.5 10 10v115.2h83c5.5 0 10 4.4 10 9.9v81.7c0 5.5-4.5 10-10 10h-83.4V360c0 34.2 23.7 53.6 68 35.8 4.8-1.9 9-3.2 12.7-2.2 3.5.9 5.8 3.4 7.4 7.9l22 64.3c1.8 5 3.3 10.6-.4 14.5z"]};var o8={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]};var t8={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]};var K5={prefix:"fas",iconName:"ellipsis",icon:[448,512,["ellipsis-h"],"f141","M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"]},l8=K5;var f8={prefix:"fas",iconName:"link",icon:[640,512,[128279,"chain"],"f0c1","M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"]};var X5={prefix:"fas",iconName:"comment-sms",icon:[512,512,["sms"],"f7cd","M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM96 212.8c0-20.3 16.5-36.8 36.8-36.8H152c8.8 0 16 7.2 16 16s-7.2 16-16 16H132.8c-2.7 0-4.8 2.2-4.8 4.8c0 1.6 .8 3.1 2.2 4l29.4 19.6c10.3 6.8 16.4 18.3 16.4 30.7c0 20.3-16.5 36.8-36.8 36.8H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h27.2c2.7 0 4.8-2.2 4.8-4.8c0-1.6-.8-3.1-2.2-4l-29.4-19.6C102.2 236.7 96 225.2 96 212.8zM372.8 176H392c8.8 0 16 7.2 16 16s-7.2 16-16 16H372.8c-2.7 0-4.8 2.2-4.8 4.8c0 1.6 .8 3.1 2.2 4l29.4 19.6c10.2 6.8 16.4 18.3 16.4 30.7c0 20.3-16.5 36.8-36.8 36.8H352c-8.8 0-16-7.2-16-16s7.2-16 16-16h27.2c2.7 0 4.8-2.2 4.8-4.8c0-1.6-.8-3.1-2.2-4l-29.4-19.6c-10.2-6.8-16.4-18.3-16.4-30.7c0-20.3 16.5-36.8 36.8-36.8zm-152 6.4L256 229.3l35.2-46.9c4.1-5.5 11.3-7.8 17.9-5.6s10.9 8.3 10.9 15.2v96c0 8.8-7.2 16-16 16s-16-7.2-16-16V240l-19.2 25.6c-3 4-7.8 6.4-12.8 6.4s-9.8-2.4-12.8-6.4L224 240v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-6.9 4.4-13 10.9-15.2s13.7 .1 17.9 5.6z"]},m8=X5;var v8={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};var h8={prefix:"fas",iconName:"exclamation",icon:[64,512,[10069,10071,61738],"21","M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM32 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"]};var z8={prefix:"fas",iconName:"print",icon:[512,512,[128424,128438,9113],"f02f","M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]};var J5=[J6,r8,$6,i8,X6,n8,a8,Q6,Z6,c8,s8,Y6,K6,m8,o8,v8,z8,h8,f8,l8,t8,e8],H8=(()=>{let a=class a{constructor(e){e.addIcons(...J5)}};a.\u0275fac=function(r){return new(r||a)(A(R3))},a.\u0275mod=R({type:a}),a.\u0275inj=D({imports:[L1]});let c=a;return c})();function Q5(c,a){if(c&1){let i=S1();M(0,"div",6)(1,"p",7),P(2),V(),M(3,"p",7),P(4),V(),M(5,"p",7)(6,"button",8),E("click",function(){J(i);let r=x(2);return Q(r.startBtnClick("easy"))}),P(7),V()(),M(8,"p",7)(9,"button",8),E("click",function(){J(i);let r=x(2);return Q(r.startBtnClick("normal"))}),P(10),V()(),M(11,"p",7)(12,"button",8),E("click",function(){J(i);let r=x(2);return Q(r.startBtnClick("hard"))}),P(13),V()()()}if(c&2){let i=x().$implicit;p(2),n1(i("intro1")),p(2),n1(i("intro2")),p(3),Y("\u{1F60A} ",i("easy"),""),p(3),Y("\u{1F610} ",i("normal"),""),p(3),Y("\u{1F975} ",i("hard"),"")}}function c7(c,a){if(c&1){let i=S1();M(0,"div",16)(1,"speed-item",17),E("click",function(){let s=J(i).$implicit,n=x(3);return Q(n.onSelect(s))}),V()()}if(c&2){let i=a.$implicit,e=x(3);u1("width",e.sizeItem,"px")("height",e.sizeItem,"px")("font-size",e.itemFontSize,"px"),p(1),b("item",i)}}function a7(c,a){if(c&1&&(M(0,"div",3)(1,"div",9)(2,"div",10),P(3),V(),M(4,"div",11),$(5,"speed-item",12),V(),M(6,"div",13),P(7),V()(),M(8,"div",14),s1(9,c7,2,7,"div",15),V()()),c&2){let i=x(2);p(1),u1("width",i.mainWidth,"px"),p(1),u1("width",i.partWidth,"px"),p(1),Y(" ",i.time," "),p(1),u1("width",i.partWidth,"px"),p(1),b("item",i.targetItem),p(1),u1("width",i.partWidth,"px"),p(1),Y(" ",i.points," "),p(1),u1("width",i.mainWidth,"px"),p(1),b("ngForOf",i.items)}}function e7(c,a){if(c&1){let i=S1();M(0,"div",6)(1,"p",3),P(2),V(),M(3,"p",3),P(4),V(),M(5,"p",3)(6,"button",18),E("click",function(){J(i);let r=x(2);return Q(r.retry())}),P(7),V()(),M(8,"p",3)(9,"button",18),E("click",function(){J(i);let r=x(2);return Q(r.back())}),P(10),V()(),M(11,"p"),$(12,"share-button",19),V()()}if(c&2){let i=x().$implicit,e=x();p(2),n1(i("timeUp")),p(2),n1(e.points),p(3),Y("\u{1F501} ",i("tryAgain"),""),p(3),Y("\u25C0 ",i("back"),""),p(2),b("theme","circles-dark")("button","whatsapp")("url","https://danielmgc.github.io/speed-game/browser/"+e.points+"/"+e.mode)("title","I invite you to beat my score")("description","I invite you to beat my score")("autoSetMeta",!1)}}function i7(c,a){if(c&1){let i=S1();X3(0),M(1,"div",1),E("@changeColor.done",function(r){J(i);let s=x();return Q(s.onAnimationEvent(r))}),M(2,"div",2)(3,"p",3),P(4),V()(),s1(5,Q5,14,5,"div",4)(6,a7,10,14,"div",5)(7,e7,13,10,"div",4),V(),J3()}if(c&2){let i=a.$implicit,e=x();p(1),b("@changeColor",e.colorState),p(3),n1(i("title")),p(1),b("ngIf",e.screen=="intro"),p(1),b("ngIf",e.screen=="game"),p(1),b("ngIf",e.screen=="end")}}var _3=(()=>{let a=class a{constructor(e,r){this.metaService=e,this.activatedroute=r,this.time="",this.seconds=0,this.points=0,this.numRows=0,this.numCols=0,this.mainWidth=0,this.partWidth=0,this.items=[],this.targetItem={value:""},this.timeInterval=q3(1e3),this.screen="intro",this.colorState="normal",this.language="en",this.sizeItem=50,this.itemFontSize=20,this.mode="";var s=this.activatedroute.snapshot.paramMap.get("score"),n=this.activatedroute.snapshot.paramMap.get("mode");this.language=navigator.language.split("-")[0],s!=null&&n!=null?this.metaService.addTag({name:"description",content:"I invite you to beat my score of "+s+" on "+n+" mode!"}):this.metaService.addTag({name:"description",content:"How much can you score?"}),this.metaService.addTag({property:"og:title",content:"Emoji Speed Game"})}createBoard(e,r){this.numCols=e,this.numRows=r,this.itemFontSize=20,this.sizeItem=50,this.mainWidth=this.numCols*this.sizeItem,this.partWidth=this.mainWidth/3;var s=window.innerWidth;this.mainWidth>s&&(this.mainWidth=s,this.sizeItem=this.mainWidth/this.numCols,this.itemFontSize-this.sizeItem<10&&(this.itemFontSize=this.sizeItem-10,this.itemFontSize<=0&&(this.itemFontSize=this.sizeItem)))}createItems(){this.items=[];for(let e=0;e<this.numRows;e++)for(let r=0;r<this.numCols;r++)this.items.push({value:this.getNewEmoji()});this.targetItem=this.getRandomItem()}getNewEmoji(){let e="";do e=p2.getRandomEmoji();while(this.existsItemWithValue(e));return e}existsItemWithValue(e){for(let r of this.items)if(r.value==e)return!0;return!1}getRandomItem(){return this.items[Math.floor(Math.random()*this.items.length)]}setColorState(e){this.colorState=e}onSelect(e){e.value==this.targetItem.value?(this.setColorState("correct"),this.points++,e.value=this.getNewEmoji(),this.targetItem=this.getRandomItem()):(this.setColorState("wrong"),this.seconds-=2,this.refreshTime())}refreshTime(){let e=Math.floor(this.seconds);e<0&&(e=0);let r=Math.floor(e/60).toString().padStart(2,"0"),s=(e-r*60).toString().padStart(2,"0");this.time=`${r}:${s}`}startBtnClick(e){switch(e){case"easy":this.createBoard(5,5);break;default:case"normal":this.createBoard(10,10);break;case"hard":this.createBoard(15,15);break}this.mode=e,this.startGame()}startGame(){this.points=0,this.seconds=60,this.refreshTime(),(!this.subscription||this.subscription==_2.EMPTY)&&(this.subscription=this.timeInterval.subscribe(e=>{this.screen=="game"&&(this.seconds>0?(this.seconds--,this.refreshTime()):(this.subscription.unsubscribe(),this.subscription=_2.EMPTY,this.screen="end"))})),this.createItems(),this.screen="game"}onAnimationEvent(e){this.colorState!="normal"&&(this.colorState="normal")}retry(){this.startGame()}back(){this.points=0,this.seconds=60,this.screen="intro"}};a.\u0275fac=function(r){return new(r||a)(L(y1),L(H4))},a.\u0275cmp=_({type:a,selectors:[["speed-main"]],standalone:!0,features:[e4([y1]),U],decls:1,vars:1,consts:[[4,"transloco","translocoLang"],[1,"div-body"],[1,"title"],[1,"mt20"],["class","intro",4,"ngIf"],["class","mt20",4,"ngIf"],[1,"intro"],[1,"mt20","lh30"],[1,"w100",3,"click"],[1,"div-hub"],[1,"div-hub-part","div-time"],[1,"div-hub-part","div-target"],[3,"item"],[1,"div-hub-part","div-points"],[1,"div-main"],["class","div-item",3,"width","height","font-size",4,"ngFor","ngForOf"],[1,"div-item"],[3,"item","click"],[3,"click"],[3,"theme","button","url","title","description","autoSetMeta"]],template:function(r,s){r&1&&s1(0,i7,8,5,"ng-container",0),r&2&&b("translocoLang",s.language)},dependencies:[V4,m2,s4,T4,j6,G6,L1,H8],styles:['.div-body[_ngcontent-%COMP%]{height:100vh;width:100%;background-color:#fff;font-family:"Noto Color Emoji",sans-serif}.div-item[_ngcontent-%COMP%]{display:inline-block;width:50px;height:50px;text-align:center;font-size:20px}.div-main[_ngcontent-%COMP%]{margin:30px auto auto}.div-hub[_ngcontent-%COMP%]{margin:auto}.div-hub-part[_ngcontent-%COMP%]{text-align:center;font-size:20px;display:inline-block}.div-points[_ngcontent-%COMP%], .div-time[_ngcontent-%COMP%]{margin-right:0;font-family:Englebert,cursive}.title[_ngcontent-%COMP%]{font-family:Englebert,cursive;font-size:30px;text-align:center;margin:auto;padding-top:10px}.intro[_ngcontent-%COMP%]{font-family:Englebert,cursive;font-size:20px;text-align:center;margin:10px auto auto}.intro[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:5px 10px;background-color:khaki;border:none}.intro[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#eadc5f}.intro[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:active{background-color:#f6f0b9}.mt20[_ngcontent-%COMP%]{margin-top:20px}.w100[_ngcontent-%COMP%]{width:100px}.lh30[_ngcontent-%COMP%]{line-height:30px}'],data:{animation:[v4("changeColor",[z2("normal",h2({backgroundColor:"#ffffff"})),z2("correct",h2({backgroundColor:"#9addb5"})),z2("wrong",h2({backgroundColor:"#ed7171"})),H2("* => correct",v2("1ms ease-in")),H2("* => wrong",v2("1ms ease-in")),H2("* => normal",v2("800ms ease-out"))])]}});let c=a;return c})();var p8=[{path:"",redirectTo:"/speed",pathMatch:"full"},{path:"speed",component:_3},{path:"speed/:score/:mode",component:_3}];var u8=(()=>{let a=class a{constructor(){this.http=B(o4)}getTranslation(e){return this.http.get(`/speed-game/browser/assets/i18n/${e}.json`)}};a.\u0275fac=function(r){return new(r||a)},a.\u0275prov=k({token:a,factory:a.\u0275fac,providedIn:"root"});let c=a;return c})();var M8={providers:[u4(p8),m4(),h4(),t4(),B4({config:{availableLangs:["en","es","pt","fr"],defaultLang:"en",reRenderOnLangChange:!0,prodMode:!i4()},loader:u8})]};var r7={providers:[z4()]},V8=r4(M8,r7);var s7=()=>l4(M4,V8),bc=s7;export{bc as a};

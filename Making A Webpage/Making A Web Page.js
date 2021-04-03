{\rtf1\ansi\ansicpg1252\cocoartf2577
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Monaco;}
{\colortbl;\red255\green255\blue255;\red141\green68\blue235;\red57\green70\blue78;\red42\green171\blue81;
\red227\green136\blue0;\red250\green61\blue88;}
{\*\expandedcolortbl;;\csgenericrgb\c55294\c26667\c92157;\csgenericrgb\c22353\c27451\c30588;\csgenericrgb\c16471\c67059\c31765;
\csgenericrgb\c89020\c53333\c0;\csgenericrgb\c98039\c23922\c34510;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\tx916\tx1832\tx2748\tx3664\tx4580\tx5496\tx6412\tx7328\tx8244\tx9160\tx10076\tx10992\tx11908\tx12824\tx13740\tx14656\pardeftab720\ri-340\sl372\partightenfactor0

\f0\fs21 \cf2 document\cf3 .getElementById(\cf4 "changeList"\cf3 ).onclick = newList;\
\pard\tx916\tx1832\tx2748\tx3664\tx4580\tx5496\tx6412\tx7328\tx8244\tx9160\tx10076\tx10992\tx11908\tx12824\tx13740\tx14656\pardeftab720\ri-340\sl372\partightenfactor0
\cf5 var\cf3  item1;\
\cf5 var\cf3  item2;\
\cf5 var\cf3  item3;\
\cf5 function\cf3  \cf6 newList\cf3 () \{\
item1 = prompt(\cf4 "Enter a new first thing: "\cf3 );\
item2 = prompt(\cf4 "Enter a new second thing: "\cf3 );\
item3 = prompt(\cf4 "Enter a new third thing: "\cf3 );\
updateList();\
\}\
\cf5 function\cf3  \cf6 updateList\cf3  () \{\
\pard\tx916\tx1832\tx2748\tx3664\tx4580\tx5496\tx6412\tx7328\tx8244\tx9160\tx10076\tx10992\tx11908\tx12824\tx13740\tx14656\pardeftab720\ri-340\sl372\partightenfactor0
\cf2 document\cf3 .getElementById(\cf4 "firstThing"\cf3 ) .innerHTML = item1; \cf2 document\cf3 .getElementById(\cf4 "secondThing"\cf3 ) .innerHTML = item2; \cf2 document\cf3 .getElementById(\cf4 "thirdThing"\cf3 ) .innerHTML = item3;\
\pard\pardeftab720\ri-340\partightenfactor0
\cf3 \}}
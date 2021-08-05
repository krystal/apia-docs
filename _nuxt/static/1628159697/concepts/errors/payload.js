__NUXT_JSONP__("/concepts/errors", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD){return {data:[{document:{slug:F,description:"An opinionated framework for building APIs in Ruby.",title:O,position:1.4,category:"Concepts",toc:[{id:Z,depth:P,text:_},{id:$,depth:3,text:aa},{id:ab,depth:P,text:ac},{id:ad,depth:P,text:ae}],body:{type:"root",children:[{type:b,tag:s,props:{},children:[{type:a,value:"All errors that can be generated by the API must be defined as error objects. This tells the API how it should represent them to the consumer as well as providing information required for documentation."}]},{type:a,value:j},{type:b,tag:Q,props:{id:Z},children:[{type:b,tag:G,props:{ariaHidden:u,href:"#defining-errors",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:_}]},{type:a,value:j},{type:b,tag:s,props:{},children:[{type:a,value:"Errors can be defined as classes (when they need to be shared across multiple endpoints) or inline. When defining them within a class they should inherit from the "},{type:b,tag:n,props:{},children:[{type:a,value:"Apia::Error"}]},{type:a,value:" class."}]},{type:a,value:j},{type:b,tag:"h3",props:{id:$},children:[{type:b,tag:G,props:{ariaHidden:u,href:"#example-definition",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:aa}]},{type:a,value:j},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:af}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ag}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# Defines information about the error for documentation"}]},{type:a,value:"\n  name "},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"'Example error'"}]},{type:a,value:"\n  description "},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:"'Raised when an example is encountered but should not have been'"}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# Defines the code that will be returned to the consumer"}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":example_error"}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# Defines the HTTP status that should be returned when this error is encountered"}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"418"}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# Define fields that should be included with this field"}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":details"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:j}]}]}]},{type:a,value:j},{type:b,tag:Q,props:{id:ab},children:[{type:b,tag:G,props:{ariaHidden:u,href:"#raising-errors",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ac}]},{type:a,value:j},{type:b,tag:s,props:{},children:[{type:a,value:"Errors can be raised by calling "},{type:b,tag:n,props:{},children:[{type:a,value:"raise_error"}]},{type:a,value:" and providing either the name of the class ("},{type:b,tag:n,props:{},children:[{type:a,value:af}]},{type:a,value:") or the name of the error if it has been defined inline."}]},{type:a,value:j},{type:b,tag:s,props:{},children:[{type:a,value:"This example shows how to raise a class-defined error. You should also provide any fields that are required for the error as shown below with "},{type:b,tag:n,props:{},children:[{type:a,value:F}]},{type:a,value:m}]},{type:a,value:j},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:E}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# ..."}]},{type:a,value:al},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"unless"}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"save\n      raise_error "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:" errors"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:am},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"full_messages\n    "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:j}]}]}]},{type:a,value:j},{type:b,tag:s,props:{},children:[{type:a,value:"This example shows how to raise an inline error."}]},{type:a,value:j},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:an}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:a,value:"\n    code "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":not_permitted"}]},{type:a,value:"\n    http_status "},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"406"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]}]},{type:a,value:"\n    raise_error "},{type:b,tag:c,props:{className:[d,K]},children:[{type:a,value:an}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:j}]}]}]},{type:a,value:j},{type:b,tag:Q,props:{id:ad},children:[{type:b,tag:G,props:{ariaHidden:u,href:"#catching-exceptions",tabIndex:H},children:[{type:b,tag:c,props:{className:[I,J]},children:[]}]},{type:a,value:ae}]},{type:a,value:j},{type:b,tag:s,props:{},children:[{type:a,value:"If any exception occurs during your application lifecycle, it will be returned to the user as an "},{type:b,tag:n,props:{},children:[{type:a,value:"unhandled_exception"}]},{type:a,value:" error. You can, however, choose to catch certain exceptions and return them as proper errors. Here's an example of catching Active Record validation errors:"}]},{type:a,value:j},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ag}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# We can define things as normal for the error..."}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":validation_error"}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,R]},children:[{type:a,value:"416"}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# However, we're also going to specify that this error can catch the"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# desired type of exception. Here we say that if an ActiveRecord::RecordInvalid"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# exception is encountered, we'll catch that and return a `ValidationError`"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# propertly. The block allows you to popular fields for the exception from"}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# the exception that was raised."}]},{type:a,value:"\n  catch_exception "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"ActiveRecord"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"RecordInvalid"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ao}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aq}]},{type:a,value:"fields"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aq}]},{type:a,value:"\n    fields"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:as}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"record"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"full_messages\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:j}]}]}]},{type:a,value:j},{type:b,tag:s,props:{},children:[{type:a,value:"This will only be caught if the "},{type:b,tag:n,props:{},children:[{type:a,value:E}]},{type:a,value:" error has been specified as a potential error for the endpoint where the exception is raised. So, you need to make sure to specify these if you want exceptions to be caught automatically. An endpoint might look this like:"}]},{type:a,value:j},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:T}]},{type:a,value:"\n\n  argument "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:":integer"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:u}]},{type:a,value:"\n  argument "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"ArgumentSets"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"UserProperties"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,av]},children:[{type:a,value:u}]},{type:a,value:"\n\n  field "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"Objects"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ay}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:E}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:V}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,W]},children:[{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]}]},{type:a,value:"\n    user "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:as}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"find"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:az}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aC}]},{type:a,value:"\n    user"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"update"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"!"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:az}]},{type:a,value:aA},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aC}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"# Might raise the error here but will be caught"}]},{type:a,value:"\n    response"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"add_field "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:" user\n  "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:j}]}]}]}]},dir:"\u002Fen\u002Fconcepts",path:"\u002Fen\u002Fconcepts\u002Ferrors",extension:".md",createdAt:aD,updatedAt:aD,to:"\u002Fconcepts\u002Ferrors"},prev:{title:"Enums",path:"\u002Fen\u002Fconcepts\u002Fenums",to:"\u002Fconcepts\u002Fenums"},next:{title:"Field Specs",path:"\u002Fen\u002Fconcepts\u002Ffield_specs",to:"\u002Fconcepts\u002Ffield_specs"}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation"," ",":","keyword","constant","\n","symbol","comment",".","code","end","operator",",","\n\n  ","p","\n  ","true","div","nuxt-content-highlight","pre","language-ruby","line-numbers","class","class-name","\u003C","Apia","ValidationError","errors","a",-1,"icon","icon-link","string","\n\n","[","]","Errors",2,"h2","number","ExampleEndpoint","Endpoint","\n\n  potential_error ","def","method-definition","function","call","defining-errors","Defining errors","example-definition","Example definition","raising-errors","Raising errors","catching-exceptions","Catching exceptions","ExampleError","Error","\n  code ","\n  http_status ","\n  field ",":string","\n    "," user","'NotPermitted'","do",":errors","|"," exception","=",":user_id"," required","boolean",":properties",":user","User","(","request","arguments",")","2021-08-05T10:34:09.146Z")));
 function sp(){

     var links = $('a.btn-success');
     var titles = $('h4.media-heading');
     page={
         names:[],
         links:[]
        };
        for (let index = 0; index < titles.length; index++) {
            titles[index].innerHTML;
            var name= titles[index].innerHTML.replace('<a href="#" class="pull-right save-toggl"><span class="fa-stack"><!----> <i class="fa fa-bookmark fa-stack-1x"></i></span>','');
            
            name= name.replace(' ','');
            name = name.trimStart();
            name = name.trimEnd();
            name = name.trim().replace("Save",'').trim().replace('</a>').trim().replace("undefined","").trim()
            
            page.names[index]=name;
            page.links[index]=links[index].href
        }
        //logging
        output=""
        for (let index = 0; index < page.names.length; index++) {
            console.log(page.names[index]+" => "+page.links[index]);
            output +=page.names[index]+" => "+page.links[index]+"\n";
        }
        alert(output);
        
        
    }
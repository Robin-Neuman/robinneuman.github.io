$(document).ready(function(e){

    // Checks if language is either swedish or english in localstorage and changes language on page accordingly
    let storedLang = window.localStorage.getItem('language');
    if(storedLang == "swedish"){
        $("body").find("[lang='en']").addClass("d-none");
        $("body").find("[lang='sv']").removeClass("d-none");
        
    }else if (storedLang == "english"){
        $("body").find("[lang='sv']").addClass("d-none");
        $("body").find("[lang='en']").removeClass("d-none");
    }
    
    // Toggles individual visibility of info of skillset tables
    $(".viewBtn").click(function(e) {
        let target = $(this).parent().parent().parent().find("tr");
        let btnTargetEn = $(this).parent().find("[lang='en']");
        let btnTargetSv = $(this).parent().find("[lang='sv']");
        if(target.attr("class") == "d-none"){
            target.removeClass("d-none");
            $(btnTargetEn).text("hide");           
            $(btnTargetSv).text("dölj");           
            
        }else{
            target.addClass("d-none")
            $(btnTargetEn).text("view");           
            $(btnTargetSv).text("visa"); 
        }           
    });

    // Sets page language to swedish
    $("#svenska").click(function(e){
        $("body").find("[lang='en']").addClass("d-none");
        $("body").find("[lang='sv']").removeClass("d-none");
        window.localStorage.removeItem('language');
        window.localStorage.setItem('language', 'swedish');
    })
    // Sets page language to english
    $("#english").click(function(e){
        $("body").find("[lang='sv']").addClass("d-none");
        $("body").find("[lang='en']").removeClass("d-none");
        window.localStorage.removeItem('language');
        window.localStorage.setItem('language', 'english');
    })    

    // Scrolls page down to projects
    $(".projectsNav").click(function(e){
        let content = document.getElementById("projects");
        content.scrollIntoView({behavior: "smooth"});
    })
    
    // Makes all tables on page visible
    $("#viewAll").click(function(e) {
        let target = $("#personSkillset").find("tr");
        let btnTargetEn = $(".headerBtn").find("[lang='en']");
        let btnTargetSv = $(".headerBtn").find("[lang='sv']");
            target.removeClass("d-none");       
            
            if(target.attr("class") != "d-none"){
                target.removeClass("d-none");
                $(btnTargetEn).text("hide");           
                $(btnTargetSv).text("dölj");           
                
            }
    });

    // Makes all tables on page invisible
    $("#hideAll").click(function(e) {
        let target = $("#personSkillset").find("tr");
        let btnTargetEn = $(".headerBtn").find("[lang='en']");
        let btnTargetSv = $(".headerBtn").find("[lang='sv']");
        target.addClass("d-none")
        
        if(target.attr("class") == "d-none"){
            target.addClass("d-none");
            $(btnTargetEn).text("view");           
            $(btnTargetSv).text("visa");           
            
        }
    });
})


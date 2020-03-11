$(function(){
    $(document).pngFix({ blankgif:'/assets/library/images/blank.gif' });
    
    function onContactFormLoaded(html){
        var contact = $(html);
        
        contact.find('label[for=id_message]').hide();
        var textarea = contact.find('textarea');
        if(textarea.length){
            if(textarea.text() == ''){
                textarea.text('Your message...');
                textarea.focus(function(){
                    textarea.text('');
                })
            }
        } else {
            // must have submitted the form successfully
            setTimeout(function(){
                contact.slideUp('slow', function(){
                    contact.remove();
                })
            }, 2000)
        }
        
        var existingForm = $('#contact-wrap');
        
        if(existingForm.length){
            existingForm.replaceWith(contact)
        } else {
            contact.hide()
            $('#header-wrap').after(contact);
            contact.slideDown('slow');
        }
        contact.find('form').submit(function(){
            $.post(
                '/contact/',
                $(this).serialize(),
                onContactFormLoaded,
                'html'
            )
            return false;
        })
    }
    
    $('#main-nav li a[href="/contact/"]').click(function(){
        if($('#contact-wrap').length){
            $('#contact-wrap').slideToggle('slow');
        } else {
            $.get(
                '/contact/',
                {},
                onContactFormLoaded,
                'html'
            );
        }
        return false
    })
});

function followChildLink(){
    window.location = $(this).find('a').attr('href');
}
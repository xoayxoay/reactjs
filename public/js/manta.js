      $("#paginate").html('abc');

      function quill(){
        var toolbarOptions = [
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'font': [] }],
          ['bold', 'italic', 'underline'],
          [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
          [{ 'color': [] }, { 'background': [] }],          
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],
          [{ 'indent': '-1'}, { 'indent': '+1' }],          
          ['link'],
        ];

        var quill = new Quill('#resolution_message', {
          modules: {
            toolbar: toolbarOptions
          },
          placeholder: 'Message',
          theme: 'snow'
        });

        $('.ql-toolbar').append('<span class="ql-formats"><button type="button" class="ql-image" onclick="click_ticket_upload_image(this)"><svg viewBox="0 0 18 18"> <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect> <circle class="ql-fill" cx="6" cy="7" r="1"></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg><input type="file" id="ticket_upload_image" name="ticket_upload_image" style="display:none;" onchange="update_ticket_upload_image(this)"/></button></span>');
      }

      quill();
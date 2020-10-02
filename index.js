function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}

window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments);};

/* customize formbutton here*/     
formbutton("create", {
    action: "https://formspree.io/f/xoqkojlj",
    title: "How may I help you?",
    fields: [
        { 
            type: "text", 
            label: "Name:", 
            name: "name",
            required: true,
            placeholder: "Your Name",
          },
      { 
        type: "email", 
        label: "Email:", 
        name: "email",
        required: true,
        placeholder: "your@email.com",
      },
      {
        type: "textarea",
        label: "Message:",
        name: "message",
        placeholder: "What's on your mind?",
      },
      { type: "submit" }      
    ],
    styles: {
      fontFamily: "Source Sans Pro",
      title: {
        background: "#81D8D0",
      },
      button: {
        background: "#81D8D0",
      }
    },
    initiallyVisible: true
  });
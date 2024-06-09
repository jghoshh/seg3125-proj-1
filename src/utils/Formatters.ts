export const dateFormatter = new Intl.DateTimeFormat('en-US', { 
  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
});

export const timeFormatter = new Intl.DateTimeFormat('en-US', { 
  hour: 'numeric', minute: 'numeric', hour12: true 
});
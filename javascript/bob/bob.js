var Bob = function() {
  'use strict';

  this.hey = function(message) {
    if (shouting(message)) {
      return "Woah, chill out!";
    } else if (question(message)) {
      return "Sure.";
    } else if (silence(message)) {
      return "Fine. Be that way!";
    } else {
      return "Whatever.";
    }
  };

  function shouting(message) {
    return (message.toUpperCase() === message) && (/[a-zA-Z]/.test(message));
  }

  function question(message) {
    return (message.slice(-1) === "?");
  }

  function silence(message) {
    return (message.trim() === "");
  }
};

module.exports = Bob;

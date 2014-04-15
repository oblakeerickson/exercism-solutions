var Bob = function() {
  'use strict';

  this.hey = function(message) {
    if (shouting(message)) {
      return "Woah, chill out!";
    } else if (question(message)) {
      return "Sure.";
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
};

module.exports = Bob;

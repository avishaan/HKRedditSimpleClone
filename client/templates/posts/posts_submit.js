Template.postSubmit.events({
  'submit form': function(e) {
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };
    Meteor.call('postInsert', post, function(err, result) {
      // display error to user and abort
      if (err)
        return alert(err.reason);

      // show this result but route anyway
      if (result.postExists)
        alert('This link has laready been posted');

      Router.go('postPage', {_id: result._id});

    });
  }
});

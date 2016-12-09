'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var yoHelper = require('yeoman-generator-helper');


module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stunning ' + chalk.red('generator-vue-component') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'project_name',
      message: 'Your project_name (eg: like this `vue-button` )?',
      default: yoHelper.discoverRoot
    },{
      type: 'input',
      name: 'description',
      message: 'Your description?'
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {

    yoHelper.rewriteProps(this.props);
    var projectName=this.props.projectName;
    this.props.ProjectName=projectName.charAt(0).toUpperCase()+projectName.slice(1);
    console.log(this.props);
    this._writingCopyFiles();
    this._writingTplFiles();
    this._writingTemplate();
  },
  _writingCopyFiles: function() {
    this.fs.copy(
      this.templatePath('{.*,config/*}'),
      this.destinationPath('.')
    );
  },
  _writingTplFiles: function() {
    this.fs.copyTpl(
      this.templatePath('{*,build/*,src/*.js}'),
      this.destinationPath('.'),
      this.props
    );
  },
  _writingTemplate: function() {
    this.fs.copyTpl(
      this.templatePath('src/components/Template.vue'),
      this.destinationPath('src/components/' + this.props.ProjectName + '.vue'),
      this.props
    );
  },
  install: function () {
    console.log('use ` yarn install `');
    //this.installDependencies();
  },
  end: function() {
    console.log('Enjoy coding~ :)');
  }
});

## CREATE a new project in ember-cli

	$ember new fixturetodo

	-- it creates the project structure as follows

		|-app
		|-bower_components
		|-bower.json
		|-Brocfile.js
		|-config
		|-dist
		|-node_modules
		|-package.json
		|-public
		|-README.md
		|-testem.json
		|-tests
		|-tmp
		|-vendor


			If it successfully installed.. go to project directory and run ember server

					$cd fixturetodo

					../fixturetodo$ember server  <-

					-- it gives the serving local host number,Enter the below url in browser.It display "Welcome to Ember.js"

				   Serving on http://localhost:4200

##using generate resource command

	$ ember generate resource todo name:string isDone:boolean

	 create app/models/todo.js

		   create tests/unit/models/todo-test.js

	  create app/routes/todo.js
	  create app/templates/todo.hbs

			create tests/unit/routes/todo-test.js

##write model function in routes/todo.js

	 model(){
	   return this.store.find('todo')
		}

## generate adapter in app

		$ember g adapter application

		--it will create the files as follows

			create app/adapters/application.js

			create tests/unit/adapters/application-test.js

##Modifications

	change the RestAdapter to FixtureAdapter in adapters/application.js

	add the fixtures to the model class in model/todo.js

##write code in todo.hbs

	<h1> Todos list</h1>
	{{#each model as |item|}}
	<li> {{item.name}}  {{item.isDone}}</li>
	{{/each}}
	

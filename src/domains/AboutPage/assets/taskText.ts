export const taskText = `
<b>Frontend developer demo</b>
<br>
Implement a widget that displays the weather.
<br>
<br>
<span style="color: var(--vt-c-fiolet);">\# Technologies:</span>
<br>Vue.js - 3, Pinia, Vuelidate, ohmyfetch, 
<br>TypeScript, class, architects skills - DDD, SOLID, TDD, minor dev rules, 
<br>ES7+, 
<br>SCSS, grid, flexbox,
<br>Vitest (unit testing), Cypress (e2e testing).
<br>
<br>
<span style="color: var(--vt-c-fiolet);">\# Conditions:</span>
<br>
1. Data for the widget taken from free public API: 
<br>
https://openweathermap.org/current,
<br>via ohmyfetch through <b>apiService module</b>.
<br>
<br>
2. <b>API errors</b> is handlered with a message:
<br>- entering wrong city name while pointing weather location
<br>
<br>
3. After clicking the ‘Gear’ button at the upper-right corner, the view switch to the following:
<br>
Here, a user be able to:
<br>
a. Remove previously added location.
<br>
b. Reorder the location by <b>dragging and dropping</b> them within the list.
<br>
c. Add new locations.
There is a <b>validation</b> with number within certain interval allowing negative numbers.
<br>
<br>
4. Save the configuration in the <b>local storage</b> and restore it on future visits. A user is be able
to configure the widget just once and then have the same view until they change the computer
or clean the storage.
<br>
<br>
5. If the local storage is empty it take current <b>geolocation</b> coordinates.
<br>
<br>
6. Use the <b>universal applicable vue component</b> - '@/components/gridCard/GridCard.vue'.
<br>
<br>
7. Make a bunch of tests where <b>unit</b> and <b>e2e</b> tests cover code with <b>Vitest</b> and <b>Cypress.io</b>
<br>Unit tests include:
<br>- Render component with props, child components, mocking Pinia,
<br>- Click & Router Test - Check the Router.push work out when cross-button click,
<br>- Exported function Testing, test is inside of JS file,
<br>- Pinia Testing - testing actions, setters and getters,
<br>- Testing static methods of class
<br>- as examples it is probably enough.
<br>
<br>E2E tests include:
<br>- routing between pages
<br>- examine a bunch of business processes
<br>
<br>
<span style="color: var(--vt-c-fiolet);"># Notes:</span>
<br>KEEP IN MIND
<br>There is not the production issue. 
<br>First at all it's just demonstration the developer style end some skills.
<br>It is possible to expand and deepen the presented backbone in a multifaceted and elaborate way.
<br>
<br>For example there is no objective to cover code with tests tremendously. I only point to my useful skills about it.
`
Module pattern:

The Module pattern was originally defined as a way to provide both private and public encapsulation for classes.
In JavaScript, the Module pattern is used to further emulate the concept of classes in such a way that we're able to include both public/private methods and variables inside a single object, thus shielding particular parts from the global scope. What this results in is a reduction in the likelihood of our function names conflicting with other functions defined in additional scripts on the page

Revealing module pattern:

Revealing module pattern is a design pattern, which let you organise your javascript code in modules, and gives better code structure. It gives you power to create public/private variables/methods (using closure), and avoids polluting global scope (If you know how to avoid that).
The Revealing Module pattern is a slightly improved version of the module pattern provided by Christian Heilmann. The problem with the module pattern is that we have to create new public functions just to call private functions and variables.
In this pattern, we map the specifications of the returned object to the private functions that we want to publicly expose

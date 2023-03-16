# Solution notes

## UX

1. No not found page or indication when on the main search page
2. Navigating through the radio options doesn't trigger the search - instead you need to click search button
3. The search term is being saved in the local storage which might not be a good idea for this case
4. When you search for example for all with term "a" the initial result is correct but trying to navigate through the pages doesn't pass the term

## Technical concerns

1. Logging in the console
2. The structure of the app could be better by using simple concepts like pages, components, containers
3. There are some parts of the tailwind configuration that are not used
4. Could've used one shared interface that has the properties which are the same between the entity definitions.
5. Entity interfaces in plural form
6. [key: string]: any; - better to use unknown instead of any.
7. Empty views folder.
8. helpers -> browserStorage - probably copy paste from somewhere as it even contains comments that the module is deprecated.
9. The loading animation is done through controlling directly the DOM instead of implementing it somehow with react context on higher level. (helpers -> loadingEffects)
10. Requests counter also is being updated through direct DOM interaction. (helpers -> swapiAxiosClient)
11. helpers -> swapiByUri - let data: any; - the type can be improved. Same for swapiEntry helper.
12. helpers -> swapiSearch there is a place for improvement on the types.
13. In some of the components there are explicit types which are not needed as the right side of the equals operator indicates what the type would be.
14. components -> SearchRadioCats  - for (const key in SwapiCats) cats.push(key); this might easily cause issues. Better would be to use useMemo.

## Bonus points

1. Implemented pagination
2. Added links to wikipedia and pictures(was not even in the task)
3. Movies preview route and links to it
4. Master-Detail pattern

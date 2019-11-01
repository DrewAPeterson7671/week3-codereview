# _Beep! Boop!_

#### _This application changes an input number into a range and replaces specific parts with text. (Current Version 11//01/2019)_

#### By _**Drew Peterson**_

## Description

_The user will input a number.  The application will output a range from zero to that number, substituting an numbers that contain a "3" with "I'm Sorry, Dave. I can't do that.", any numbers with a "2 with "Boop!", and any numbers with a "1" with "Beep!".  In any resulting conflicts, the higher number rule will prevail (such as "123" will resolve as ("I'm sorry, Dave...)_

## Behavior Driven Development Objectives


| Specified Behavior | Input Example | Output Example |
| - | - | - |
| Takes user input number and returns range from 0 to the user input number | 5 | 0, 1, 2, 3, 4, 5 |
| Replace numbers with a "1" with "Beep!"| 10 | 0, "Beep!", 2, 3, (...), 9, "Beep!" |
| Replace numbers with a "2" with "Boop!", | 2 | 0, "Beep!", "Boop!|
| replace numbers containing a "3" with the phrase "I'm sorry, Dave.  I'm afraid I can't do that." | 3 | 0, "Beep!", "Boop!", "I'm Sorry.."|
| The priority shall be: "3" replacement, "2" replacement and "1" replacement. | 13 | 0, "Beep!", "Boop!", "I'm Sorry..", 4 (...), "Beep!", "Boop!", "I'm sorry.." |

## Github Link
{[Github link to project](http://drewapeterson7671.github.io/week3-codereview/index.html)}

## Setup/Installation Requirements

* _Download the directory as structured._
* _Open index.html in a browser_
* _Best viewed in Google Chrome browser_
* _Other browsers currently untested_


## Known Bugs

_There are no bugs currently known._

## Support and contact details

_Please contact me directly via email at drew.a.peterson@hotmail.com with any bug reports, questions, critique, or for any reason._

## Technologies Used

_Technologies used are HTML 5, CSS, Javascript, jQuery, and Bootstrap.  This was constructed using Atom._

### License

*MIT*



Copyright (c) 2019 **_Drew Peterson_**

With the help of Will Wang and Jon Yi, I prototyped a replacement for social security based on the Ethereum blockchain. The simplest mechanism for providing for the elderly is to have an inter-generational tontine. While it sounds crude, what made it most crude was a lack of anonymity and lack of real way to prevent corrpution. If the fund members are publicly available, there is a cruel social incentive to your neighbors dying. Similarly, fund manager corruption made it difficult to ensure that only people of the correct age were added to the pool, and that funds were distributed in an honest manner. Hence, tontines are only legally in France currently.

Smart contracts and modern genetics make it possible to orchestrate a tontine that ensures the anonymity of participants, the verification of age and livelihood of participants, and the guarentee that funds are distributed in a pre-aproved manner. Starting with anonoymity, it is faily possible to be completely anonymous on blockchains. Fiat conversions make is possible to trace identities, but theoretically scramblers and privacy coins will make it possible to move money invisibly soon. Genetics can estimate age to within a 3-5 year window, and it is nearly possible to do a genetic test from a store-bought kit with the same ease of a pregnency kit. This can ensure people entering a pool are in a certain age range at the outset, and alive at regular intervals. Smart contracts allow dividend payments to those alive and within the pool after a certain date is reached. (Blockchains are asyncronous enough to blur date accuracy to the minute level, but we're working at the year level.) The only manual part of the process depends on how you organize the periodic filtering of the pool.

The implementation we wrote is not production ready, but it is a fun prototype that could far out-perform traditional social security. Pension funds are defaulting all over the country, and the upcoming generations will pay hefty portions of their steadily falling salaries into a social security structure that will never afford them the same luxury. Not only is our tontine model fair, but it also distributes money in a way that objectively increases returns to those most needing them - those living far beyond the average life expectancy. (To be clear, that is compounding returns on top of the market return of the investment structre; this results from the invested funds funneling to a smaller fraction of the pool over the dividend lifetime.) 

This idea was originally inspired by an article in the Economist, to give fair credit. They never explicity endorsed the model, of course, but in separate articles discusses tontines and the potential of smart contracts to upend traditional pension structures.

The repo: https://github.com/Thesis-smartcontract/Thesis-Project

Some learning points:

+ Solidity was best learned by reading the documentation and playing around with examples in Truffle. It does not take a lot of code to write a smart contract, but you have to be extrememly careful that you are writing an airtight program. I actually used TDD during this process because it was almost impossible to know if I was doing anything correctly otherwise. 

+ I should have split up my test contracts, but I am glad I wrote most of them with the JS suite (rather than Solidity). Having one big test contract makes you duplicate code, and testnet just fails a lot of the time when it runs too long. Using JS meant that by the time we got around to implementing the client-side of the app, we already knew the exact code to call the functions. Testnet sucks though, so we almost never made it through a demo without the app failing. If you called a function with too little gas the whole thing would crash, and the process of re-setting everything takes awhile.

+ I liked react more than I was expecting. Components are nice to write as long as you are only focusing on a single thing at a time. The downside of components is that the HTTP logic has to be crammed inside, which feels dirty compared to Angular's separation of concerns. If I had to build out a large app I would probably use Next.js to get up the framework at first, and then transfer the components to the standard babel transpiled version server up statically by a node server. The trade-off is a nicer coding flow for a fixed amount of overhead; the overhead just isn't worth it if the app is small.

+ CSS organization starts to make sense after you get the hang of grid and flex. It is a lot easier to do if you have all of the CSS in a single spot to start with, just so you can get used to what goes where at first. CSS is also pretty easy to forget, which is kind of a pain.
I built a trading bot while bored and bed-ridden over my Winter break. I had been interested in blockchain tech for awhile, but the extent of my activity had been spent reading white papers and following the news and scandals. Loose regulations, rampant market manipulation, and insider trading by even exchanges and government officials got my attention initially. Because dozens of exchanges run 24 hours a day with wild variability and large arbitrage gaps, I was surprised there were not more established bots.

I was also surprised at how few people set up AI systems to approach trading, at least in any kind of public setting. Almost all the existing tech I could find primarily used either

1. Market indicators to participate in day trading: calculate things like momentum, confidence of cyclic patterns, and if more than some fraction are positive/negative buy/sell.

2. Arbitrage bots to slowly work between exchanges: Track the highest sell / lowest buy offer on 17 different exchanges. Continuously calculate if completing both surpasses a margin of profitability given the transaction costs and exchange rates. Every exchange you do this for has to be manually done, because each API is finicky in its own way. The exchanges crash randomly, which can make it difficult to always be running continuously. The bots might also might not complete a buy and sell fast enough to complete the arbitrage.

3. Market makers to support exchange transactions: The easiest bots just match buys to sells within an exchange, and just make a profit on each completion. Exchange volume can be in the millions => guarenteed high profits as long as you don't pull a Mt. Gox.

I was interested in creating an AI bot that could do real-time day trading on multiple exchanges, to try to do the arbitrage between exchanges by cycling money within exchanges rather than between.

I ultimately did not have time to setup the cyclical system that I imagined in my two weeks of break, but I did get a good start with the overarching RL system that can connect and train on a generic trading socket. The repo can be found here:

Repo: https://github.com/max-hoffman/crypto-bots

If I have time to keep working on this at some point, I would build out the model more fully, use an ACA RL model instead, take advantage of XRB to try and do instant arbitrage between markets, and then play around with margin-trading to address the frequent and hard-hitting flash crashes.

Some learning points:

+ I setup and trained on an AWS instance to train and run my tensorflow model, but had trouble optimizing TF learning on those cloud CPUs/GPUs. There are disconnects between the available python versions (conda, 2.7), but also the source files for packages in and outside of the virtual environments. I had to manually direct the interpreter at runtime, and even then failed to get the CUDA optimizations that are supposed to be pre-installed. I might have had better luck if I tried running in a container. I hope to get better training with hardware when I start doing research this summer with the Swamidass lab.

+ Running daemons in python is a pain in the ass. After trying several recommended external packages, and trying to make my own, I defaulted to pm2. I had to install node, npm and pm2, but I already know how pm2 works and everything worked exactly the way it would with node. In short, pm2 works exactly how you would expect for any type of script, even though it is built for node and not popularized outside of that realm.

+ RDS with a good SQL driver was almost as easy for me to use as ElephantSQL, which I wasn’t expecting. The database randomly crashed randomly when I was testing and resetting, and it took me awhile to figure out that I just had to manually go and reset the instance. Otherwise, RDS was a lot less painful than I was expecting.

+ The more I read and build RL projects the more confused I am on when to apply different model types. I ended up using a simple DQN architecture, but by the end I felt like I should have used an advantage-actor-critic model. I am working on trying to figure out what models are appropriate for what circumstances. I understand when I hear people talk about how most machine learning is within the graps of undergrads, but I am continually reminded of how difficult model building can become the second you step outside of the comfort of discriminative and language modelling.

## As an afterthought

https://medium.com/@brannondorsey/browser-as-botnet-or-the-coming-war-on-your-web-browser-be920c4f718

This article was more interesting to me than the trading bots after I found it. It talks about how easy it can be to anonymously create powerful botnets that run in the browser via ads. If anything, if someone wanted to make money from cryptos while mining is still alive and well, it would be smarter (although more nefarious) to do so with JS scripts that run distributed in tens of thousands of browsers.

In essense, this article points out how cloud computing is almost cheaper to do through sneaky ads than through traditional sources, as long as the process can be asyncronous while switching between hosts.

Medical students use an app called Anki that works similar to flash cards. Supposedly it has a built-in algorithm that gives you new and reviewed material in a way to promote long-term retention, but that's irrelevent for now. My point is that the app runs on python scripts in the background on most medical students computers 24/7. That's a ton of hashing power from a lot of people who know very little about computers. There are something like 20,000 students in the U.S, half of whom are in their pre-clinical years. An add-on or tweak that made the interface not atrocious (it's IE8 terrible right now) might be able to get 5-10% of the market, or ~1,000 students. If the app only used 5% of the cpu power at any given time, that is about 50 laptops at any given time. (Most students have multiple computers or tablets, I think most of these numbers are way undershot, and the market would not be limited to only medical students in their pre-clinical years.) That could yield a lot of hashing power if this article is accurate. If I try it I'll make a post; if anyone else does it I'd love to hear about the results.
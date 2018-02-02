I built a trading bot while bored and bed-ridden over my Winter break. I had been interested in blockchain tech for awhile, but the extent of my activity had been spent reading white papers and following the news and scandals. Loose regulations, rampant market manipulation, and insider trading by even exchanges and government officials got my attention initially. Because dozens of exchanges run 24 hours a day with wild variability and large arbitrage gaps, I was surprised there were not more established bots.

I was also surprised at how few people set up AI systems to approach trading, at least in any kind of public setting. Almost all existing tech I could find primarily used market indicators to simulate day trading, arbitrage bots to slowly work between exchanges, or market makers to support exchange transactions. I was interested in creating an AI bot that could do real-time day trading on multiple exchanges, to try to do the arbitrage between exchanges by cycling money within exchanges rather than between.

I ultimately did not have time to setup the cyclical system that I imagined in my two weeks of break, but I did get a good start with the overarching RL system that can connect and train on a generic trading socket. 

If I have time to keep working on this at some point, I would build out the model more fully, use an ACA RL model instead, take advantage of XRB to try and do instant arbitrage between markets, and then play around with margin-trading to address the frequent and hard-hitting flash crashes.

##Some learning points for me:

+I setup and trained on an AWS instance, but had trouble optimizing TF learning on those cloud CPUs/GPUs. There are disconnects between the available python versions (conda, 2.7), but also the source files for packages in and outside of the virtual environments. I had to manually direct the interpreter at runtime, and even then failed to get the CUDA optimizations that are supposed to be pre-installed. I might have had better luck if I tried running in a container.

+Running daemons in python is a pain in the ass. After trying several recommended external packages, and trying to make my own, I defaulted to pm2. I had to install node, npm and pm2, but I already know how pm2 works and everything worked exactly the way it would with node.

+RDS with a good SQL driver was almost as easy for me to use as ElephantSQL, which I wasn’t expecting. The database randomly crashed randomly when I was testing and resetting, and it took me awhile to figure out that I just had to manually go and reset the instance. Otherwise, RDS was not so painful.

+The more I read and build RL projects the more confused I am on when to apply different model types. I ended up using a simple DQN architecture, but by the end I felt like I should have used an advantage-actor-critic model. I am working on trying to figure out what models are appropriate for what circumstances.

### As an afterthought:

https://medium.com/@brannondorsey/browser-as-botnet-or-the-coming-war-on-your-web-browser-be920c4f718
This article was more interesting to me than the trading bots after I found it. It talks about how easy it can be to anonymously create powerful botnets that run in the browser via ads. If anything, if someone wanted to make money from cryptos while mining is still alive, it would be smarter (although more nefarious) to do so with JS scripts that run distributed in tens of thousands of browsers.

Hey all, glad to be part of the team. Briefly, I'm a medical student at WashU right now. I've done research in chemistry, math, ML and physics, and I'm considering PhD programs in CS, physics, and other engineering fields before I complete my MD. I spend too much time reading blockchain whitepapers, but I'm always happy to talk and learn more. It sounds like there's a crew of you guys that are way more active than me in app development, but I try to keep up with the newest frameworks and languages in everything from JS to Go and Solidity in my free time, as well as the new cloud, serverless and containerization tech. My specialization has quickly been moving into machine learning, and it looks like most of my work over the next few years will focus on ML and devops. I do medical stuff too sometimes. In general I love learning and helping share what I know, so feel free to ask questions if you ever have any.
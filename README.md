# Analisys of Sci-Hub log server

![badge-img](https://img.shields.io/badge/Made%20at-%23AstroHackWeek-8063d5.svg?style=flat)

## Descriptions
[Sci-Hub](http://sci-hub.cc/) is a massive scientific research piracy site: it serves up basically any scientific paper ever published, regardless of pay walls. There's a [publicly available data set](http://datadryad.org/resource/doi:10.5061/dryad.q447c) (complete with Jupyter notebook) with six months of download request logs from Sci-Hub, linking IP addresses and timestamps with DOIs. This data has received far less attention than it should (despite the fact that it was [written up in Science](http://www.sciencemag.org/news/2016/04/whos-downloading-pirated-papers-everyone)). Let's see what we can find in there. It's fairly tractable time-series data. Anything is possible! We could look for patterns, outliers, or clustering of some kind; we could find out which countries are the most interested in astronomy per capita; we could even try to build some kind of piracy-based paper recommendation engine. Other ideas: what fraction o`f papers are open-access (and thus not behind pay walls); is there any interesting publisher-based geographical clustering.  Some analysis of correlations with GDP and population here: [https://thewinnower.com/papers/4715-correlating-the-sci-hub-data-with-world-bank-indicators-and-identifying-academic-use](https://thewinnower.com/papers/4715-correlating-the-sci-hub-data-with-world-bank-indicators-and-identifying-academic-use)

## Authors:
* Adam Becker
* Franco N. Bellomo

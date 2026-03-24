// ========================================
// GLOBALISATION - Edexcel A-Level Geography
// Topic 3: Globalisation
// ========================================

export const topicGlobalisation = {
  id: 'globalisation',
  title: 'Globalisation',
  icon: 'Globe',
  color: '#00ff88',
  unit: 'Human Geography',

  youtubeLinks: [
    { title: 'Globalisation Explained', url: 'https://www.youtube.com/watch?v=JJ0nFD19eT8', duration: '11:50' },
    { title: 'TNCs and Global Shift', url: 'https://www.youtube.com/watch?v=9MLeIBtRBLg', duration: '9:30' },
    { title: 'Impacts of Globalisation', url: 'https://www.youtube.com/watch?v=RqEMBhLPjJI', duration: '13:45' },
  ],

  sections: [
    // ====================================================
    // SECTION 1 — EQ1: Causes of Globalisation
    // ====================================================
    {
      id: 'glob-eq1',
      title: 'EQ1: What are the causes of globalisation and why has it accelerated in recent decades?',

      keyTerms: [
        { term: 'Globalisation', def: 'The growing interdependence of countries worldwide through the increasing volume and variety of cross-border transactions in goods, services, and capital, as well as the spread of technology, information, and culture.' },
        { term: 'Widening', def: 'The spatial stretching of global connections, meaning more countries and regions become involved in international networks of trade, communication, and migration.' },
        { term: 'Deepening', def: 'The intensification of global connections, meaning interactions between countries become more frequent, faster, and more impactful on everyday life.' },
        { term: 'KOF Globalisation Index', def: 'A composite index that measures globalisation across three dimensions: economic (trade, FDI, tariffs), social (migration, tourism, cultural proximity), and political (embassies, treaties, UN involvement). Ranges from 1 (least) to 100 (most globalised).' },
        { term: 'Free trade', def: 'International trade left to its natural course without tariffs, quotas, or other restrictions, allowing goods and services to move freely between countries.' },
        { term: 'Protectionism', def: 'Government policies that restrict international trade to help domestic industries, including tariffs (taxes on imports), quotas (limits on quantity), and subsidies to local producers.' },
        { term: 'Containerisation', def: 'The system of intermodal freight transport using standardised shipping containers (TEUs — Twenty-foot Equivalent Units). Introduced by Malcolm McLean in 1956, it reduced shipping costs by over 90% and handling time from weeks to hours.' },
        { term: 'Time-space compression', def: 'The idea (David Harvey, 1989) that technology has effectively shrunk the world by dramatically reducing the time needed to communicate and travel between places. Jet aircraft, internet, and mobile phones all contribute.' },
        { term: 'Foreign Direct Investment (FDI)', def: 'Investment made by a company or individual in one country into business interests in another country, typically by establishing operations or acquiring assets. Unlike portfolio investment, FDI involves a lasting management interest (usually 10%+ of voting stock).' },
        { term: 'International Monetary Fund (IMF)', def: 'An international organisation of 190 countries that works to stabilise global financial systems. Provides emergency loans to countries in financial crisis, often with conditions requiring economic reforms (Structural Adjustment Programmes).' },
        { term: 'World Bank', def: 'Provides loans and grants to developing countries for capital projects (infrastructure, education, health). Part of the Bretton Woods system established in 1944. Criticised for conditions attached to loans that promote neoliberal policies.' },
        { term: 'World Trade Organization (WTO)', def: 'Established in 1995, replacing GATT. Has 164 member countries. Sets rules for international trade, resolves disputes, and promotes trade liberalisation. Criticised for favouring developed nations.' },
        { term: 'Special Economic Zone (SEZ)', def: 'A designated area within a country where business and trade laws differ from the rest of the country. Typically offer tax incentives, reduced tariffs, and relaxed regulations to attract FDI. China\'s Shenzhen SEZ (1980) is a key example.' },
        { term: 'Transnational Corporation (TNC)', def: 'A company that operates in at least two countries. Has its headquarters in one country (usually an HIC) and production/operations in others. The largest TNCs have revenues exceeding many countries\' GDPs.' },
        { term: 'Global shift', def: 'The large-scale movement of manufacturing and increasingly service-sector jobs from developed countries (HICs) to developing countries (LICs/NEEs), driven by lower labour costs, fewer regulations, and new technology. Accelerated since the 1970s.' },
        { term: 'Neoliberalism', def: 'Economic ideology promoting free markets, privatisation, deregulation, and reduced government intervention. Associated with Thatcher (UK) and Reagan (US) in the 1980s. Underpins much of the globalisation process.' },
        { term: 'Trade bloc', def: 'A group of countries that have agreed to reduce or eliminate trade barriers between them. Examples include the EU (single market), NAFTA/USMCA, ASEAN, and Mercosur.' },
        { term: 'Outsourcing', def: 'When a company contracts out a business process or function to a third-party provider, often in another country where labour costs are lower. Common in IT, customer service, and manufacturing.' },
        { term: 'Offshoring', def: 'The relocation of a business process or entire production facility from one country to another, typically to reduce costs. Different from outsourcing because the company retains direct control.' },
        { term: 'Supply chain', def: 'The entire network of organisations, people, activities, information, and resources involved in creating and delivering a product from raw materials to the end consumer.' },
        { term: 'Comparative advantage', def: 'The theory (David Ricardo, 1817) that countries should specialise in producing goods where they have the lowest opportunity cost, then trade with others. Underpins the argument for free trade.' },
        { term: 'Free trade area', def: 'A type of trade agreement where members abolish tariffs and quotas between themselves but maintain independent restrictions on imports from non-member countries.' },
        { term: 'Customs union', def: 'A trade agreement where, besides free trade between member nations, all members are obliged to operate a common external tariff on imports from non-members.' },
        { term: 'Common market', def: 'A customs union that also allows the free movement of labour and capital between member nations.' },
        { term: 'Economic union', def: 'A trade agreement with all characteristics of a common market but also requires members to adopt common economic policies on matters such as transport, industry, and regional policy.' },
        { term: 'Bretton Woods', def: 'The 1944 conference in New Hampshire, USA, that established the post-WWII international monetary system, creating the IMF and World Bank. Set up fixed exchange rates pegged to the US dollar.' },
        { term: 'NIDL (New International Division of Labour)', def: 'The spatial rearrangement of production across the globe where manufacturing shifts to developing countries while HICs focus on services, R&D, and high-value activities.' },
      ],

      notes: [
        'Globalisation has accelerated since the 1980s due to four key factors: trade liberalisation (WTO, removal of tariffs), technological advances (internet, containerisation, jet travel), political changes (fall of USSR 1991, China opening up 1978), and the role of TNCs.',
        'Transport revolutions: Containerisation (1956) cut shipping costs by 90%+. A container ship can carry 24,000 TEUs. The largest ships (e.g. Ever Given, 400m long) carry goods worth $1 billion+. Air freight allows perishable goods to be traded globally.',
        'Communication revolutions: The internet (1990s onwards) connected 5.3 billion users by 2023. Fibre optic cables carry 99% of international data. Mobile phones reached 8.6 billion subscriptions globally. Social media platforms like Facebook (3 billion users) enable instant global communication.',
        'Political factors: The fall of the Berlin Wall (1989) and collapse of the USSR (1991) opened up new markets. China\'s Open Door Policy (1978) under Deng Xiaoping created SEZs. The WTO (1995) now has 164 members promoting trade liberalisation. The EU single market allows free movement of goods, services, capital, and people.',
        'Financial factors: Deregulation of financial markets (e.g. London Big Bang 1986) allowed free flow of capital. Global FDI flows reached $1.58 trillion in 2021. Tax havens and offshore banking facilitate global capital movement.',
        'The role of IGOs: The IMF, World Bank, and WTO form the "Washington Consensus" promoting free trade, privatisation, and deregulation. Structural Adjustment Programmes (SAPs) required developing countries to open markets in exchange for loans. Critics argue SAPs increased poverty and inequality.',
        'Trade blocs have promoted regional integration: EU (27 members, single market), USMCA (USA, Canada, Mexico), ASEAN (10 SE Asian nations), African Union (55 member states). These reduce internal barriers but can create external ones.',
        'The "shrinking world" concept: In 1500, sailing ships crossed the Atlantic in 2+ months. By 1850, steamships took 2 weeks. By 1960, jet aircraft took 7 hours. Today, information travels instantaneously via the internet. This is time-space compression (Harvey, 1989).',
        'The KOF Globalisation Index ranks countries: Switzerland, Netherlands, and Belgium consistently rank highest. Many African and Central Asian nations rank lowest. The index measures economic, social, and political dimensions of globalisation.',
        'Switched-on vs switched-off places: "Switched-on" places are well connected to global networks (e.g. London, Singapore, New York). "Switched-off" places are poorly connected (e.g. North Korea, parts of Sub-Saharan Africa). Factors include government policy, infrastructure, education, and political stability.',
        'Trade blocs and regional integration: The EU single market (27 members, 450 million consumers) allows free movement of goods, services, capital, and labour. NAFTA (1994) was renegotiated as USMCA (2020) — trade between the three members grew from $290 billion (1993) to $1.3 trillion (2022). ASEAN (10 SE Asian nations, 660 million people) created the ASEAN Economic Community in 2015 to promote regional trade.',
        'The WTO replaced GATT in 1995 and now has 164 member countries. It operates the Most Favoured Nation (MFN) principle — trade concessions given to one member must be extended to all. The Doha Development Round (launched 2001) stalled over disagreements between HICs and LICs on agricultural subsidies, highlighting power imbalances in global trade governance.',
        'The IMF and World Bank\'s Structural Adjustment Programmes (SAPs) required LICs to privatise state industries, cut government spending, devalue currencies, and open markets to foreign competition. In Zambia, SAPs led to the privatisation of copper mines and cuts to health and education spending, increasing poverty. Critics argue SAPs serve HIC interests under the guise of development.',
        'The role of TNCs as agents of globalisation: The top 100 TNCs control approximately 4% of world GDP. Of the world\'s 100 largest economic entities, 69 are corporations and only 31 are countries (2018). TNCs drive FDI, technology transfer, and cultural diffusion but also concentrate economic power.',
        'Neoliberalism as the ideological driver of globalisation: The "Washington Consensus" (a term coined by John Williamson in 1989) promoted fiscal discipline, tax reform, trade liberalisation, privatisation, and deregulation. Applied widely through IMF/World Bank conditions, it shaped economic policy in Latin America, Africa, and post-Soviet states from the 1980s onwards.',
        'Global shift in services: Offshoring is no longer limited to manufacturing. India handles 56% of global IT outsourcing. The Philippines is the world\'s call centre capital, employing 1.3 million people in BPO. Financial back-office functions have shifted to locations like Mauritius and Malaysia.',
        'The internet and digital globalisation: Global e-commerce sales reached $5.8 trillion in 2023. Platforms like Amazon, Alibaba, and Shopify allow small businesses in LICs to access global markets. However, the "platform economy" concentrates profits in Silicon Valley while gig workers worldwide lack employment protections.',
        'Factors that keep places "switched off": Landlocked countries (e.g. Chad, Niger) lack access to shipping routes. Conflict zones (e.g. Yemen, Syria) deter investment. Authoritarian regimes (e.g. North Korea, Eritrea) restrict trade and information flows. Poor governance and corruption increase transaction costs, deterring FDI.',
        'Evaluation point: Globalisation is not a natural or inevitable process — it has been actively promoted by powerful institutions (IMF, World Bank, WTO) and governments (USA, UK) pursuing neoliberal ideology. This means it could potentially be reversed or reshaped, as seen in the "slowbalisation" trend since 2008.',

        '--- NISSAN SUNDERLAND (TNC Investment Case Study) ---',
        'The UK gave £100 million to Nissan to assist the development of a plant in Sunderland, helping to reduce unemployment in the region.',
        'Initially in the 1980s, cars assembled at the Sunderland plant used Japanese parts. Over time, smaller UK firms bid and won contracts to supply Nissan. By 2016, 90% of parts used for Nissan cars made in the UK were sourced from UK companies, creating a significant multiplier effect.',
        'In 2016, production at Nissan Sunderland increased by 14%, manufacturing 480,000 cars per year. 20% of output was for domestic sale, while 80% was exported to Europe and Asia.',
        'At its peak, 5,000 people were employed at the Sunderland plant, making it the most efficient car plant in Europe. In 2011, Nissan invested a further £235 million into the plant.',
        'Impact of the 2008 financial crisis on Nissan Sunderland: sales of cars made in Sunderland decreased by 26.7%, resulting in 1,200 employees being made redundant. In 2008 and 2009, remaining workers were asked to take a 2% pay cut.',

        '--- EUROPEAN CAR INDUSTRY & SLOVAKIA ---',
        'Labour costs in the UK are 5x higher than in Poland and even lower in Slovakia and Estonia. Eastern European countries typically work 40-42 hours per week compared to 35 hours in Germany.',
        'Corporation tax rates vary significantly across the EU: Poland and Slovakia have a rate of just 19%, Estonia\'s is 0%, compared to the UK\'s 30% and Germany\'s 38%. Some argue low Eastern European rates are an unfair advantage only possible due to EU funding.',
        'Between 2014-16, the European Commission provided \u20AC50 billion for new member nations\' motor industries, covering 20-50% of eligible investment costs for companies.',
        'Slovakia has been referred to by Forbes as an "investment paradise" with the lowest cost base of new EU members. In 2014, VW was responsible for 25% of Slovakia\'s exports (250,000 cars), and VW has a 10-year tax concession in Slovakia.',
        'Slovakia\'s car industry: Kia\'s new factory was an $870 million investment creating 3,000 jobs, with 7 Kia suppliers bringing total investment to $1.7 billion. A new Hyundai factory (2016) generates 200,000 cars per year and a new Peugeot factory exports 300,000 cars per year. Slovakia produced 850,000 cars per year as of 2017.',
        'Slovakia, Czech Republic, and Hungary all have motor industries accounting for over 15% of their manufacturing output. 1/3 of German suppliers are located in Eastern Europe, and German manufacturers employ over 160,000 people in Eastern Europe.',
        'The EU\'s free movement of goods and common external tariff make it high value to locate inside the EU. The EU accounts for 19% of world trade, 46% of outward FDI and 24% of inward FDI.',

        '--- TRADE AGREEMENTS (Types & Impacts) ---',
        'Types of trade agreements in order of increasing integration: free trade area (abolish internal tariffs), customs union (common external tariff), common market (free movement of labour and capital), economic union (common economic policies on transport, industry, and regional policy).',
        'Benefits of trade agreements: less conflict and increased prosperity for members, international specialisation through comparative advantage, economies of scale, increased productivity, reduced prices for consumers, and breaking down domestic monopolies.',
        'Drawbacks of trade agreements: trade diversion (importing from bloc members rather than cheaper suppliers elsewhere), creation of protectionist blocs against non-members, complicated global regulations, developing countries\' industries unable to compete with superior foreign industries, and poorer nations may produce goods for other markets not reflecting internal demand (e.g. luxury car production in Slovakia).',

        '--- SWITCHED-OFF WORLD (Factors keeping places disconnected) ---',
        'Environment and climate change keep places switched off: increasing extreme weather, flooding and droughts combined with reliance on cash crops means climate change is felt most harshly in areas with rapid population growth, people living on floodplains and by the sea, and the economic pain of losing a harvest.',
        'Political factors keeping places switched off: governments with no money face a cycle of poverty — a poor population means lower tax revenue, which means less spending on health, education and infrastructure improvements, further entrenching disconnection from global networks.',
        'Physical geography keeps places switched off: landlocked nations and mountainous countries (e.g. Bolivia) find it hard to trade with the outside world. Countries like Mali and Chad are very arid and experience prolonged droughts, limiting economic potential.',
        'Health and poverty keep places switched off: good health is often denied in extreme poverty due to malnutrition, lack of clean water and sanitation, and insufficient money for medical services. Diseases like malaria debilitate the population. Pandemics like HIV/AIDS have devastating effects — many southern African nations have a 20% HIV infection rate.',

        '--- NEW EU MEMBER STATES (Eastern Europe Growth) ---',
        'The "New 10" EU member states experienced an average of 4.2% economic growth between 2004-2014, estimated to increase to 4.5% per year going forward — roughly 2x the growth of pre-2004 members.',
        'TNCs typically pay above average wages in new Eastern European countries, and governments maintain low unemployment benefits, meaning jobs in foreign TNCs are highly sought after by local workers.',
        'Slovakia enjoys a strategic position with its Austrian border, giving it easy access to Western European markets — a key locational advantage alongside its low costs.',
      ],
    },

    // ====================================================
    // SECTION 2 — EQ2: Consequences & Impacts
    // ====================================================
    {
      id: 'glob-eq2',
      title: 'EQ2: What are the consequences of globalisation for countries, different groups of people and cultures?',

      keyTerms: [
        { term: 'Deindustrialisation', def: 'The decline of a country\'s industrial sector, particularly manufacturing, often as a result of the global shift. In the UK, manufacturing fell from 25% of GDP in 1970 to under 10% by 2020.' },
        { term: 'Global shift', def: 'The movement of manufacturing industry from developed to developing countries since the 1970s, driven by cheaper labour, lower regulations, and new technology. China became the "workshop of the world".' },
        { term: 'Race to the bottom', def: 'Competition between countries to attract FDI by offering the lowest wages, weakest environmental regulations, and most generous tax breaks, potentially harming workers and the environment.' },
        { term: 'Brain drain', def: 'The emigration of highly trained or educated people from a country, reducing its human capital. E.g. doctors leaving Sub-Saharan Africa for the UK/US, reducing healthcare capacity in their home countries.' },
        { term: 'Remittances', def: 'Money sent home by migrant workers to their families in their country of origin. Global remittances to developing countries reached $540 billion annually by 2020, exceeding foreign aid.' },
        { term: 'Cultural imperialism', def: 'The imposition of one culture\'s values, beliefs, and practices on another, often through TNCs and media. Associated with the dominance of American/Western culture globally.' },
        { term: 'McDonaldisation', def: 'George Ritzer\'s (1993) concept that global culture is becoming increasingly standardised, efficient, and predictable, modelled on the principles of the fast-food restaurant.' },
        { term: 'Glocalisation', def: 'The adaptation of global products and marketing strategies to suit local tastes and cultural norms. E.g. McDonald\'s McAloo Tikki in India, KFC rice meals in Asia.' },
        { term: 'Coca-colonisation', def: 'A term describing the spread of American consumer culture globally, symbolised by Coca-Cola\'s presence in 200+ countries. Represents concerns about cultural homogenisation and the erosion of local traditions.' },
        { term: 'Digital divide', def: 'The gap between those with access to modern ICT (internet, computers, smartphones) and those without. Exists between HICs and LICs, and within countries (urban vs rural, rich vs poor, old vs young).' },
        { term: 'Gini coefficient', def: 'A measure of income inequality within a country, ranging from 0 (perfect equality) to 1 (perfect inequality). South Africa has one of the highest (0.63), while Scandinavian countries have the lowest (~0.25).' },
        { term: 'Elephant curve', def: 'Branko Milanovic\'s graph showing that between 1988-2008, the global middle class (especially in China/India) and the top 1% gained most from globalisation, while the lower-middle class in developed countries (especially the US/UK) gained least.' },
        { term: 'Smile curve', def: 'Shows that value added is highest at the design/R&D stage and the marketing/branding stage of production, but lowest at the manufacturing/assembly stage. Explains why HICs capture most profit from global supply chains.' },
        { term: 'Global value chain', def: 'The full range of activities that firms and workers perform to bring a product from conception to end use, including design, production, marketing, distribution, and support.' },
        { term: 'Sweatshop', def: 'A factory or workshop, especially in the clothing industry, where workers are employed at very low wages for long hours under poor conditions. Often found in LICs/NEEs supplying TNCs.' },
        { term: 'Transfer pricing', def: 'A strategy used by TNCs to minimise tax by setting prices for transactions between their subsidiaries in different countries, shifting profits to low-tax jurisdictions.' },
        { term: 'Footloose industry', def: 'Industry that can locate or relocate freely because it is not dependent on any particular resource or location. Common in electronics, textiles, and call centres.' },
        { term: 'Multiplier effect', def: 'The process by which investment in one area stimulates further economic activity and employment. TNC investment can create jobs in supply chains, services, and local spending.' },
        { term: 'Leakage', def: 'When economic benefits from investment or tourism flow out of a country rather than staying in the local economy. Profits repatriated by TNCs to their home country represent leakage.' },
      ],

      notes: [
        'Economic consequences: Global trade grew from $2 trillion (1970) to $25 trillion (2022). Global GDP per capita has more than doubled since 1990. However, benefits are unevenly distributed — the richest 1% own more wealth than the bottom 50%.',
        'China\'s transformation: Following Deng Xiaoping\'s Open Door Policy (1978), China averaged 9.5% GDP growth from 1978-2018. Over 800 million people were lifted out of poverty. China became the world\'s largest manufacturer and second-largest economy. However, this came with severe pollution, inequality, and workers\' rights issues.',
        'Deindustrialisation in the UK: Manufacturing fell from 25% of GDP (1970) to under 10% (2020). Cities like Sheffield, Birmingham, and Glasgow lost heavy industry. Detroit (USA) filed for bankruptcy in 2013 with $18 billion in debt. However, some areas reinvented themselves through service industries and technology.',
        'Winners and losers: The elephant curve (Milanovic) shows the global middle class in Asia gained most, while the working class in developed countries stagnated. Between 1988-2008, the bottom 50% in the US saw almost no real income growth, while Chinese incomes grew by 80%+.',
        'Cultural impacts: McDonald\'s operates in over 120 countries. Coca-Cola is sold in 200+ countries. Hollywood films dominate global box offices. English is the lingua franca of business and the internet. However, cultural exchange is two-way — Bollywood, K-pop, and Japanese anime have global followings.',
        'Migration and remittances: 281 million international migrants globally (2020). Remittances to developing countries reached $540 billion annually, exceeding foreign aid. However, brain drain depletes skilled workers from developing countries. Migration also causes social tensions in host countries.',
        'The digital divide: 2.9 billion people remain without internet access. Sub-Saharan Africa has 28% internet penetration vs 90%+ in Europe. Women in LICs are 23% less likely to have internet access than men. The digital divide reinforces existing inequalities.',
        'Environmental consequences: International shipping accounts for 2.5% of global CO2 emissions. The fashion industry produces 92 million tonnes of textile waste annually. Air freight has a carbon footprint 50x greater than sea freight. E-waste reached 53.6 million tonnes in 2019, with only 17.4% recycled.',
        'TNCs can be positive: They bring FDI, create jobs, transfer technology, improve infrastructure, and increase tax revenue. Foxconn employs 1.5 million workers in China. Samsung accounts for 20% of South Korea\'s GDP. TNCs invested $1.58 trillion globally in 2021.',
        'TNCs can be negative: They exploit cheap labour, avoid taxes through transfer pricing, repatriate profits (leakage), damage the environment, and create dependency. The "race to the bottom" drives down wages and regulations.',
        'Nike case study — global supply chain: Nike does not own any factories. It outsources to 500+ contract factories in 40+ countries. A $170 retail shoe costs approximately $28 to manufacture, with workers earning $2-3 of that. Nike\'s revenue is $51 billion, illustrating the "smile curve" — value concentrated in design (Oregon HQ) and marketing, not manufacturing.',
        'Apple case study — tax avoidance: Apple routed European profits through Ireland, paying as little as 0.005% tax. The EU ordered Apple to pay \u20AC13 billion in back taxes (2016). Apple\'s "Double Irish" arrangement exemplifies how TNCs use transfer pricing to minimise tax, depriving both HIC and LIC governments of revenue.',
        'Unilever as a "positive" TNC example: Unilever\'s Sustainable Living Plan (2010) aimed to halve environmental footprint while doubling revenue. It sources from 5.5 million smallholder farmers. Its brands (Dove, Ben & Jerry\'s, Lipton) are sold in 190 countries. However, critics question whether CSR is genuine or greenwashing to maintain brand reputation.',
        'The global shift and migration are linked: As manufacturing moved to Asia, workers in deindustrialised regions of the UK/USA experienced unemployment and wage stagnation. Simultaneously, rural-urban migration within China moved 300+ million people to factory cities. International migration (e.g. Polish workers to the UK post-2004) filled service-sector gaps left by economic restructuring.',
        'Cultural globalisation — two-way flows: While American cultural products dominate (Hollywood, Netflix, McDonald\'s), reverse flows are significant. K-pop group BTS generated $5 billion for South Korea\'s economy annually. Bollywood produces 1,500-2,000 films per year (vs Hollywood\'s 600-700). Japanese anime is a $25 billion global industry. This challenges the "cultural imperialism" narrative.',
        'The development gap within countries: China\'s coastal cities (Shanghai, Shenzhen) have GDP per capita comparable to HICs, while interior provinces (Guizhou, Gansu) remain much poorer. India\'s IT hubs (Bangalore, Hyderabad) contrast with rural Bihar and UP. Globalisation creates internal winners and losers, not just between countries.',
        'Remittances as a development tool: Global remittances reached $656 billion to LICs/MICs in 2022, exceeding FDI to these countries. India ($100 billion), Mexico ($60 billion), and the Philippines ($38 billion) are top recipients. Remittances are more stable than FDI and go directly to families. However, they can create dependency and do not address structural inequality.',
        'Environmental consequences of global supply chains: A single cotton t-shirt requires 2,700 litres of water to produce. The fashion industry is responsible for 10% of global carbon emissions. "Fast fashion" brands like Shein ship 6,000+ new styles daily. E-waste (53.6 million tonnes in 2019) is often dumped in LICs like Ghana (Agbogbloshie) and Nigeria.',
        'The "elephant curve" (Branko Milanovic) — exam evaluation: The curve shows the global middle class (percentiles 50-60, largely China/India) and the top 1% gained most from globalisation between 1988-2008. The "losers" at percentiles 75-90 are the working/middle classes of HICs (USA, UK, France). This helps explain the rise of populist politics, Brexit, and Trump\'s election.',
        'Evaluation point: Whether globalisation is "good" or "bad" depends on scale, timeframe, and who you ask. It has lifted hundreds of millions out of poverty (especially in China) but widened inequality within many countries. It has connected cultures but threatens local identities. The 20-mark essay must weigh both sides with specific evidence.',

        '--- SHELL / OGONI PEOPLE (Social Impact Case Study) ---',
        'In 1990, Shell began exploring oil and natural gas fields in the Nigerian Delta, the native home of the Ogoni people. Poet Ken Saro-Wiwa led peaceful protests against Shell drilling on Ogoni land for 2 years.',
        'Ken Saro-Wiwa and 9 other Ogoni members were arrested for "inciting a riot", found guilty and given death sentences. The following day they were executed, and their bodies were burned behind a police station — illustrating extreme consequences when local communities resist TNC operations.',

        '--- GAP/NIKE SWEATSHOP DETAILS (Social Impact Case Study) ---',
        '75% of people working in sweatshops are women. Many have children and work long hours for little pay, meaning their children see very little of their mothers and cannot be sent to school due to lack of money.',
        'In Cambodia, 300+ garment workers were sacked after demanding their right to a living wage. A study showed workers received just $38 over a month when $60 was required to support themselves.',
        'Less than 1% of total revenue received from a garment is shared between those who made it — illustrating the extreme value capture by TNCs at the top of the supply chain.',
        'Young women selling GAP children\'s clothes have been arbitrarily fired and denied paid maternity leave. A 20-year-old woman lost her 7-month-old baby after being forced to work 100+ hour weeks while working on GAP jeans.',

        '--- BHOPAL DISASTER — UNION CARBIDE (1984) ---',
        'In December 1984, over 500,000 people were exposed to Methyl Isocyanate (MIC) gas and other chemicals at the Union Carbide pesticide plant in Bhopal, India. The immediate death toll was 2,200, but a government report later confirmed 3,800 deaths related to the gas leak.',
        'Other estimates suggest 8,000 died within 2 weeks and a further 8,000 over the following years. A 2006 government document stated the leak caused 550,000 injuries, of which 40,000 were partially disabling and 4,000 were permanent and severe.',
        'Short-term impacts of Bhopal: initial effects included coughing, vomiting, severe eye irritation and suffocation. Children and shorter people inhaled higher concentrations (200,000 children were exposed). Many people were trampled trying to escape. 17,000 people were treated in hospitals.',
        'Environmental aftermath of Bhopal: bodies were dumped into the Narmada River. 2,000 buffalo, goats and other animals were collected and buried. Within days, leaves yellowed and fell off trees. Fishing became prohibited. The MIC and Sevin plants remain, with isolation material continuing to fall and spread.',
        'Environmental legacy of Bhopal: the area around the plant was used for dumping hazardous chemicals. In 1982, wells near the plant had to be abandoned. In 1989, soil and water samples near and inside the plant were found to be toxic to fish. Soil and groundwater remain polluted.',
        'Safety failures at Bhopal: MIC tank alarms had not been working for 4 years and had only 1 manual backup system (compared to a 4-stage safety system used in the US). The flare tower could only handle 1/4 of the gas that leaked and was out of order at the time. MIC was stored at 20°C when the manual advised 4.5°C. Carbon steel valves corroded when exposed to acid.',
        'Bhopal punishment: In 1986, UCC proposed a settlement of $350 million. In 1989, an out-of-court settlement of $470 million was agreed — just 15% of the original $3 billion claim. By 2003, compensation was awarded to 550,000 injured people and 15,300 families of victims who died — averaging just $2,200 per family.',
      ],
    },

    // ====================================================
    // SECTION 3 — EQ3: Consequences for Development & Environment
    // ====================================================
    {
      id: 'glob-eq3',
      title: 'EQ3: What are the consequences of globalisation for the global commons and the development gap?',

      keyTerms: [
        { term: 'Development gap', def: 'The difference in standards of living and economic development between the richest and poorest countries. Measured using GDP per capita, HDI, literacy rates, life expectancy, etc.' },
        { term: 'Modernisation theory', def: 'W.W. Rostow\'s (1960) model suggesting all countries pass through five stages of economic development: traditional society, preconditions for take-off, take-off, drive to maturity, and age of high mass consumption.' },
        { term: 'Dependency theory', def: 'Andre Gunder Frank\'s (1967) theory that developing countries remain poor because they are structurally exploited by developed countries through unequal trade, debt, and TNC operations. The "development of underdevelopment".' },
        { term: 'World Systems Theory', def: 'Immanuel Wallerstein\'s (1974) theory dividing the world into core (wealthy, dominant nations), semi-periphery (industrialising nations), and periphery (exploited, resource-exporting nations).' },
        { term: 'Global commons', def: 'Areas and resources beyond national jurisdiction that belong to no single nation: the atmosphere, high seas, Antarctica, and outer space. Their management requires international cooperation.' },
        { term: 'Tragedy of the commons', def: 'Garrett Hardin\'s (1968) concept that shared resources are overexploited when individuals act in their own self-interest rather than the common good.' },
        { term: 'Ethical consumption', def: 'Making purchasing choices based on social, environmental, and ethical considerations. Includes buying Fair Trade, organic, locally sourced, and sustainably produced goods.' },
        { term: 'Fair Trade', def: 'A trading partnership that aims to achieve greater equity in international trade by offering better trading conditions and rights to marginalised producers in LICs. Guarantees a minimum price and a Fair Trade premium for community investment.' },
        { term: 'CSR (Corporate Social Responsibility)', def: 'A business model where companies integrate social and environmental concerns into their operations and interactions with stakeholders. Can range from genuine commitment to greenwashing.' },
        { term: 'Greenwashing', def: 'Companies making misleading claims about environmental benefits of their products or operations to appear more sustainable than they are. E.g. Volkswagen Dieselgate scandal (2015).' },
        { term: 'Structural Adjustment Programme (SAP)', def: 'Conditions imposed by the IMF and World Bank on developing countries receiving loans, typically requiring privatisation, deregulation, reduced government spending, and trade liberalisation. Heavily criticised for increasing poverty.' },
        { term: 'Debt-trap diplomacy', def: 'A controversial term describing a situation where a creditor country (e.g. China) extends excessive credit to a debtor country, then uses the resulting debt to gain political or economic concessions. Associated with China\'s Belt and Road Initiative.' },
        { term: 'Neo-colonialism', def: 'The use of economic, political, or cultural pressures to control or influence other countries, especially former colonies. Critics argue that TNCs, international organisations, and powerful nations perpetuate colonial-era exploitation.' },
        { term: 'Sustainable Development Goals (SDGs)', def: 'The 17 goals adopted by the UN in 2015 to end poverty, protect the planet, and ensure prosperity for all by 2030. Include goals on poverty, hunger, health, education, gender equality, clean energy, and climate action.' },
        { term: 'Paris Climate Agreement', def: 'A 2015 international treaty signed by 196 parties, aiming to limit global warming to well below 2°C above pre-industrial levels, with efforts to limit to 1.5°C. Countries submit Nationally Determined Contributions (NDCs).' },
        { term: 'Slowbalisation', def: 'The slowing of globalisation since the 2008 financial crisis, driven by rising protectionism, political nationalism (Brexit, Trump tariffs), pandemic supply chain disruptions, and geopolitical tensions.' },
        { term: 'Reshoring', def: 'The process of returning manufacturing or services back to a company\'s home country, reversing offshoring. Accelerated by COVID-19 supply chain disruptions and geopolitical concerns about reliance on China.' },
        { term: 'Local multiplier effect', def: 'According to the New Economics Foundation (NEF), every £1 spent locally generates £1.76 for the local economy, versus £0.36 when spent at a supermarket. Supports the case for buying local over global.' },
        { term: 'Transition town', def: 'A grassroots community project that aims to increase self-sufficiency to reduce the effects of peak oil, climate change, and economic instability. Totnes in Devon was the first transition town (2006).' },
      ],

      notes: [
        'Development theories explain globalisation\'s impact differently: Modernisation theory (Rostow) sees globalisation as enabling LICs to develop through stages. Dependency theory (Frank) sees it as perpetuating exploitation. World Systems Theory (Wallerstein) sees a structural core-semi-periphery-periphery hierarchy.',
        'The development gap persists: The richest 20% of the world\'s population earn 83% of global income. Life expectancy ranges from 84 years (Japan) to 53 years (Central African Republic). HDI ranges from 0.957 (Switzerland) to 0.394 (South Sudan).',
        'Globalisation and the environment: International shipping produces 2.5% of global CO2. Aviation produces 2.4% and is growing. Fast fashion generates 92 million tonnes of waste annually. The global commons (atmosphere, oceans, Antarctica) are under increasing pressure from economic growth.',
        'The Rana Plaza collapse (2013) in Bangladesh killed 1,134 people. It exposed the dangerous conditions in the garment industry supplying Western brands including Primark, Benetton, and Walmart. It led to the Accord on Fire and Building Safety, signed by 200+ brands.',
        'Fair Trade: Involves 1.7 million farmers and workers in 75 countries. Fair Trade-certified products generated $11.2 billion in sales (2020). Guarantees a minimum price plus a premium for community investment. Examples include Divine Chocolate (co-owned by Ghanaian cocoa farmers) and Cafedirect coffee.',
        'Anti-globalisation movements: The Battle of Seattle (1999 WTO protests) drew 40,000 protesters. Occupy Wall Street (2011) highlighted the "1% vs 99%" wealth divide. Extinction Rebellion (2018) targets environmental destruction linked to global capitalism.',
        'Responses to globalisation: The UN SDGs (2015) set 17 targets for 2030. The Paris Climate Agreement (2015) aims to limit warming to 1.5-2°C. Fair Trade and ethical consumption movements are growing. Transition towns promote local self-sufficiency.',
        'Greenwashing is a major concern: Volkswagen\'s Dieselgate scandal (2015) involved cheating emissions tests on 11 million vehicles. Many TNCs publish CSR reports while continuing harmful practices. Shell was ordered by a Dutch court (2021) to cut emissions by 45% by 2030.',
        'The local multiplier effect (NEF): Every £1 spent locally generates £1.76 for the local economy vs £0.36 at a supermarket. Supports arguments for buying local, supporting small businesses, and resisting TNC dominance.',
        'Slowbalisation: Since 2008, global trade growth has slowed. Brexit (2016), Trump tariffs on China (2018), COVID-19 (2020), and the Russia-Ukraine war (2022) have disrupted global supply chains. Some companies are reshoring production closer to home markets.',
        'World Systems Theory (Wallerstein, 1974) and globalisation: Core countries (USA, UK, Japan, Germany) dominate global trade, finance, and technology. Semi-periphery countries (China, Brazil, India) industrialise but remain dependent on core markets. Periphery countries (many in Sub-Saharan Africa) export raw materials and cheap labour, capturing minimal value. The theory explains persistent global inequality despite decades of globalisation.',
        'Dependency theory in practice — cocoa production: Ivory Coast and Ghana produce 60% of the world\'s cocoa but capture only 6% of the $130 billion global chocolate industry\'s value. Cocoa farmers earn $1-2/day while TNCs like Mars, Nestlé, and Mondelez control processing, branding, and retail. This exemplifies Frank\'s "development of underdevelopment".',
        'The global commons under pressure: The high seas (64% of the ocean surface) are largely unregulated — only 1.2% is protected. Illegal, unreported, and unregulated (IUU) fishing costs $23 billion annually. Antarctica faces increasing tourism (74,000 visitors in 2019-20 season) and geopolitical competition for resources despite the Antarctic Treaty (1959). The atmosphere absorbs 36 billion tonnes of CO2 annually from fossil fuels.',
        'China\'s Belt and Road Initiative (BRI) as neo-colonialism debate: Supporters argue it fills a $26 trillion infrastructure gap in developing Asia. Critics cite Sri Lanka\'s Hambantota Port (leased to China for 99 years after debt default) and Zambia\'s alleged pledge of its electricity company as collateral. The BRI involves 140+ countries and $1 trillion+ investment — it is reshaping global economic geography.',
        'Ethical consumption and its limitations: Fair Trade sales reached $11.2 billion (2020), but this represents only 2-5% of global coffee trade. The Fairtrade minimum price for coffee is $1.40/lb — helpful but modest. Ethical consumers tend to be middle-class HICs residents. The New Economics Foundation\'s local multiplier effect (\u00a31 spent locally = \u00a31.76 for the local economy vs \u00a30.36 at supermarkets) supports buying local.',
        'Corporate greenwashing examples: Volkswagen\'s Dieselgate (2015) — cheated emissions tests on 11 million vehicles. BP rebranded as "Beyond Petroleum" while remaining one of the world\'s largest fossil fuel companies. Shell was ordered by a Dutch court (2021) to cut emissions 45% by 2030. H&M\'s "Conscious Collection" was accused of misleading sustainability claims by the Norwegian Consumer Authority.',
        'Reshoring and nearshoring trends: COVID-19 exposed the fragility of global supply chains — semiconductor shortages halted car production worldwide. The US CHIPS Act (2022) allocated $52 billion to bring semiconductor manufacturing back to America. The EU\'s European Chips Act committed \u20AC43 billion. Apple began manufacturing some products in India and Vietnam as part of "China Plus One" diversification.',
        'The Paris Agreement and global commons governance: 196 parties signed the 2015 agreement aiming to limit warming to 1.5-2\u00b0C. However, current national pledges (NDCs) put the world on track for 2.5-2.9\u00b0C warming. The USA withdrew under Trump (2017), rejoined under Biden (2021). The loss and damage fund agreed at COP27 (2022) addresses climate justice for vulnerable nations.',
        'Transition towns as a local response: Totnes (Devon) became the first transition town in 2006, promoting local food production, renewable energy, and community resilience. The movement has spread to 1,300+ initiatives in 50+ countries. Transition towns challenge the globalisation model by prioritising local self-sufficiency, but critics argue they cannot address systemic global inequalities.',
        'Evaluation point for essays: The development gap is both a cause and consequence of globalisation. LICs are integrated into global markets on unfavourable terms (raw material exporters, cheap labour providers), which perpetuates their disadvantaged position. However, some countries (China, South Korea, Vietnam) have used globalisation strategically to industrialise. The key factor is often governance — whether governments can negotiate favourable terms with TNCs and IGOs.',
      ],
    },

    // ====================================================
    // SECTION 4 — CASE STUDIES: TNCs
    // ====================================================
    {
      id: 'glob-cs-tncs',
      title: 'Case Studies: Transnational Corporations (TNCs)',

      keyTerms: [
        { term: 'Apple Inc.', def: 'American TNC headquartered in Cupertino, California. World\'s most valuable company. Designs products in the USA but manufactures primarily in China through contract manufacturers like Foxconn. Revenue of $383 billion (2023).' },
        { term: 'Foxconn (Hon Hai Precision)', def: 'Taiwanese electronics manufacturer and the world\'s largest contract electronics manufacturer. Employs approximately 1.5 million workers, mostly in mainland China. Assembles iPhones, iPads, and products for other major tech companies.' },
        { term: 'Nike Inc.', def: 'American sportswear TNC headquartered in Beaverton, Oregon. Revenue of $51 billion. Does not own any factories — outsources all manufacturing to over 500 contract factories in 40+ countries, primarily Vietnam, Indonesia, and China.' },
        { term: 'Walmart', def: 'American retail TNC and the world\'s largest company by revenue ($611 billion, 2023). Largest private employer globally with 2.1 million employees. Owns ASDA in the UK (sold majority stake to Issa brothers in 2021). Supply chains span Bangladesh, China, and dozens of other LICs.' },
        { term: 'Corporate tax avoidance', def: 'Legal strategies used by TNCs to minimise tax payments by routing profits through low-tax jurisdictions. Apple used Ireland as a base, paying as little as 0.005% tax on European profits. The EU ordered Apple to pay €13 billion in back taxes in 2016.' },
        { term: 'Suicide nets', def: 'Physical nets installed around Foxconn factory buildings in Shenzhen, China, after a spate of worker suicides in 2010. At least 14 workers attempted suicide that year, drawing global attention to labour conditions in electronics manufacturing.' },
      ],

      notes: [
        '--- APPLE (TNC Case Study) ---',
        'Apple is headquartered in Cupertino, California, USA. It is one of the world\'s most valuable companies, with a market capitalisation exceeding $3 trillion and revenue of $383 billion in 2023.',
        'Apple exemplifies the "smile curve" — it captures enormous value at the design/R&D stage (in California) and the marketing/retail stage, while the low-value manufacturing/assembly stage is outsourced to contractors in China and other countries.',
        'Apple\'s supply chain spans 43+ countries. Components come from: South Korea (Samsung — screens, memory chips), Japan (Sony — camera sensors, TDK — battery components), Taiwan (TSMC — processors), China (assembly), USA (design, software), and many others.',
        'Foxconn (Hon Hai Precision Industry), a Taiwanese company, is Apple\'s primary assembly partner. Foxconn employs approximately 1.5 million workers globally, with the majority in mainland China. Its largest facility in Zhengzhou, China, employs over 300,000 workers and can produce 500,000 iPhones per day.',
        'Working conditions at Foxconn have drawn major criticism: workers reported 60-80 hour weeks (exceeding the legal limit), low wages (around $2/hour), military-style discipline, and cramped dormitory living conditions. In 2010, at least 14 workers attempted suicide at Foxconn\'s Shenzhen facility, leading to the installation of "suicide nets" around buildings.',
        'Following the 2010 suicides, Foxconn raised wages by 30%, Apple commissioned independent audits, and the Fair Labor Association was invited to inspect factories. However, critics argue conditions remain poor and audits are often superficial.',
        'Apple\'s tax practices have been heavily scrutinised. Apple routed European profits through subsidiaries in Ireland, where it negotiated a special tax deal paying as little as 0.005% tax on European profits. In 2016, the EU ordered Apple to pay €13 billion in back taxes to Ireland. Apple\'s "Double Irish" arrangement allowed it to shift billions in profits to low-tax jurisdictions.',
        'Positive impacts of Apple: Creates high-skilled jobs in the USA (over 90,000 direct employees plus 450,000+ in the app economy). Investment in renewable energy (100% of Apple facilities run on renewable energy). Supplier Responsibility Programme has improved conditions for millions of workers.',
        'Negative impacts of Apple: Exploitation of cheap labour in China, tax avoidance deprives governments of revenue, planned obsolescence creates e-waste, conflict minerals (cobalt, tantalum) sourced from DRC where child labour is used in artisanal mining.',
        'Apple\'s assembly in Shenzhen benefits from the Shenzhen Special Economic Zone, established in 1980. Shenzhen grew from a fishing village of 30,000 to a megacity of 17+ million, largely driven by electronics manufacturing for global TNCs.',

        '--- NIKE (TNC Case Study) ---',
        'Nike is headquartered in Beaverton, Oregon, USA. It is the world\'s largest sportswear company with revenue of approximately $51 billion. Nike employs about 79,000 people directly but its supply chain involves over 1 million contract workers.',
        'Nike does not own any factories. It outsources all manufacturing to over 500 contract factories in 40+ countries. The main manufacturing countries are Vietnam (50% of footwear), Indonesia (24%), and China (21%).',
        'The Nike sweatshop scandal (1990s): In the early 1990s, investigative journalists and NGOs exposed appalling conditions in Nike\'s supplier factories. Workers (many of them young women) in Indonesia earned as little as $1.25/day, worked 70+ hour weeks, and faced physical abuse from supervisors.',
        'In 1996, Life magazine published a photo of a Pakistani child sewing Nike footballs, causing global outrage. Phil Knight (Nike CEO) initially denied responsibility, arguing Nike did not own the factories. Public boycotts and protests followed.',
        'Nike\'s CSR transformation post-scandal: Under intense pressure, Nike became an industry leader in CSR. It published its full factory list (2005), became the first major brand to do so. It raised minimum age requirements, invested in factory monitoring, and joined the Fair Labor Association.',
        'Nike now publishes annual Impact Reports covering labour practices, environmental targets, and community investment. It has committed to 100% renewable energy in owned/operated facilities by 2025 and reduced manufacturing waste sent to landfill by 95% since 2010.',
        'However, critics argue Nike\'s CSR improvements are limited: contract factory workers still earn poverty wages (average $3-5/day in Vietnam), overtime remains excessive, and the power imbalance between Nike and suppliers means factories absorb cost pressures.',
        'Nike illustrates the NIDL (New International Division of Labour): high-value design, marketing, and R&D in the USA ($150-$250 retail shoes), low-value manufacturing in LICs (factory cost of a $170 shoe is approximately $28, with workers earning about $2-3 of that).',

        '--- WALMART / ASDA (TNC Case Study) ---',
        'Walmart is the world\'s largest company by revenue ($611 billion in 2023) and the largest private employer globally with approximately 2.1 million employees across 10,500 stores in 19 countries.',
        'Walmart\'s business model relies on "Everyday Low Prices" (EDLP), achieved through enormous economies of scale, aggressive supplier negotiations, efficient logistics, and sourcing from low-cost countries like Bangladesh, China, Vietnam, and Honduras.',
        'Walmart\'s supply chain: It sources products from 100+ countries. Its distribution network includes 150+ distribution centres in the USA alone. It uses advanced logistics technology including AI-driven demand forecasting and a private satellite communication system.',
        'Labour concerns: Walmart has faced repeated criticism for low wages (many US employees earn below the living wage and rely on government welfare programmes), anti-union practices (it has closed stores to prevent unionisation), and poor working conditions in supplier factories.',
        'Walmart and the Rana Plaza connection: Walmart was one of the brands sourcing from Bangladesh garment factories. Despite initially refusing to sign the Accord on Fire and Building Safety, Walmart eventually developed its own factory inspection programme. Critics argued this was insufficient and self-serving.',
        'ASDA (owned by Walmart until 2021, then sold to the Issa brothers/TDR Capital): Walmart\'s acquisition of ASDA in 1999 for £6.7 billion brought its EDLP model to the UK, intensifying competition and putting pressure on UK suppliers and competitors.',
        'Positive impacts: Walmart provides affordable goods for low-income consumers, creates significant employment (2.1 million jobs), invests in supply chain efficiency reducing food waste, and has committed to sustainability goals (Project Gigaton aims to reduce supply chain emissions by 1 billion tonnes by 2030).',
        'Negative impacts: Walmart destroys local businesses ("the Walmart effect"), pays poverty wages, creates "food deserts" when it undercuts and closes local grocers, contributes to long-distance supply chains with high carbon footprints, and has been linked to poor conditions in supplier factories.',

        '--- UNILEVER (TNC Case Study) ---',
        'Unilever is an Anglo-Dutch TNC headquartered in London, with revenue of approximately \u20AC60 billion (2022). It owns 400+ brands sold in 190 countries, including Dove, Lipton, Ben & Jerry\'s, Hellmann\'s, Knorr, and Persil. It employs 148,000 people directly.',
        'Unilever\'s Sustainable Living Plan (2010-2020) aimed to halve the environmental footprint of its products, source 100% of agricultural raw materials sustainably, and improve health/wellbeing for 1 billion people. By 2020, it reported 67% of agricultural raw materials sustainably sourced.',
        'Unilever sources from 5.5 million smallholder farmers globally, particularly in tea (Kenya, India), palm oil (Indonesia, Malaysia), and cocoa (West Africa). Its supply chain reaches into some of the world\'s poorest communities.',
        'Unilever and palm oil: Unilever is one of the world\'s largest buyers of palm oil. Palm oil production drives deforestation in Indonesia and Malaysia (responsible for 8% of global deforestation between 1990-2008). Unilever committed to deforestation-free supply chains by 2023 but Greenpeace has repeatedly challenged whether this is being achieved.',
        'Unilever in India — Hindustan Unilever Limited (HUL): India\'s largest FMCG company, reaching 9 out of 10 Indian households. Sells sachets of shampoo and detergent for 1-2 rupees, making products accessible to low-income consumers. This "bottom of the pyramid" strategy generates massive volume but raises questions about plastic waste (billions of unrecyclable sachets).',
        'Unilever illustrates the CSR vs greenwashing debate: its sustainability commitments are among the most ambitious of any TNC, but critics argue they are ultimately about protecting brand value and market share rather than genuine transformation. Ben & Jerry\'s climate activism exists alongside Unilever\'s significant carbon footprint.',
        'Evaluation — comparing TNCs: Apple (tech, high margins, tax avoidance), Nike (sportswear, outsourced manufacturing, CSR transformation after scandal), Walmart (retail, scale, labour issues), and Unilever (FMCG, sustainability ambitions, supply chain complexity) illustrate different TNC models but share common themes: global supply chains, profit repatriation, and tension between shareholder returns and social responsibility.',
        'TNC tax avoidance is a systemic issue: The OECD estimated TNCs shift $100-240 billion in profits annually to low-tax jurisdictions. The 2021 OECD global minimum tax agreement (15% minimum corporate tax for companies with revenue over \u20AC750 million) was signed by 136 countries — a landmark attempt to curb transfer pricing, though implementation remains challenging.',
      ],
    },

    // ====================================================
    // SECTION 5 — CASE STUDIES: Countries & Regions
    // ====================================================
    {
      id: 'glob-cs-countries',
      title: 'Case Studies: Countries, Regions & Global Shift',

      keyTerms: [
        { term: 'Bangalore (Bengaluru)', def: 'India\'s IT capital, home to over 3,500 IT companies including Indian giants like Infosys, Wipro, and TCS, as well as offices of Google, Microsoft, and Amazon. Nicknamed "the Silicon Valley of India".' },
        { term: 'Hawassa Industrial Park', def: 'Ethiopia\'s flagship industrial park, built with Chinese investment and opened in 2017. Focused on textile and garment manufacturing. Employs 30,000+ workers. Part of Ethiopia\'s strategy to attract FDI and industrialise.' },
        { term: 'Belt and Road Initiative (BRI)', def: 'China\'s $1 trillion+ global infrastructure development strategy launched in 2013 by Xi Jinping. Involves building roads, railways, ports, and pipelines across Asia, Africa, Europe, and Latin America. Involves 140+ countries.' },
        { term: 'Debt-trap diplomacy', def: 'The accusation that China deliberately extends excessive loans to developing countries through the BRI, then seizes strategic assets when countries cannot repay. Sri Lanka\'s Hambantota Port is the most cited example — leased to China for 99 years after Sri Lanka defaulted.' },
        { term: 'Deindustrialisation', def: 'The decline of manufacturing in an economy. The UK lost 3.5 million manufacturing jobs between 1970 and 2020. The US Rust Belt (Ohio, Michigan, Pennsylvania) experienced similar decline, with cities like Detroit and Flint devastated.' },
        { term: 'Special Economic Zone (SEZ)', def: 'Designated area with relaxed business regulations and tax incentives to attract FDI. China\'s first four SEZs (Shenzhen, Zhuhai, Shantou, Xiamen) were established in 1980 and catalysed China\'s economic transformation.' },
      ],

      notes: [
        '--- INDIA (Switched-On Country Case Study) ---',
        'India is a key example of a "switched-on" emerging economy that has benefited from globalisation, particularly through IT and service-sector outsourcing. India\'s GDP growth averaged around 7% per year in the 2010s, making it one of the world\'s fastest-growing major economies.',
        'Bangalore (Bengaluru) is India\'s IT hub, home to 3,500+ IT companies. It hosts the Indian headquarters of Google, Microsoft, Amazon, IBM, and many others. Indian IT giants like Infosys (founded 1981, now $18 billion revenue), Wipro, and TCS are headquartered there.',
        'India\'s IT and Business Process Outsourcing (BPO) sector employed over 5 million people directly and 10+ million indirectly by 2023. The sector generates $245 billion in revenue and accounts for approximately 8% of India\'s GDP.',
        'Why India became an IT hub: Large English-speaking, highly educated workforce (1.5 million engineering graduates per year). Labour costs are 60-70% lower than in the USA. Time zone advantage allows 24-hour operations with Western companies. Government investment in IT infrastructure and education (IITs — Indian Institutes of Technology).',
        'Call centres and back-office outsourcing: From the late 1990s, Western companies outsourced customer service, data entry, and technical support to India. Cities like Bangalore, Hyderabad, Pune, and Gurgaon became major BPO centres. This created a new urban middle class.',
        'India\'s rising middle class: India\'s middle class grew from 25 million (1996) to 350+ million (2023). This has driven domestic consumption, urbanisation, and demand for Western goods. India is now the world\'s fifth-largest economy.',
        'However, inequality remains severe: India\'s Gini coefficient is approximately 0.35 (and rising). The top 10% own 77% of national wealth. 228 million Indians still live in extreme poverty (under $1.90/day). Rural areas remain largely "switched off" from globalisation — 65% of India\'s population is rural with limited infrastructure.',
        'Environmental costs: Bangalore faces severe water shortages due to rapid urbanisation. Delhi is regularly the world\'s most polluted city. India\'s rapid industrialisation and growing middle class are increasing carbon emissions (India is the world\'s third-largest CO2 emitter).',
        'India illustrates both the benefits and limitations of globalisation: IT-driven growth created millions of middle-class jobs, but the benefits are concentrated in a few cities and sectors. Agriculture employs 42% of the workforce but generates only 18% of GDP.',

        '--- ETHIOPIA (Emerging Economy Case Study) ---',
        'Ethiopia is an example of an emerging economy attempting to industrialise through FDI, particularly from China. It is Sub-Saharan Africa\'s second most populous country (120+ million people) with GDP growth averaging 9-10% from 2005-2015.',
        'China\'s investment in Ethiopia: China has invested billions in Ethiopian infrastructure, including the Addis Ababa-Djibouti railway ($4 billion, opened 2018), roads, dams (Grand Ethiopian Renaissance Dam), and industrial parks. China is Ethiopia\'s largest source of FDI and largest trading partner.',
        'The Hawassa Industrial Park opened in 2017, built with $250 million of Chinese investment. It spans 130 hectares and focuses on textile and garment manufacturing. Brands including PVH (Calvin Klein, Tommy Hilfiger) and H&M source from factories there. It employs 30,000+ workers.',
        'Ethiopia\'s attraction to FDI: Very low wages (garment workers earn $26-$50/month, among the lowest in the world), a young and growing workforce, government tax incentives (tax holidays, duty-free imports), and proximity to European and Middle Eastern markets.',
        'However, workers at Hawassa and other industrial parks face extremely low wages ($26-$50/month), high turnover rates (up to 100% annually), limited workers\' rights, and poor living conditions. This is significantly less than even Bangladesh ($95/month minimum) and Cambodia ($194/month).',
        'Ethiopia\'s debt burden: Rapid infrastructure borrowing (much from China) pushed Ethiopia\'s national debt to approximately $47 billion by 2020. Ethiopia applied for debt restructuring under the G20 Common Framework in 2021. This illustrates concerns about debt-trap diplomacy.',
        'Challenges facing Ethiopia: Political instability (civil war in Tigray 2020-2022 killed hundreds of thousands), ethnic tensions, limited infrastructure outside major cities, drought and food insecurity (20+ million people needed food aid in 2022), and ongoing governance concerns.',
        'Ethiopia illustrates dependency theory: the country provides cheap labour and raw materials for global TNCs, while most profits flow back to foreign companies. The "value added" in garment assembly is minimal — Ethiopia captures only 2-3% of the final retail price of clothes.',
        'Ethiopia farming crisis: farming accounts for 85% of the workforce and 45% of GDP, yet the agriculture sector is less productive per capita now than 20 years ago. Arable land is overcrowded, over-cultivated and under-maintained. Less than 3% of Ethiopia is forested, and at current rates Ethiopia will be completely deforested in 20 years.',
        'Ethiopia famine vulnerability: over 90% of crops are watered by nature rather than irrigation systems. During droughts, farmers and nomadic herders sell their assets to buy food, meaning they have nothing for the next growing season. It can take 3-5 years for pastoral tribes to rebuild their herds.',
        'Ethiopia rainfall dependency: rainfall is essential for non-irrigated agriculture across most of the country. Areas with low rainfall have high variability in annual rainfall, meaning high risk for farmers. Less than 50% of people have access to a safe water supply.',
        'Ethiopia population and health: huge population growth — 7.7 children per woman in 1993 (down to 4 in 2020). Contraception used by only 5% of illiterate women vs 45% of women with secondary education. Ethiopia holds 1% of world population yet 1.5 million people have HIV — equalling 4% of the world\'s HIV sufferers.',

        '--- CHINA\'S BELT AND ROAD INITIATIVE (BRI) ---',
        'The Belt and Road Initiative (BRI, also known as "One Belt One Road") was launched by President Xi Jinping in 2013. It is the largest infrastructure project in history, with estimated investment of $1 trillion+ across 140+ countries.',
        'The BRI has two main components: the "Silk Road Economic Belt" (overland routes through Central Asia to Europe) and the "21st Century Maritime Silk Road" (sea routes through Southeast Asia, the Indian Ocean, and East Africa).',
        'Key BRI projects include: the China-Pakistan Economic Corridor ($62 billion — roads, rail, energy), Hambantota Port in Sri Lanka ($1.1 billion), the Addis Ababa-Djibouti Railway ($4 billion), Piraeus Port in Greece (acquired by Chinese state firm COSCO), and the Jakarta-Bandung high-speed railway.',
        'Arguments FOR the BRI: fills a massive global infrastructure gap (the Asian Development Bank estimates $26 trillion needed by 2030), creates trade routes and connectivity, provides financing when Western institutions have conditions/bureaucracy, builds infrastructure in countries that desperately need it.',
        'Arguments AGAINST the BRI (debt-trap diplomacy): Sri Lanka defaulted on loans and leased Hambantota Port to China for 99 years. Zambia reportedly pledged its national electricity company as collateral. Pakistan, Laos, and several African nations face unsustainable BRI debt.',
        'The BRI is described by critics as neo-colonialism: China extracts resources (oil, minerals, agricultural land), employs Chinese rather than local workers on many projects, builds infrastructure that primarily serves Chinese trade interests, and gains geopolitical influence through debt leverage.',
        'Supporters argue the BRI is mutually beneficial: it provides infrastructure that accelerates development, creates construction jobs, connects landlocked countries to global trade, and offers an alternative to Western-dominated financial institutions (IMF/World Bank).',

        '--- CHINA GLOBAL SHIFT — PROS (Detailed) ---',
        'China\'s infrastructure: developed the world\'s largest highway network and a rail system of 100,000km. Its HSR doubled in length in the past decade, linking Beijing, Guangzhou, Shenzhen and Shanghai. Shanghai\'s maglev is the world\'s fastest train at 270km/h. 82 airports have been built, bringing the total to 250, with 8 of the world\'s top 12 airports in freight tonnage.',
        'China\'s manufacturing dominance: China produces 1/2 of the world\'s clothes and microwaves, 2/3 of all shoes and photocopiers, and 1/3 of all mobile phones. The Chinese economy has averaged 9.2% growth per year for the past 30 years.',
        'China\'s poverty reduction: 900 million people have been taken out of poverty between 1980 and 2020. Over 300 million people are now considered middle class (equal to the entire US population). Those living on less than $1/day reduced to under 6% of the population.',
        'China\'s urban incomes: urban incomes have risen by 12% since 2006, now averaging $19,000 per year. Significant improvements in working conditions with typical jobs having 40-hour work weeks, paid holiday and travel expenses to visit family in rural areas.',
        'China\'s education improvements: education is free and compulsory between ages 6-15. 94% of 15-year-olds are literate (up from 20% in 1950). 7.2 million new university graduates in 2020 (15x higher than 2015). However, there is a spending gap: $4,000 per pupil in urban areas vs just $350 per pupil in rural areas.',

        '--- CHINA GLOBAL SHIFT — CONS (Detailed) ---',
        'China\'s pollution: Beijing experiences frequent pollution alerts from coal-fired power stations. 70% of rivers and lakes are polluted. Water in 207 of the Yangtze\'s tributaries is not even fit for irrigation. 100 cities suffer from extreme water shortages and 360 million people lack access to safe drinking water.',
        'China\'s acid rain problem: 30% of China experiences acid rain (50% of cities). The cost of acid rain — health, farming losses, environmental management — totals $13 billion per year. Chongqing tap water contains 80 of 1,010 forbidden toxins under Chinese law.',
        'China\'s resource over-exploitation: resources do not match demand, so the Chinese government has sought additional resources in Africa and Latin America. The Amazon rainforest has been cleared in Ecuador for soya farming. Venezuela has agreed to drill in the rainforest for Chinese demand. China is in a long-running dispute over mineral rights in Greenland via Denmark.',
        'China\'s land degradation: China has 22% of the world\'s population yet only 6.4% of land and 7.2% of farmland. 40% of farmland suffers from degradation due to urbanisation and industrialisation. Over 3 million hectares of arable farmland is polluted by heavy metals (12 million tonnes of grain was polluted in 2014 alone).',
        'China\'s biodiversity loss: in 2015, WWF found China\'s terrestrial vertebrates had declined by 50% since 1970. WWF tracked over 2,400 populations of 700 animals and found that half had vanished in 45 years.',

        '--- GLOBAL SHIFT (Manufacturing Shift to Asia) ---',
        'The global shift describes the large-scale movement of manufacturing from Europe and North America to East and Southeast Asia since the 1970s. By 2010, China alone produced 25% of the world\'s manufactured goods.',
        'Key phases of the global shift: Japan industrialised first (1950s-1970s), followed by the "Asian Tigers" (South Korea, Taiwan, Hong Kong, Singapore — 1970s-1990s), then China (1980s-present), and now newer destinations like Vietnam, Bangladesh, Cambodia, and Ethiopia.',
        'Why manufacturing shifted: much lower labour costs (Chinese factory workers earned $1-2/hour vs $25-30/hour in the USA), fewer environmental regulations, weaker labour protections, government incentives (SEZs, tax holidays), and improving infrastructure and education.',
        'Deindustrialisation in the UK and USA: The UK lost 3.5 million manufacturing jobs between 1970 and 2020. Manufacturing fell from 25% of UK GDP to under 10%. Cities like Sheffield (steel), Birmingham (cars), and Sunderland (shipbuilding) were devastated. Social consequences included unemployment, poverty, depopulation, and health decline.',
        'The US "Rust Belt" experienced similar decline: Detroit\'s population fell from 1.8 million (1950) to 640,000 (2020). General Motors, Ford, and Chrysler cut hundreds of thousands of jobs. The region saw rising opioid addiction, crime, and political disillusionment — contributing to Trump\'s election in 2016.',
        'However, the global shift also created new opportunities in HICs: the growth of the service sector (financial services in London, tech in Silicon Valley), the creative and knowledge economies, and some reshoring of advanced manufacturing (e.g. Tesla\'s Gigafactories).',

        '--- LEICESTER DEINDUSTRIALISATION CASE STUDY ---',
        'Leicester deindustrialisation: in the 1920s, over 300,000 were employed in the textile mills, selling clothes across the UK and the British Empire. By the 1960s, textiles was still booming — all M&S knitwear was made in Leicester, and some factories employed over 6,000 staff.',
        'Leicester in the 1960s: demand for workers kept rising, bringing immigrants from India, Pakistan and Uganda to Leicester in search of work. By the 1980s, Leicester saw a huge decline in manufacturing as clothes could be manufactured in China and exported to the UK much more cheaply.',
        'Social impacts of UK deindustrialisation: there is a lack of investment and training to reskill workers, with many blaming governments for focusing investment on London. A lack of opportunities results in increased levels of crime, religious extremism and far-right groups.',
        'Economic impacts of UK deindustrialisation: derelict buildings created by the global shift are expensive to demolish and difficult to access. Reduced employment results in lower tax revenue in the UK\'s poorest areas, meaning there is no money for reinvestment.',
        'Environmental impacts of UK deindustrialisation: much of the derelict industrial land is contaminated from previous dumping of chemical waste, making redevelopment costly and complex.',

        '--- AUSTRALIA AND GLOBALISATION ---',
        'Australia has been a major winner from globalisation. Since 1970, its exports-to-imports ratio has risen by over 20%. A government report estimated that globalisation had created 400,000+ jobs in the past decade in Australia.',
        'Benefits of globalisation for Australia: the free market has created new economic possibilities such as tribal art exportation, and Australia\'s resources sector has benefited enormously from Chinese demand for iron ore and coal.',
        'Drawbacks of globalisation for Australia: Aboriginal people are highly disadvantaged. The welfare system in rural Aboriginal areas has been underfunded for decades. Vast areas of Aboriginal land have been sold to TNCs for mining and agriculture.',
        'Cultural impact on Aboriginal Australians: the spread of English as the language of globalisation has severely reduced the odds of Aboriginal communities being able to keep their languages alive, threatening indigenous cultural heritage.',
        'The global shift is now evolving: as wages rise in China, production is shifting to cheaper locations (Vietnam, Bangladesh, Ethiopia). This is sometimes called the "China Plus One" strategy — companies diversifying supply chains beyond China, accelerated by COVID-19 and US-China trade tensions.',
        'Vietnam as the next manufacturing hub: Vietnam\'s exports grew from $15 billion (2001) to $371 billion (2022). Samsung\'s largest smartphone factory is in Vietnam (employing 100,000 workers). Nike produces 50% of its footwear in Vietnam. Vietnam\'s membership of ASEAN and multiple free trade agreements (including with the EU in 2020) make it attractive to TNCs.',
        'Bangladesh garment industry: World\'s second-largest garment exporter after China, with 4,500+ factories employing 4 million workers (80% women). Garments account for 84% of total exports. Minimum wage was $113/month (2023) — still among the lowest globally. The industry illustrates both the opportunities and exploitation of the global shift.',
        'The UK\'s post-industrial transformation: Sheffield transitioned from steel (employment fell from 50,000 to 2,000) to the Advanced Manufacturing Research Centre (AMRC), a partnership with Boeing and Rolls-Royce. Manchester transformed from "Cottonopolis" to a media hub (MediaCityUK, BBC, ITV). These show how some deindustrialised places reinvented themselves, though benefits are unevenly distributed.',
        'ASEAN as a rising trade bloc: 10 member states with combined GDP of $3.6 trillion and 660 million people. The ASEAN Economic Community (2015) aims to create a single market. ASEAN is now a major destination for the global shift — particularly Vietnam, Indonesia, Thailand, and the Philippines. The Regional Comprehensive Economic Partnership (RCEP, 2022) created the world\'s largest trade bloc by population.',
        'EU trade bloc impacts: The EU single market generates an estimated 9% GDP increase for member states. The Common Agricultural Policy (CAP) subsidises European farmers (\u20AC55 billion/year) but is criticised for dumping cheap produce in African markets, undermining local farmers. The EU\'s trade deals with developing countries (Everything But Arms initiative) aim to help LICs but are contested.',
        'USMCA/NAFTA impacts: NAFTA (1994) tripled trade between USA, Canada, and Mexico. Maquiladoras (assembly plants) in northern Mexico employed 1.3 million workers by 2020. However, US manufacturing employment fell by 5 million jobs between 1997-2020 (though automation was also a major factor). USMCA (2020) added stricter labour and environmental standards.',
        'The role of sovereign wealth funds and state capitalism: China\'s state-owned enterprises (SOEs) account for 30% of GDP. Singapore\'s Temasek Holdings manages $297 billion. Gulf states (UAE, Saudi Arabia, Qatar) invest oil revenues globally. This "state capitalism" challenges the neoliberal model of globalisation driven by private TNCs.',
        'Evaluation point: The global shift is not simply about cheap labour — it requires infrastructure, political stability, a skilled workforce, and government policy that attracts FDI. Countries like South Korea and China used strategic industrial policy (protecting infant industries, investing in education, building infrastructure) to move up the value chain, while others remain trapped in low-value manufacturing.',
      ],
    },

    // ====================================================
    // SECTION 6 — CASE STUDIES: Events & Movements
    // ====================================================
    {
      id: 'glob-cs-events',
      title: 'Case Studies: Key Events, Movements & Debates',

      keyTerms: [
        { term: 'Rana Plaza', def: 'An eight-storey commercial building in Savar, Bangladesh, that collapsed on 24 April 2013, killing 1,134 garment workers and injuring 2,500+. The deadliest garment factory disaster in history. The building housed factories supplying Primark, Benetton, Walmart, and other Western brands.' },
        { term: 'Accord on Fire and Building Safety', def: 'A legally binding agreement signed by 200+ brands and retailers after the Rana Plaza disaster to improve factory safety in Bangladesh. Funded independent inspections, required remediation of unsafe buildings, and empowered workers to refuse dangerous work.' },
        { term: 'Fair Trade', def: 'A global movement and certification system ensuring producers in developing countries receive fair prices, decent working conditions, and a premium for community development. Covers coffee, cocoa, tea, bananas, cotton, and other products.' },
        { term: 'Transition town', def: 'A community-led initiative for local sustainability and self-sufficiency. Totnes (Devon, UK) became the first transition town in 2006. The movement now includes 1,300+ initiatives in 50+ countries.' },
        { term: 'Remittances', def: 'Money sent by migrant workers to their families in their home country. Worth $540 billion to developing countries annually (2020), more than three times the total of foreign aid.' },
        { term: 'A8 migration', def: 'The migration from the eight Eastern European countries (Poland, Czech Republic, Hungary, etc.) that joined the EU in 2004. The UK was one of only three countries (with Ireland and Sweden) to allow immediate free movement, leading to significant Polish migration.' },
      ],

      notes: [
        '--- RANA PLAZA COLLAPSE (2013) ---',
        'On 24 April 2013, the Rana Plaza building in Savar, near Dhaka, Bangladesh, collapsed, killing 1,134 garment workers and injuring 2,500+. It was the deadliest garment factory disaster in history.',
        'The eight-storey building contained five garment factories employing approximately 5,000 workers, mainly young women. The factories produced clothes for Western brands including Primark, Benetton, Matalan, Walmart, and Mango.',
        'The day before the collapse, cracks appeared in the building. A bank and shops on the lower floors were evacuated, but garment workers were ordered to return to work by factory managers who threatened to withhold a month\'s wages. The building collapsed the next morning during the shift change.',
        'Root causes: The building had been constructed on a filled-in pond with weak foundations. Three upper floors had been illegally added. Heavy generators on the roof created vibrations that worsened structural cracks. Building inspectors had been bribed, and safety regulations were not enforced.',
        'Why Bangladesh? Bangladesh is the world\'s second-largest garment exporter (after China), with 4,500+ factories employing 4 million workers (80% women). Garment exports account for 84% of Bangladesh\'s total exports. Workers earned as little as $38/month (2013), among the lowest in the world.',
        'Aftermath — The Accord on Fire and Building Safety in Bangladesh was signed by over 200 brands and retailers. It was legally binding, funded independent factory inspections, identified 100,000+ safety hazards, and required remediation. It was renewed as the International Accord in 2021.',
        'Other responses: Bangladesh raised the minimum wage for garment workers from $38 to $68/month (2013), then to $95/month (2019), and $113/month (2023). However, the Clean Clothes Campaign and unions argue this is still far below a living wage.',
        'Rana Plaza illustrates: the "race to the bottom" in global supply chains, the disconnect between Western brands and factory conditions, the exploitation of female workers, weak governance in LICs, and the need for legally binding (not voluntary) safety agreements.',
        'Broader context: Before Rana Plaza, the Tazreen Fashion factory fire (November 2012) killed 117 workers in Bangladesh. The Ali Enterprises factory fire in Karachi, Pakistan (September 2012) killed 289 workers. These tragedies highlight systemic issues in global garment supply chains.',

        '--- FAIR TRADE MOVEMENT ---',
        'Fair Trade is a global movement that guarantees producers in developing countries receive: a Fair Trade minimum price (a floor price that covers sustainable production costs), a Fair Trade premium (an additional sum for community development projects), and decent working conditions.',
        'Fair Trade covers products including coffee, cocoa, tea, bananas, sugar, cotton, flowers, and wine. Global Fair Trade sales reached $11.2 billion in 2020. There are 1.7 million farmers and workers in Fair Trade organisations across 75 countries.',
        'Case study — Fair Trade coffee in Kenya: Kenyan coffee farmers selling through Fair Trade cooperatives receive a guaranteed minimum price that protects them from global price crashes. The premium has funded schools, clean water wells, and healthcare clinics. The Meru Herbs cooperative in Kenya exports Fair Trade herbal teas directly to European markets.',
        'Case study — Fair Trade bananas in the Windward Islands: Banana farmers in St Lucia, Dominica, and St Vincent in the Caribbean face competition from massive Latin American plantations (Dole, Chiquita). Fair Trade certification gives them a premium and guaranteed prices, keeping small-scale farming viable. The Fair Trade premium has funded hurricane-resistant housing and irrigation systems.',
        'Case study — Divine Chocolate: Established in 1998, Divine Chocolate is co-owned by the Kuapa Kokoo cooperative of 100,000+ cocoa farmers in Ghana. Farmers receive Fair Trade prices, a share of profits, and representation on the company board. Cadbury made Dairy Milk Fair Trade in 2009 (later switched to Cocoa Life programme — criticised as weaker than Fair Trade).',
        'Criticisms of Fair Trade: Only 2-5% of coffee traded is Fair Trade, so most farmers are excluded. The premium is small (often $0.20/lb for coffee). Certification costs can exclude the poorest farmers. Supermarkets may absorb much of the premium rather than passing it to producers. Some argue it creates dependency rather than structural change.',
        'Despite limitations, Fair Trade has raised global awareness about trade justice, improved conditions for millions of producers, and demonstrated that ethical consumption can work. It represents a "bottom-up" approach to managing globalisation\'s impacts.',

        '--- CULTURAL GLOBALISATION ---',
        'Cultural globalisation refers to the spread and exchange of cultural ideas, values, and practices across the world. Critics argue it leads to cultural homogenisation (the spread of a single, dominant culture), while supporters see it as cultural hybridisation (the blending and enrichment of cultures).',
        'McDonaldisation (George Ritzer, 1993): The process by which society adopts the characteristics of a fast-food restaurant — efficiency, calculability, predictability, and control. McDonald\'s operates in 120+ countries with 40,000+ restaurants, serving 69 million customers daily. It represents the standardisation of global culture.',
        'Coca-colonisation: Coca-Cola is sold in 200+ countries, with only Cuba and North Korea as notable exceptions. Its global advertising creates shared consumer culture. The term highlights how American brands and values spread through commercial products and media.',
        'Glocalisation as a response: TNCs adapt products to local markets. McDonald\'s serves McAloo Tikki (potato burger) in India, Teriyaki McBurger in Japan, McArabia in the Middle East. IKEA sells different furniture sizes for Japanese vs American markets. This shows adaptation rather than pure homogenisation.',
        'Cultural erosion concerns: Indigenous languages are dying (one language is lost every two weeks). Traditional crafts, farming practices, and local cuisines are displaced by mass-produced alternatives. Small local shops are replaced by global chains. Hollywood dominates global box offices, reducing the market for local films.',
        'However, cultural globalisation is not one-directional: Korean pop (K-pop, BTS, Blackpink) has a massive global following. Bollywood produces more films annually than Hollywood. Japanese anime and manga are globally popular. Yoga, originating in India, is now practised worldwide. Cultural exchange goes both ways.',
        'Media and cultural globalisation: Social media platforms (Facebook — 3 billion users, YouTube — 2.5 billion, TikTok — 1.5 billion) spread cultural content globally and instantly. Netflix operates in 190+ countries and invests in local content (Korean drama Squid Game became a global phenomenon). The internet enables both cultural homogenisation and the sharing of diverse cultures.',

        '--- NEWS CORP AND MEDIA CONTROL ---',
        'News Corp ownership illustrates media concentration: it owns 101 newspapers across Australia, 4 UK papers, The New York Post, The Wall Street Journal, plus 8 daily and 15 weekly regional newspapers in the USA. It also owns a 33% share in Russia\'s largest financial newspaper (Vermoski).',
        'News Corp also owns Fox News, 20th Century Fox and BSkyB. The rise of Donald Trump and the right wing of the Republican Party is strongly linked to News Corp\'s media control and influence over public opinion.',
        '90% of the global music industry is owned by just 5 firms (EMI, Universal, AOL, Time Warner and Sony). Critics suggest such control by a narrow number of US-controlled TNCs leads to cultural imperialism and the domination of Western culture globally.',
        'Cultural resistance examples: Iran in the 2000s banned Barbie dolls as they were seen as "un-Islamic". France and China have imposed limits on the amount of overseas culture which can be broadcast on radio and TV, protecting domestic cultural production.',
        'Exporting "western culture" has had wider impacts: the success of China\'s disabled athletes at the 2012 and 2016 games has done much to forward disabled people\'s rights in China. Global movements like Greta Thunberg, BLM, and LGBTQ+ rights spread through globalised media.',

        '--- ATTEMPTS TO CONTROL GLOBALISATION ---',
        'Trade protectionism: if governments heavily subsidise production before dumping on the world market (as China did with steel in 2016), anti-free trade policies take hold as governments scramble to impose tariffs to protect their own markets. This is strictly against WTO rules.',
        'Limiting immigration: in an age of mass immigration and falling travel costs, more people are on the move than at any time in human history. In areas where immigration is perceived to have undercut wages or overwhelmed welfare, populist anti-immigration policies have found significant traction (e.g. Trump\'s wall between USA and Mexico).',
        'Censorship and post-truth: some governments view the free flow of ideas as dangerous. China significantly underplayed the "Arab Spring" in 2011 via government-controlled TV/news. Both Russia and China have been accused of developing "post-truth" — the spread of fake news designed to destabilise other nations.',

        '--- NATIONALIST PARTIES ---',
        'National Front (France): formed in 1972 to unify smaller nationalist movements. Gained fame in 2002 when many French voted for them as a protest. Received 13% of votes in recent elections. Anti-immigration, called for the breakup of the EU, has strong anti-Islamic themes.',
        'Golden Dawn (Greece): commonly described as a "neo-Nazi" or "fascist" party, using symbols similar to the Nazis. The group is openly racist and xenophobic. Held 22 of 703 seats in Greek regional councils. Saw rising popularity since the 2000s (7% polling during the Greek currency crisis). In 2020, Athens court of appeals found 68 members guilty of criminal activities.',
        'Republican Party Tea Party element (USA): fiscally conservative, anti-immigration, libertarian group campaigning for a smaller state and low-to-zero immigration. Best represented by Trumpism — policies included the border wall, banning flights from Middle Eastern states, separating children from parents in illegal immigration cases, removing climate policy support, and tariff battles with China.',
        'Conservative Government (UK): while not extreme, the UK has shifted to right/centre-right policies. Brexit was the most notable policy — leaving the EU to make independent trade deals. Immigration policy shifted to skills-based applications over open borders. Commentators suggest this was a deliberate move to collect votes from UKIP supporters.',

        '--- MIGRATION (Polish Migration to UK post-2004) ---',
        'When Poland and seven other Eastern European countries (the "A8") joined the EU on 1 May 2004, the UK was one of only three existing EU members (with Ireland and Sweden) to grant immediate free movement rights. The UK government predicted 5,000-13,000 Polish migrants per year. The actual figure was vastly higher.',
        'By 2011, the Polish-born population in the UK had reached approximately 700,000, making Poles the largest foreign-born group in the UK. By 2017, the figure exceeded 900,000. Polish became the most commonly spoken non-English language in England and Wales.',
        'Why Poles migrated to the UK: Push factors included high unemployment in Poland (19% in 2004), low wages (average monthly salary $600 vs $3,000+ in the UK), and limited job opportunities, especially for young people. Pull factors included demand for labour in the UK (construction, agriculture, food processing, hospitality), higher wages, English language skills among young Poles, and established Polish communities.',
        'Benefits of Polish migration to the UK: Filled labour shortages in construction, agriculture, and food processing. Polish workers were generally younger, well-educated, and economically active — they were net contributors to the UK treasury (paying more in taxes than receiving in benefits). They contributed to cultural diversity and entrepreneurship (Polish shops, restaurants, community organisations).',
        'Costs and concerns: Put pressure on local services (schools, NHS, housing) in areas of high concentration (e.g. Boston, Lincolnshire, where Polish-born people became 10%+ of the population). Downward pressure on wages in low-skilled sectors. Social tensions and cultural friction in some communities. Contributed to anti-immigration sentiment and was a key factor in the Brexit vote (2016).',
        'Remittances from the UK to Poland: Polish workers in the UK sent significant remittances home, estimated at $1-2 billion annually, boosting local economies in Poland, funding house construction, education, and consumer spending.',
        'Brain drain in Poland: The emigration of young, educated Poles created labour shortages in Poland\'s own economy, particularly in healthcare and construction. However, Poland\'s economy has grown strongly since EU accession, and many Poles have returned ("brain circulation").',
        'Brexit impact: Following the Brexit referendum (2016) and the UK leaving the EU (2020), net Polish migration to the UK fell sharply. The Polish-born population in the UK decreased by approximately 100,000 between 2017 and 2021. The post-Brexit points-based immigration system ended free movement for EU citizens.',
        'Polish migration illustrates both the benefits and challenges of free movement of labour in a globalised world: economic gains for both countries, social and cultural enrichment, but also pressures on services, wage competition, and political backlash.',
        'Specific Polish migration push factors (from PDF): average unemployment in Poland was 18.5% in 2005, youth unemployment was 40%, and rural unemployment was over 40%. Poland\'s GDP per capita was $12,700 vs the UK\'s $30,900.',
        'Polish migration pull factors: UK unemployment was just 5.1%, with skill shortages and demand for skilled/semi-skilled labour. The UK was 1 of only 3 countries that did not restrict immigrants from the A8 countries.',
        'Assistance to Polish migration: low-cost airlines provided regular flights from 9 Polish airports to 18 UK destinations. Regional employers sought cheap seasonal labour. Specialist agencies helped match skilled Polish workers with UK organisations.',
        'Polish migration economic benefits: 0.5-1% of UK economic growth was attributed to Polish workers in 2006. Eastern European immigrants contributed £2.5 billion to the UK economy. 80% of migrants were aged 18-35, and their National Insurance contributions helped the UK cope with its ageing population.',
        'Polish migration problems: exploitation of workers by unscrupulous employers. 427,000 migrant workers brought 36,000 dependants, 27,000 of whom had child benefit applications approved. A high proportion of wages left the UK through remittances to Poland.',

        '--- GLOBAL MIGRATION FLOWS ---',
        'Global migration statistics: 281 million international migrants in 2020 (3.6% of world population). The top destination countries are the USA (51 million), Germany (16 million), Saudi Arabia (13 million), Russia (12 million), and the UK (9 million). South-South migration (between developing countries) accounts for 40% of all international migration.',
        'Remittance corridors: The USA-Mexico corridor is the world\'s largest ($60 billion annually). India receives the most remittances globally ($100 billion in 2022). Remittances to LICs exceed FDI and are three times total foreign aid, making them a critical development resource.',
        'Forced migration and refugees: UNHCR reported 108.4 million forcibly displaced people worldwide (2023). Turkey hosts the most refugees (3.6 million, mainly Syrian). The Syrian civil war (2011-present) displaced 13 million people. Climate migration is growing — the World Bank estimates 216 million internal climate migrants by 2050.',
        'Migration and the "brain drain" vs "brain gain" debate: Sub-Saharan Africa loses $2 billion annually in training costs as healthcare workers emigrate. 1 in 4 doctors trained in Africa practise overseas. However, diaspora networks can drive investment and knowledge transfer back to origin countries ("brain circulation"). The Indian diaspora, for example, played a key role in building India\'s IT sector.',

        '--- ANTI-GLOBALISATION AND PROTEST ---',
        'The Battle of Seattle (1999): 40,000 protesters disrupted the WTO ministerial conference, uniting trade unions, environmentalists, and anti-poverty campaigners. It marked the emergence of the modern anti-globalisation movement and forced the WTO to engage more with civil society.',
        'Occupy Wall Street (2011): Began in Zuccotti Park, New York, spreading to 951 cities in 82 countries. The "We are the 99%" slogan highlighted that the top 1% captured a disproportionate share of globalisation\'s gains. While it achieved no specific policy changes, it shifted public discourse on inequality.',
        'Brexit as anti-globalisation: The 2016 referendum (51.9% Leave) was partly driven by concerns over immigration, sovereignty, and the perception that globalisation benefited London elites while leaving behind former industrial areas. Leave voting correlated with deindustrialised areas, lower educational attainment, and older demographics.',
        'Trump\'s trade wars: In 2018-2019, Trump imposed tariffs of 10-25% on $360 billion of Chinese goods. China retaliated. The trade war disrupted global supply chains, raised consumer prices, and reduced US agricultural exports. It represented a significant departure from decades of trade liberalisation.',
        'Evaluation point for essays on cultural globalisation: The debate is not simply "homogenisation vs hybridisation" — both occur simultaneously. Global brands spread Western consumer culture, but local cultures adapt and resist. K-pop, Bollywood, and Japanese anime show that cultural flows are multi-directional. The key essay skill is evaluating the extent to which globalisation threatens or enriches local cultures, using specific examples.',
      ],
    },
  ],

  // ====================================================
  // QUIZ QUESTIONS
  // ====================================================
  quizzes: [
    // EQ1 — Causes of Globalisation (existing questions)
    {
      q: 'What year was the World Trade Organization (WTO) established?',
      a: '1995',
      options: [
        '1944',
        '1971',
        '1995',
        '2001',
      ],
    },
    {
      q: 'How did containerisation transform global trade?',
      a: 'It standardised shipping using TEUs, reducing shipping costs by over 90% and handling time from weeks to hours',
      options: [
        'It made air freight the primary mode of international transport',
        'It standardised shipping using TEUs, reducing shipping costs by over 90% and handling time from weeks to hours',
        'It created direct rail links between all major trading nations',
        'It allowed perishable goods to be shipped for the first time',
      ],
    },
    {
      q: 'What was the significance of China\'s Open Door Policy?',
      a: 'Introduced by Deng Xiaoping in 1978, it created Special Economic Zones and opened China to foreign investment and trade, transforming it into a global manufacturing hub',
      options: [
        'It allowed unlimited immigration into China',
        'Introduced by Deng Xiaoping in 1978, it created Special Economic Zones and opened China to foreign investment and trade, transforming it into a global manufacturing hub',
        'It established China as a member of the European Union trading bloc',
        'It opened free trade between China and the United States exclusively',
      ],
    },
    {
      q: 'Which institution provides emergency loans to countries in financial crisis, often with conditions requiring economic reforms?',
      a: 'International Monetary Fund (IMF)',
      options: [
        'World Bank',
        'International Monetary Fund (IMF)',
        'World Trade Organization (WTO)',
        'United Nations Development Programme (UNDP)',
      ],
    },
    {
      q: 'What are the three dimensions measured by the KOF Globalisation Index?',
      a: 'Economic, social, and political',
      options: [
        'Trade, investment, and migration',
        'Economic, social, and political',
        'Financial, cultural, and technological',
        'Monetary, demographic, and environmental',
      ],
    },
    {
      q: 'What does "time-space compression" refer to?',
      a: 'David Harvey\'s concept that technology has effectively shrunk the world by dramatically reducing communication and travel times between places',
      options: [
        'The physical compression of urban spaces due to population growth',
        'The reduction of time zones used internationally',
        'David Harvey\'s concept that technology has effectively shrunk the world by dramatically reducing communication and travel times between places',
        'The theory that space exploration compresses time for astronauts',
      ],
    },
    {
      q: 'Which concept describes the idea that value added is highest at the design and marketing stages of production, and lowest at the manufacturing stage?',
      a: 'The smile curve',
      options: [
        'The Kuznets curve',
        'The smile curve',
        'The J-curve',
        'The Lorenz curve',
      ],
    },

    // EQ2 — Impacts (existing questions)
    {
      q: 'What was China\'s average annual GDP growth rate from 1978 to 2018?',
      a: '9.5%',
      options: [
        '5.5%',
        '7.5%',
        '9.5%',
        '12.5%',
      ],
    },
    {
      q: 'Which US city filed for bankruptcy in 2013 with $18 billion in debt after severe deindustrialisation?',
      a: 'Detroit',
      options: [
        'Cleveland',
        'Pittsburgh',
        'Detroit',
        'Buffalo',
      ],
    },
    {
      q: 'What is the Gini coefficient used to measure?',
      a: 'Income inequality within a country, ranging from 0 (perfect equality) to 1 (perfect inequality)',
      options: [
        'The level of economic development measured by GDP per capita',
        'Income inequality within a country, ranging from 0 (perfect equality) to 1 (perfect inequality)',
        'The degree of trade openness in an economy',
        'The proportion of a population living below the poverty line',
      ],
    },
    {
      q: 'How much were global remittances to developing countries worth annually by 2020?',
      a: '$540 billion',
      options: [
        '$120 billion',
        '$280 billion',
        '$540 billion',
        '$890 billion',
      ],
    },
    {
      q: 'In how many countries does McDonald\'s operate?',
      a: 'Over 120 countries',
      options: [
        'Over 60 countries',
        'Over 90 countries',
        'Over 120 countries',
        'Over 180 countries',
      ],
    },
    {
      q: 'What is "glocalisation"?',
      a: 'The adaptation of global products and marketing strategies to suit local tastes and cultural norms',
      options: [
        'The process of global companies merging with local businesses',
        'The adaptation of global products and marketing strategies to suit local tastes and cultural norms',
        'The replacement of local cultures with global standardised culture',
        'The movement of local companies into global markets',
      ],
    },
    {
      q: 'Approximately how many people remain without internet access globally?',
      a: '2.9 billion',
      options: [
        '1.2 billion',
        '2.9 billion',
        '4.5 billion',
        '5.8 billion',
      ],
    },
    {
      q: 'What percentage of global CO2 emissions does international shipping account for?',
      a: 'Approximately 2.5%',
      options: [
        'Approximately 0.5%',
        'Approximately 2.5%',
        'Approximately 7%',
        'Approximately 12%',
      ],
    },
    {
      q: 'How many tonnes of textile waste does the global fashion industry produce each year?',
      a: '92 million tonnes',
      options: [
        '25 million tonnes',
        '52 million tonnes',
        '92 million tonnes',
        '140 million tonnes',
      ],
    },
    {
      q: 'How much global e-waste was generated in 2019?',
      a: '53.6 million tonnes, with only 17.4% formally recycled',
      options: [
        '22 million tonnes, with 35% formally recycled',
        '53.6 million tonnes, with only 17.4% formally recycled',
        '78 million tonnes, with 25% formally recycled',
        '100 million tonnes, with 50% formally recycled',
      ],
    },
    {
      q: 'What is the "elephant curve" (Branko Milanovic) used to illustrate?',
      a: 'How the global middle class (especially in Asia) and the super-rich gained most from globalisation, while the lower-middle class in developed countries gained least',
      options: [
        'The shape of economic growth in Sub-Saharan Africa over time',
        'How the global middle class (especially in Asia) and the super-rich gained most from globalisation, while the lower-middle class in developed countries gained least',
        'The relationship between GDP growth and environmental degradation',
        'The rising inequality between urban and rural populations globally',
      ],
    },

    // EQ3 — Consequences for Development and Environment (existing questions)
    {
      q: 'Who developed dependency theory?',
      a: 'Andre Gunder Frank (1967)',
      options: [
        'W.W. Rostow (1960)',
        'Andre Gunder Frank (1967)',
        'Immanuel Wallerstein (1974)',
        'David Harvey (1989)',
      ],
    },
    {
      q: 'What are the five stages of Rostow\'s modernisation theory in order?',
      a: 'Traditional society, preconditions for take-off, take-off, drive to maturity, age of high mass consumption',
      options: [
        'Traditional society, preconditions for take-off, take-off, drive to maturity, age of high mass consumption',
        'Subsistence, industrialisation, urbanisation, globalisation, post-industrial',
        'Primary, secondary, tertiary, quaternary, quinary',
        'Feudal, mercantile, industrial, post-industrial, information age',
      ],
    },
    {
      q: 'In Wallerstein\'s World Systems Theory, which category would China best fit into?',
      a: 'Semi-periphery',
      options: [
        'Core',
        'Semi-periphery',
        'Periphery',
        'External area',
      ],
    },
    {
      q: 'How many people were killed in the Rana Plaza disaster in Bangladesh in 2013?',
      a: '1,134',
      options: [
        '256',
        '612',
        '1,134',
        '2,500',
      ],
    },
    {
      q: 'How many farmers and workers are involved in the Fair Trade system globally?',
      a: '1.7 million in 75 countries',
      options: [
        '500,000 in 40 countries',
        '1.7 million in 75 countries',
        '5 million in 100 countries',
        '10 million in 120 countries',
      ],
    },
    {
      q: 'What is "greenwashing"?',
      a: 'Companies making misleading claims about environmental benefits of their products or operations to appear more sustainable than they are',
      options: [
        'The process of cleaning up polluted environments using biological methods',
        'Companies making misleading claims about environmental benefits of their products or operations to appear more sustainable than they are',
        'Government subsidies for environmentally friendly technologies',
        'The natural recovery of ecosystems after industrial pollution',
      ],
    },
    {
      q: 'What temperature limit does the Paris Climate Agreement aim to achieve?',
      a: 'Well below 2°C above pre-industrial levels, with efforts to limit to 1.5°C',
      options: [
        'Below 1°C above pre-industrial levels',
        'Well below 2°C above pre-industrial levels, with efforts to limit to 1.5°C',
        'Below 3°C above pre-industrial levels',
        'Below 4°C above pre-industrial levels by 2100',
      ],
    },
    {
      q: 'What were the 1999 WTO protests in Seattle commonly known as?',
      a: 'The Battle of Seattle',
      options: [
        'The Trade Wars',
        'The Seattle Uprising',
        'The Battle of Seattle',
        'Occupy Seattle',
      ],
    },
    {
      q: 'How many SDGs were adopted by the UN in 2015?',
      a: '17',
      options: [
        '8',
        '12',
        '17',
        '21',
      ],
    },
    {
      q: 'What is the "local multiplier effect" according to NEF?',
      a: 'Every £1 spent locally generates £1.76 for the local economy versus £0.36 at a supermarket',
      options: [
        'Every £1 spent locally generates £1.76 for the local economy versus £0.36 at a supermarket',
        'Local businesses create twice as many jobs per pound as TNCs',
        'Locally produced goods cost 50% less than imported alternatives',
        'Tax revenues from local businesses are three times higher than from TNCs',
      ],
    },
    {
      q: 'Which Volkswagen scandal is an example of corporate greenwashing?',
      a: 'The Dieselgate scandal (2015) where VW used software to cheat emissions tests while marketing "clean diesel"',
      options: [
        'The recall of 2 million vehicles for battery defects',
        'The Dieselgate scandal (2015) where VW used software to cheat emissions tests while marketing "clean diesel"',
        'The dumping of factory waste into the Rhine River',
        'The use of conflict minerals in vehicle electronics',
      ],
    },
    {
      q: 'What does the term "slowbalisation" refer to?',
      a: 'The slowing of globalisation since the 2008 financial crisis due to rising protectionism, political nationalism, and supply chain disruptions',
      options: [
        'The deliberate slowing of economic growth to protect the environment',
        'The gradual reduction of internet speeds in developing countries',
        'The slowing of globalisation since the 2008 financial crisis due to rising protectionism, political nationalism, and supply chain disruptions',
        'A policy of managed trade promoted by the WTO',
      ],
    },
    {
      q: 'What key argument does dependency theory make about why developing countries remain poor?',
      a: 'Developing countries are structurally exploited by developed countries through unequal trade, debt, and TNC operations, keeping them in a state of underdevelopment',
      options: [
        'Developing countries lack the natural resources needed for economic growth',
        'Developing countries are structurally exploited by developed countries through unequal trade, debt, and TNC operations, keeping them in a state of underdevelopment',
        'Developing countries have not yet reached the take-off stage of economic growth',
        'Developing countries do not receive enough foreign aid to invest in infrastructure',
      ],
    },

    // ====================================================
    // NEW CASE STUDY QUIZ QUESTIONS (50+)
    // ====================================================

    // --- APPLE Case Study Questions ---
    {
      q: 'Where is Apple\'s headquarters located?',
      a: 'Cupertino, California, USA',
      options: [
        'San Francisco, California, USA',
        'Cupertino, California, USA',
        'Seattle, Washington, USA',
        'Austin, Texas, USA',
      ],
    },
    {
      q: 'What was Apple\'s revenue in 2023?',
      a: '$383 billion',
      options: [
        '$195 billion',
        '$283 billion',
        '$383 billion',
        '$512 billion',
      ],
    },
    {
      q: 'How many workers does Foxconn employ to make Apple products and other electronics?',
      a: '1.5 million',
      options: [
        '500,000',
        '1 million',
        '1.5 million',
        '2 million',
      ],
    },
    {
      q: 'How many countries supply components for Apple\'s products?',
      a: '43+ countries',
      options: [
        '12 countries',
        '25 countries',
        '43+ countries',
        '60+ countries',
      ],
    },
    {
      q: 'What happened at Foxconn\'s Shenzhen facility in 2010 that drew global attention?',
      a: 'At least 14 workers attempted suicide, leading to the installation of "suicide nets" around buildings',
      options: [
        'A major fire destroyed a production line, killing 30 workers',
        'At least 14 workers attempted suicide, leading to the installation of "suicide nets" around buildings',
        'Workers organised a strike involving 500,000 employees',
        'The factory was shut down due to toxic chemical contamination',
      ],
    },
    {
      q: 'What tax rate did Apple reportedly pay on its European profits through its Irish subsidiary?',
      a: 'As low as 0.005%',
      options: [
        '5%',
        '2.5%',
        '0.5%',
        'As low as 0.005%',
      ],
    },
    {
      q: 'How much did the EU order Apple to pay Ireland in back taxes in 2016?',
      a: '€13 billion',
      options: [
        '€1 billion',
        '€5 billion',
        '€13 billion',
        '€25 billion',
      ],
    },
    {
      q: 'How many iPhones per day can Foxconn\'s Zhengzhou facility produce?',
      a: '500,000',
      options: [
        '50,000',
        '100,000',
        '500,000',
        '1 million',
      ],
    },
    {
      q: 'Which company makes the processor chips (A-series/M-series) for Apple products?',
      a: 'TSMC (Taiwan Semiconductor Manufacturing Company)',
      options: [
        'Samsung (South Korea)',
        'Intel (USA)',
        'TSMC (Taiwan Semiconductor Manufacturing Company)',
        'Qualcomm (USA)',
      ],
    },

    // --- NIKE Case Study Questions ---
    {
      q: 'What is Nike\'s approximate annual revenue?',
      a: '$51 billion',
      options: [
        '$21 billion',
        '$35 billion',
        '$51 billion',
        '$78 billion',
      ],
    },
    {
      q: 'How many contract factories does Nike use globally?',
      a: 'Over 500 factories in 40+ countries',
      options: [
        'Over 100 factories in 15 countries',
        'Over 250 factories in 25 countries',
        'Over 500 factories in 40+ countries',
        'Over 1,000 factories in 60+ countries',
      ],
    },
    {
      q: 'Which country manufactures the largest share (50%) of Nike footwear?',
      a: 'Vietnam',
      options: [
        'China',
        'Vietnam',
        'Indonesia',
        'Bangladesh',
      ],
    },
    {
      q: 'What 1996 event caused major public outrage against Nike?',
      a: 'Life magazine published a photo of a Pakistani child sewing Nike footballs',
      options: [
        'A factory fire in Indonesia killed 200 workers',
        'Life magazine published a photo of a Pakistani child sewing Nike footballs',
        'Nike\'s CEO was caught using child labour in his private estate',
        'A documentary revealed Nike dumping toxic waste in Vietnam rivers',
      ],
    },
    {
      q: 'What significant CSR step did Nike take in 2005, the first major brand to do so?',
      a: 'Published its full factory list, disclosing all supplier locations',
      options: [
        'Committed to paying all workers a living wage',
        'Published its full factory list, disclosing all supplier locations',
        'Eliminated all overseas manufacturing',
        'Donated 10% of profits to worker welfare funds',
      ],
    },
    {
      q: 'Approximately how much of a $170 Nike shoe goes to the factory production cost?',
      a: 'Approximately $28',
      options: [
        'Approximately $8',
        'Approximately $28',
        'Approximately $65',
        'Approximately $95',
      ],
    },

    // --- WALMART/ASDA Case Study Questions ---
    {
      q: 'How many employees does Walmart have globally, making it the largest private employer?',
      a: 'Approximately 2.1 million',
      options: [
        'Approximately 800,000',
        'Approximately 1.4 million',
        'Approximately 2.1 million',
        'Approximately 3.5 million',
      ],
    },
    {
      q: 'What was Walmart\'s revenue in 2023?',
      a: '$611 billion',
      options: [
        '$320 billion',
        '$450 billion',
        '$611 billion',
        '$780 billion',
      ],
    },
    {
      q: 'What is Walmart\'s core business strategy called?',
      a: 'Everyday Low Prices (EDLP)',
      options: [
        'Premium Value Strategy',
        'Everyday Low Prices (EDLP)',
        'Dynamic Pricing Model',
        'Cost-Plus Retailing',
      ],
    },
    {
      q: 'How much did Walmart pay to acquire ASDA in 1999?',
      a: '£6.7 billion',
      options: [
        '£2.3 billion',
        '£4.5 billion',
        '£6.7 billion',
        '£9.8 billion',
      ],
    },
    {
      q: 'What is Walmart\'s Project Gigaton?',
      a: 'A commitment to reduce supply chain emissions by 1 billion tonnes (a gigatonne) by 2030',
      options: [
        'A plan to build 1 billion square feet of new store space',
        'A commitment to reduce supply chain emissions by 1 billion tonnes (a gigatonne) by 2030',
        'An initiative to hire 1 billion gig workers globally',
        'A programme to invest $1 billion in renewable energy',
      ],
    },

    // --- INDIA Case Study Questions ---
    {
      q: 'Which Indian city is known as the "Silicon Valley of India" and the country\'s IT hub?',
      a: 'Bangalore (Bengaluru)',
      options: [
        'Mumbai',
        'Delhi',
        'Bangalore (Bengaluru)',
        'Chennai',
      ],
    },
    {
      q: 'How many IT companies are based in Bangalore?',
      a: '3,500+',
      options: [
        '500+',
        '1,200+',
        '3,500+',
        '8,000+',
      ],
    },
    {
      q: 'What percentage of India\'s GDP does the IT and BPO sector account for?',
      a: 'Approximately 8%',
      options: [
        'Approximately 2%',
        'Approximately 8%',
        'Approximately 15%',
        'Approximately 25%',
      ],
    },
    {
      q: 'How large is India\'s middle class estimated to be as of 2023?',
      a: '350+ million people',
      options: [
        '50 million people',
        '150 million people',
        '350+ million people',
        '600 million people',
      ],
    },
    {
      q: 'What was the unemployment rate in Poland when it joined the EU in 2004, driving emigration?',
      a: '19%',
      options: [
        '5%',
        '12%',
        '19%',
        '28%',
      ],
    },
    {
      q: 'How many engineering graduates does India produce per year?',
      a: '1.5 million',
      options: [
        '250,000',
        '750,000',
        '1.5 million',
        '3 million',
      ],
    },
    {
      q: 'What percentage of India\'s national wealth is owned by the top 10%?',
      a: '77%',
      options: [
        '45%',
        '60%',
        '77%',
        '90%',
      ],
    },

    // --- ETHIOPIA Case Study Questions ---
    {
      q: 'When did the Hawassa Industrial Park in Ethiopia open?',
      a: '2017',
      options: [
        '2010',
        '2014',
        '2017',
        '2020',
      ],
    },
    {
      q: 'How much Chinese investment funded the Hawassa Industrial Park?',
      a: '$250 million',
      options: [
        '$50 million',
        '$250 million',
        '$750 million',
        '$1 billion',
      ],
    },
    {
      q: 'How much do garment workers in Ethiopia\'s industrial parks earn per month?',
      a: '$26-$50 per month, among the lowest in the world',
      options: [
        '$10-$15 per month',
        '$26-$50 per month, among the lowest in the world',
        '$95-$120 per month',
        '$150-$200 per month',
      ],
    },
    {
      q: 'What was Ethiopia\'s approximate national debt by 2020?',
      a: '$47 billion',
      options: [
        '$12 billion',
        '$28 billion',
        '$47 billion',
        '$85 billion',
      ],
    },
    {
      q: 'How much did the Addis Ababa-Djibouti railway cost, funded largely by China?',
      a: '$4 billion',
      options: [
        '$500 million',
        '$1.5 billion',
        '$4 billion',
        '$10 billion',
      ],
    },

    // --- BELT AND ROAD INITIATIVE Questions ---
    {
      q: 'How much is China\'s Belt and Road Initiative estimated to cost?',
      a: '$1 trillion+',
      options: [
        '$100 billion',
        '$500 billion',
        '$1 trillion+',
        '$5 trillion',
      ],
    },
    {
      q: 'How many countries are involved in the Belt and Road Initiative?',
      a: '140+ countries',
      options: [
        '40+ countries',
        '80+ countries',
        '140+ countries',
        '200+ countries',
      ],
    },
    {
      q: 'What happened to Sri Lanka\'s Hambantota Port after the country defaulted on Chinese loans?',
      a: 'Sri Lanka leased the port to China for 99 years',
      options: [
        'China forgave the debt entirely',
        'The port was sold to an Indian company',
        'Sri Lanka leased the port to China for 99 years',
        'The World Bank took over management of the port',
      ],
    },
    {
      q: 'In what year did President Xi Jinping launch the Belt and Road Initiative?',
      a: '2013',
      options: [
        '2008',
        '2011',
        '2013',
        '2016',
      ],
    },
    {
      q: 'How much did the China-Pakistan Economic Corridor cost?',
      a: '$62 billion',
      options: [
        '$12 billion',
        '$35 billion',
        '$62 billion',
        '$100 billion',
      ],
    },

    // --- RANA PLAZA Case Study Questions ---
    {
      q: 'On what date did the Rana Plaza building collapse?',
      a: '24 April 2013',
      options: [
        '15 March 2012',
        '24 April 2013',
        '8 September 2013',
        '12 November 2014',
      ],
    },
    {
      q: 'How many garment workers were injured in the Rana Plaza collapse?',
      a: '2,500+',
      options: [
        '500+',
        '1,200+',
        '2,500+',
        '5,000+',
      ],
    },
    {
      q: 'Which Western brands were linked to factories in the Rana Plaza building?',
      a: 'Primark, Benetton, Matalan, Walmart, and Mango',
      options: [
        'Nike, Adidas, Puma, and Under Armour',
        'Primark, Benetton, Matalan, Walmart, and Mango',
        'Zara, H&M, Uniqlo, and Gap',
        'Gucci, Louis Vuitton, Prada, and Versace',
      ],
    },
    {
      q: 'Why did garment workers return to work in Rana Plaza the day of the collapse despite cracks appearing?',
      a: 'Factory managers threatened to withhold a month\'s wages if workers did not return',
      options: [
        'Workers did not know about the structural cracks',
        'Factory managers threatened to withhold a month\'s wages if workers did not return',
        'Government inspectors had declared the building safe',
        'Workers had already been evacuated and returned voluntarily',
      ],
    },
    {
      q: 'What was the minimum monthly wage for Bangladeshi garment workers at the time of Rana Plaza (2013)?',
      a: '$38 per month',
      options: [
        '$15 per month',
        '$38 per month',
        '$68 per month',
        '$95 per month',
      ],
    },
    {
      q: 'What percentage of Bangladesh\'s total exports come from garment manufacturing?',
      a: '84%',
      options: [
        '45%',
        '62%',
        '84%',
        '95%',
      ],
    },
    {
      q: 'What agreement was signed by 200+ brands after Rana Plaza to improve Bangladeshi factory safety?',
      a: 'The Accord on Fire and Building Safety in Bangladesh',
      options: [
        'The Dhaka Factory Reform Treaty',
        'The Bangladesh Workers Protection Act',
        'The Accord on Fire and Building Safety in Bangladesh',
        'The International Garment Safety Convention',
      ],
    },

    // --- FAIR TRADE Questions ---
    {
      q: 'What two guarantees does Fair Trade certification provide to producers?',
      a: 'A minimum price (floor price) and a Fair Trade premium for community development',
      options: [
        'Free shipping and guaranteed wholesale orders',
        'A minimum price (floor price) and a Fair Trade premium for community development',
        'Tax-free exports and government subsidies',
        'Unlimited market access and free advertising',
      ],
    },
    {
      q: 'What is special about Divine Chocolate\'s ownership structure?',
      a: 'It is co-owned by the Kuapa Kokoo cooperative of 100,000+ cocoa farmers in Ghana',
      options: [
        'It is entirely owned by the UK government',
        'It is co-owned by the Kuapa Kokoo cooperative of 100,000+ cocoa farmers in Ghana',
        'It is a subsidiary of Cadbury',
        'It is owned equally by farmers from 20 different countries',
      ],
    },
    {
      q: 'What did Cadbury do with its Dairy Milk brand in 2009 in relation to Fair Trade?',
      a: 'Made Dairy Milk Fair Trade certified (later switched to its own Cocoa Life programme)',
      options: [
        'Stopped using cocoa from developing countries',
        'Made Dairy Milk Fair Trade certified (later switched to its own Cocoa Life programme)',
        'Doubled the price to fund Fair Trade premiums',
        'Partnered exclusively with Divine Chocolate',
      ],
    },
    {
      q: 'How much were global Fair Trade-certified product sales worth in 2020?',
      a: '$11.2 billion',
      options: [
        '$1.5 billion',
        '$5.8 billion',
        '$11.2 billion',
        '$22 billion',
      ],
    },

    // --- GLOBAL SHIFT Questions ---
    {
      q: 'How many manufacturing jobs did the UK lose between 1970 and 2020?',
      a: '3.5 million',
      options: [
        '1 million',
        '2.2 million',
        '3.5 million',
        '5 million',
      ],
    },
    {
      q: 'What percentage of UK GDP did manufacturing represent in 1970 compared to 2020?',
      a: '25% in 1970, falling to under 10% by 2020',
      options: [
        '40% in 1970, falling to 20% by 2020',
        '25% in 1970, falling to under 10% by 2020',
        '15% in 1970, falling to 5% by 2020',
        '50% in 1970, falling to 25% by 2020',
      ],
    },
    {
      q: 'What happened to Detroit\'s population between 1950 and 2020 due to deindustrialisation?',
      a: 'It fell from 1.8 million to 640,000',
      options: [
        'It grew from 500,000 to 2 million',
        'It stayed stable at around 1 million',
        'It fell from 1.8 million to 640,000',
        'It fell from 3 million to 1.5 million',
      ],
    },
    {
      q: 'What is the "China Plus One" strategy?',
      a: 'Companies diversifying supply chains beyond China to other countries to reduce risk, accelerated by COVID-19 and trade tensions',
      options: [
        'China acquiring one major company in each country it trades with',
        'Companies diversifying supply chains beyond China to other countries to reduce risk, accelerated by COVID-19 and trade tensions',
        'A Chinese policy to invest in one BRI project per country per year',
        'The strategy of producing one product exclusively in China',
      ],
    },

    // --- CULTURAL GLOBALISATION Questions ---
    {
      q: 'Who developed the concept of "McDonaldisation" and in what year?',
      a: 'George Ritzer in 1993',
      options: [
        'Naomi Klein in 2000',
        'George Ritzer in 1993',
        'David Harvey in 1989',
        'Anthony Giddens in 1990',
      ],
    },
    {
      q: 'How many countries is Coca-Cola sold in?',
      a: '200+ countries',
      options: [
        '100+ countries',
        '150+ countries',
        '200+ countries',
        'Every country in the world',
      ],
    },
    {
      q: 'What is the McDonald\'s McAloo Tikki an example of?',
      a: 'Glocalisation — adapting a global product (McDonald\'s menu) to local tastes (Indian potato-based burger)',
      options: [
        'Cultural imperialism — forcing American food on Indian consumers',
        'Glocalisation — adapting a global product (McDonald\'s menu) to local tastes (Indian potato-based burger)',
        'McDonaldisation — standardising food production globally',
        'Protectionism — India requiring foreign companies to use local ingredients',
      ],
    },
    {
      q: 'How many customers does McDonald\'s serve daily worldwide?',
      a: '69 million',
      options: [
        '25 million',
        '45 million',
        '69 million',
        '100 million',
      ],
    },

    // --- MIGRATION Questions ---
    {
      q: 'How many Polish-born people were living in the UK by 2017?',
      a: 'Over 900,000',
      options: [
        'Over 200,000',
        'Over 500,000',
        'Over 900,000',
        'Over 1.5 million',
      ],
    },
    {
      q: 'How many people predicted the UK government would migrate from Poland per year after 2004?',
      a: '5,000-13,000 per year (the actual figure was vastly higher)',
      options: [
        '500-1,000 per year',
        '5,000-13,000 per year (the actual figure was vastly higher)',
        '50,000-100,000 per year',
        '200,000-500,000 per year',
      ],
    },
    {
      q: 'Which UK town became notable for its high proportion of Polish-born residents (10%+)?',
      a: 'Boston, Lincolnshire',
      options: [
        'Grimsby, Lincolnshire',
        'Boston, Lincolnshire',
        'Margate, Kent',
        'Blackpool, Lancashire',
      ],
    },
    {
      q: 'How many international migrants were there globally in 2020?',
      a: '281 million',
      options: [
        '85 million',
        '150 million',
        '281 million',
        '450 million',
      ],
    },

    // --- ADDITIONAL MIXED CASE STUDY Questions ---
    {
      q: 'What is Shenzhen\'s population, having grown from a fishing village of 30,000 largely due to its SEZ status?',
      a: '17+ million',
      options: [
        '3 million',
        '8 million',
        '17+ million',
        '30 million',
      ],
    },
    {
      q: 'When was Shenzhen designated as one of China\'s first Special Economic Zones?',
      a: '1980',
      options: [
        '1972',
        '1978',
        '1980',
        '1985',
      ],
    },
    {
      q: 'Which country is the world\'s second-largest garment exporter after China?',
      a: 'Bangladesh',
      options: [
        'Vietnam',
        'India',
        'Bangladesh',
        'Indonesia',
      ],
    },
    {
      q: 'How many garment factories exist in Bangladesh?',
      a: '4,500+',
      options: [
        '1,200+',
        '2,800+',
        '4,500+',
        '7,000+',
      ],
    },
    {
      q: 'What was the Tazreen Fashion factory fire in Bangladesh (November 2012)?',
      a: 'A factory fire that killed 117 garment workers, occurring before the Rana Plaza collapse and highlighting systemic safety failures',
      options: [
        'A fire that destroyed a shopping centre in Dhaka, killing 50',
        'A factory fire that killed 117 garment workers, occurring before the Rana Plaza collapse and highlighting systemic safety failures',
        'A chemical explosion at a textile dyeing plant that killed 200',
        'A fire caused by an earthquake that destroyed 10 garment factories',
      ],
    },
    {
      q: 'What was Totnes in Devon notable for in 2006?',
      a: 'It became the world\'s first "transition town", promoting local sustainability and self-sufficiency',
      options: [
        'It was the first UK town to ban plastic bags',
        'It became the world\'s first "transition town", promoting local sustainability and self-sufficiency',
        'It achieved carbon neutrality through renewable energy',
        'It became the first town to reject all TNC-owned shops',
      ],
    },
    {
      q: 'How many workers are employed in Bangladesh\'s garment industry, the majority of whom are women?',
      a: '4 million',
      options: [
        '1 million',
        '2.5 million',
        '4 million',
        '6 million',
      ],
    },
    {
      q: 'What was India\'s IT sector revenue by 2023?',
      a: '$245 billion',
      options: [
        '$80 billion',
        '$150 billion',
        '$245 billion',
        '$400 billion',
      ],
    },
    {
      q: 'In what year was Infosys, one of India\'s biggest IT companies, founded?',
      a: '1981',
      options: [
        '1975',
        '1981',
        '1991',
        '1998',
      ],
    },

    // --- BHOPAL DISASTER Questions ---
    {
      q: 'In what year did the Bhopal disaster occur at the Union Carbide plant in India?',
      a: '1984',
      options: [
        '1976',
        '1984',
        '1992',
        '2001',
      ],
    },
    {
      q: 'How many people were exposed to toxic gas in the Bhopal disaster?',
      a: 'Over 500,000',
      options: [
        'Over 50,000',
        'Over 150,000',
        'Over 500,000',
        'Over 1 million',
      ],
    },
    {
      q: 'What was the final out-of-court settlement for the Bhopal disaster, and what percentage of the original claim was it?',
      a: '$470 million — just 15% of the original $3 billion claim',
      options: [
        '$100 million — 3% of the original claim',
        '$470 million — just 15% of the original $3 billion claim',
        '$1.5 billion — 50% of the original claim',
        '$3 billion — the full original claim',
      ],
    },
    {
      q: 'How long had the MIC tank alarms at the Bhopal plant not been working before the disaster?',
      a: '4 years',
      options: [
        '6 months',
        '1 year',
        '4 years',
        '10 years',
      ],
    },

    // --- LEICESTER DEINDUSTRIALISATION Questions ---
    {
      q: 'How many people were employed in Leicester\'s textile mills in the 1920s?',
      a: 'Over 300,000',
      options: [
        'Over 50,000',
        'Over 150,000',
        'Over 300,000',
        'Over 500,000',
      ],
    },
    {
      q: 'Which major retailer had all its knitwear made in Leicester in the 1960s?',
      a: 'Marks & Spencer (M&S)',
      options: [
        'Primark',
        'Marks & Spencer (M&S)',
        'Next',
        'Debenhams',
      ],
    },
    {
      q: 'What caused Leicester\'s textile decline in the 1980s?',
      a: 'Clothes could be manufactured much more cheaply in China and exported to the UK',
      options: [
        'A major fire destroyed most of the textile mills',
        'The government banned textile manufacturing in urban areas',
        'Clothes could be manufactured much more cheaply in China and exported to the UK',
        'Workers went on prolonged strikes that shut down production',
      ],
    },

    // --- AUSTRALIA GLOBALISATION Questions ---
    {
      q: 'How many jobs has globalisation created in Australia according to a government report?',
      a: '400,000+ jobs in the past decade',
      options: [
        '50,000+ jobs in the past decade',
        '150,000+ jobs in the past decade',
        '400,000+ jobs in the past decade',
        '1 million+ jobs in the past decade',
      ],
    },
    {
      q: 'How has globalisation negatively affected Aboriginal communities in Australia?',
      a: 'Vast areas of Aboriginal land have been sold to TNCs, welfare has been underfunded, and the spread of English threatens Aboriginal languages',
      options: [
        'Aboriginal communities have been forcibly relocated to cities',
        'Vast areas of Aboriginal land have been sold to TNCs, welfare has been underfunded, and the spread of English threatens Aboriginal languages',
        'Aboriginal people have been banned from participating in global trade',
        'Globalisation has had no significant impact on Aboriginal communities',
      ],
    },

    // --- POLISH MIGRATION SPECIFIC STATS Questions ---
    {
      q: 'What was the average unemployment rate in Poland in 2005, driving emigration to the UK?',
      a: '18.5%',
      options: [
        '5.1%',
        '12%',
        '18.5%',
        '25%',
      ],
    },
    {
      q: 'What was the youth unemployment rate in Poland that pushed young Poles to migrate to the UK?',
      a: '40%',
      options: [
        '15%',
        '25%',
        '40%',
        '55%',
      ],
    },
    {
      q: 'How much did Eastern European immigrants contribute to the UK economy?',
      a: '£2.5 billion',
      options: [
        '£500 million',
        '£1.2 billion',
        '£2.5 billion',
        '£5 billion',
      ],
    },

    // --- GLOBAL CULTURE & MEDIA Questions ---
    {
      q: 'What percentage of the global music industry is owned by just 5 firms?',
      a: '90%',
      options: [
        '50%',
        '70%',
        '90%',
        '99%',
      ],
    },
    {
      q: 'How many newspapers does News Corp own across Australia?',
      a: '101',
      options: [
        '15',
        '45',
        '101',
        '250',
      ],
    },
    {
      q: 'Which country banned Barbie dolls in the 2000s as they were seen as "un-Islamic"?',
      a: 'Iran',
      options: [
        'Saudi Arabia',
        'Iran',
        'Pakistan',
        'Afghanistan',
      ],
    },

    // --- NATIONALIST PARTIES Questions ---
    {
      q: 'When was the National Front in France formed?',
      a: '1972',
      options: [
        '1952',
        '1972',
        '1988',
        '2002',
      ],
    },
    {
      q: 'What percentage of votes did the National Front receive in recent French elections?',
      a: '13%',
      options: [
        '5%',
        '13%',
        '25%',
        '35%',
      ],
    },
    {
      q: 'What happened to Golden Dawn members in Greece in 2020?',
      a: 'Athens court of appeals announced guilty verdicts on 68 members following a police investigation into criminal activities',
      options: [
        'They won a majority in parliament',
        'Athens court of appeals announced guilty verdicts on 68 members following a police investigation into criminal activities',
        'The party was officially dissolved by the Greek government',
        'They merged with the ruling party',
      ],
    },

    // --- CHINA GLOBAL SHIFT SPECIFIC Questions ---
    {
      q: 'How many people were taken out of poverty in China between 1980 and 2020?',
      a: '900 million',
      options: [
        '300 million',
        '500 million',
        '900 million',
        '1.2 billion',
      ],
    },
    {
      q: 'What percentage of China\'s rivers and lakes are polluted?',
      a: '70%',
      options: [
        '30%',
        '50%',
        '70%',
        '90%',
      ],
    },
    {
      q: 'How many people in China lack access to safe drinking water?',
      a: '360 million',
      options: [
        '50 million',
        '150 million',
        '360 million',
        '600 million',
      ],
    },
    {
      q: 'What is the annual cost of acid rain in China (health, farming losses, environmental management)?',
      a: '$13 billion per year',
      options: [
        '$2 billion per year',
        '$7 billion per year',
        '$13 billion per year',
        '$25 billion per year',
      ],
    },

    // --- ETHIOPIA DEVELOPMENT Questions ---
    {
      q: 'What percentage of Ethiopia\'s workforce is employed in farming?',
      a: '85%',
      options: [
        '45%',
        '65%',
        '85%',
        '95%',
      ],
    },
    {
      q: 'What percentage of Ethiopia is currently forested?',
      a: 'Less than 3%',
      options: [
        'Less than 3%',
        'About 15%',
        'About 30%',
        'About 50%',
      ],
    },
    {
      q: 'What was the fertility rate in Ethiopia in 1993 compared to 2020?',
      a: '7.7 children per woman in 1993, falling to 4 in 2020',
      options: [
        '3.2 in 1993, falling to 1.8 in 2020',
        '5.0 in 1993, falling to 3.0 in 2020',
        '7.7 children per woman in 1993, falling to 4 in 2020',
        '10 children per woman in 1993, falling to 6 in 2020',
      ],
    },
  ],
};

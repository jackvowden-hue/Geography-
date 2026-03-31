// ========================================
// MINDMAP DATA - 20 Mark Essay Plans
// Diverse Places + Globalisation
// A3 Mindmap Level Detail
// ========================================

export const mindmapSections = [
  {
    id: 'diverse-places',
    title: 'Diverse Places',
    color: '#e85d75',
    questions: [
      // DP-01: UK Population Structure
      {
        id: 'dp-01',
        num: '01',
        title: 'UK Population Structure',
        question: 'Evaluate the extent to which population structure varies across the rural-urban continuum in the UK.',
        marks: 20,
        center: 'Population Structure\nacross the\nRural-Urban Continuum',
        branches: [
          {
            label: 'Inner London\n(Newham)',
            color: '#ff6b6b',
            notes: [
              { type: 'stat', text: 'Population: 352,000 at a density of 8,762/km² — this is over 125 times denser than rural North Yorkshire, illustrating the extreme concentration at the urban end of the continuum.' },
              { type: 'stat', text: 'Average age of just 31 years old, with a fertility rate of 76 per 1,000 women — double that of rural areas, reflecting the dominance of young adults of childbearing age.' },
              { type: 'argument', text: 'Newham is dominated by 21-40 year olds because the collapse of the London docks triggered massive regeneration projects and housing expansion, attracting young workers and international migrants seeking affordable accommodation in a well-connected borough.' },
              { type: 'casestudy', text: 'Newham has been the fastest growing borough in the UK with population rising by almost 25%. Its non-UK born population grew by 72,000, and 55% of its total population were born outside the UK — making it the most ethnically diverse borough in London.' },
              { type: 'argument', text: 'The 2012 Olympics brought £9 billion of investment to East London, making Stratford the 2nd most connected area in London after Kings Cross. This transformed Newham from a deprived post-industrial area into a property hotspot attracting young professionals.' },
              { type: 'evaluation', text: 'However, this youthful population structure masks deep inequality — Newham has the lowest life expectancy and highest rate of heart disease in London, and it remains consistently one of the poorest and most deprived boroughs despite regeneration.' },
              { type: 'stat', text: 'Every ethnic group in London is represented in Newham: Indian 14%, African 12%, Bangladeshi 12%, Pakistani 10%. White British is the smallest percentage of any London borough.' },
              { type: 'evaluation', text: 'The youthful structure is partly self-reinforcing: cheap housing and migrant networks attract more young people, who then have children, maintaining high fertility rates and low average ages in a cycle of demographic momentum.' },
            ],
          },
          {
            label: 'Outer London\n(Kingston)',
            color: '#ffa94d',
            notes: [
              { type: 'stat', text: 'Population: 175,000 at a density of 4,400/km² — roughly half the density of inner London, reflecting more spacious suburban housing with gardens and parks.' },
              { type: 'stat', text: 'Average age: 37 (six years older than Newham). Fertility rate: 57/1,000 — lower because couples here tend to be older, wealthier, and have fewer children later in life.' },
              { type: 'argument', text: 'Kingston is characterised by wealthy high-income couples who left central London to raise families in a more suburban environment. The borough offers 12 trains per hour into central London, combining accessibility with higher quality of life.' },
              { type: 'argument', text: 'Only 20% of Kingston residents are overseas migrants, compared to 55% in Newham. This reflects the higher house prices and living costs acting as a barrier to recent immigrants, who tend to cluster in cheaper inner-city areas.' },
              { type: 'evaluation', text: 'Kingston demonstrates how the rural-urban continuum is not just about distance from the CBD but also about socio-economic filtering — wealth determines where on the continuum people can afford to live, creating demographic segregation.' },
              { type: 'link', text: 'Link to life-cycle model: Kingston attracts the "family formation" stage (30s-40s couples with children), while Newham attracts the "young adult" stage (20s singles and couples), showing how the urban hierarchy sorts populations by age and income.' },
              { type: 'evaluation', text: 'The population structure of outer London is transitioning — as house prices rise, younger families are pushed further out, potentially making Kingston older and more affluent over time, deepening the contrast with inner boroughs.' },
            ],
          },
          {
            label: 'Rural-Urban Fringe\n(Winchester)',
            color: '#51cf66',
            notes: [
              { type: 'stat', text: 'Population: 124,000 at a density of 2,300/km². Average age: 48 — seventeen years older than Newham, illustrating the dramatic age shift along the continuum.' },
              { type: 'stat', text: 'Fertility rate: just 35/1,000 — less than half that of inner London. The population is almost entirely UK-born with minimal international migration.' },
              { type: 'argument', text: 'Winchester is a medieval market town located 65 miles from London (1hr 20min by train), making it accessible enough for affluent commuters but far enough to retain its historic character. It functions as a popular retirement destination for wealthy former Londoners.' },
              { type: 'argument', text: 'The age structure is weighted heavily towards older people because of counter-urbanisation — wealthy retirees sell expensive London properties and buy cheaper, larger homes in attractive historic towns, while young people leave for university and employment in cities.' },
              { type: 'evaluation', text: 'Winchester challenges the simple rural-urban model because it is not truly rural (2,300/km²) yet has a population structure more typical of a rural area — showing that the continuum is shaped by socio-economic character as much as physical distance.' },
              { type: 'link', text: 'Counter-urbanisation has pushed house prices up by 40% in similar areas (Cotswolds data), with average homes at £310,000, pricing out young local workers and reinforcing the ageing population structure.' },
              { type: 'evaluation', text: 'The low fertility and ageing population creates a dependency ratio challenge — fewer working-age people to fund services for an increasing elderly population, potentially threatening the sustainability of the settlement.' },
            ],
          },
          {
            label: 'Rural\n(N. Yorkshire)',
            color: '#339af0',
            notes: [
              { type: 'stat', text: 'Population: 602,000 across a vast area at just 68/km² — over 125 times less dense than Newham. Average age: 40. Fertility rate: 37/1,000.' },
              { type: 'argument', text: 'North Yorkshire has an ageing population that is actively losing younger people through rural-to-urban migration. Young adults leave for education, employment, and social opportunities in cities like Leeds and York, creating a demographic drain.' },
              { type: 'argument', text: 'The area includes remote Pennines and North York Moors — physical isolation limits employment opportunities and public transport, making it impractical for young workers who need access to urban labour markets.' },
              { type: 'casestudy', text: 'International migration to rural N. Yorkshire is minimal because there are few migrant networks, limited employment diversity, and no established ethnic communities to attract chain migration — the opposite of Newham where established communities pull in new migrants.' },
              { type: 'evaluation', text: 'The ageing population structure of rural areas is self-reinforcing: fewer young people means fewer births, fewer services (schools/shops close), which makes the area less attractive to young families, accelerating the decline further.' },
              { type: 'evaluation', text: 'However, COVID-19 and remote working have begun to reverse some rural decline — if sustained, this could partially rejuvenate rural population structures, though evidence so far suggests it mainly benefits wealthier professionals rather than addressing structural youth exodus.' },
              { type: 'link', text: 'Link to Cotswolds: without a car, rural residents are "islands in the ocean" — 42% have access to a weekly GP surgery, transport is patchy, and teenagers have very limited social/recreational options, all pushing young people towards cities.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Population structure varies dramatically across the rural-urban continuum: density drops 130-fold, fertility halves, average age rises by 17 years, and ethnic diversity falls from 55% foreign-born to almost zero from inner London to rural Yorkshire.' },
              { type: 'evaluation', text: 'The primary driver of variation is migration — both international (concentrating young diverse populations in cities) and internal (moving older wealthy populations outward). Natural increase is a consequence rather than a cause of these migration patterns.' },
              { type: 'argument', text: 'Economic factors underpin the pattern: housing costs sort populations by income, employment opportunities concentrate young workers in cities, and retirement choices distribute older populations to attractive rural/semi-rural areas.' },
              { type: 'evaluation', text: 'However, the continuum model oversimplifies — Kingston (outer London) is more like Winchester than Newham in many ways, and North Yorkshire cities like York have youthful university populations. The continuum is not a smooth gradient but a complex mosaic.' },
              { type: 'evaluation', text: 'Planning policy, accessibility, and historical legacy are as important as position on the continuum — the 2012 Olympics transformed Newham\'s structure more than any "natural" process, while Winchester\'s medieval character attracts a specific demographic regardless of its distance from London.' },
              { type: 'link', text: 'Overall judgement: population structure varies extensively along the continuum, but the variation is driven more by economic and migration forces than by the rural-urban position itself. The continuum is a useful framework but not a sufficient explanation.' },
            ],
          },
        ],
      },

      // DP-02: Internal Migration
      {
        id: 'dp-02',
        num: '02',
        title: 'Internal Migration in the UK',
        question: 'Evaluate the causes and consequences of internal migration within the UK for both source and destination regions.',
        marks: 20,
        center: 'Internal Migration\nin the UK',
        branches: [
          {
            label: 'London\nOut-Migration',
            color: '#ff6b6b',
            notes: [
              { type: 'stat', text: 'Pre-COVID London experienced the greatest outward internal migration in the UK: 55,000 people left in 2016 (a rate of 6 per 1,000). By 2019/20, this surged to 94,000 leaving London.' },
              { type: 'argument', text: 'The primary cause is housing affordability — London inflation has been 73% overall but house prices have risen 1,000% between 1995 and 2020. Households spend up to 60% of their income on housing compared to the UK average of 25%.' },
              { type: 'argument', text: 'Out-migration is primarily from affluent areas, driven by families seeking more space, gardens, and better schools outside London. Poorer areas paradoxically see net in-migration as they receive displaced workers from more expensive boroughs.' },
              { type: 'casestudy', text: 'Post-COVID, migration patterns accelerated dramatically — net migration into London collapsed to just 10,000 increase in 2020/21 compared to 79,500 net international migrants pre-COVID. Remote working removed the need for proximity to central London offices.' },
              { type: 'evaluation', text: 'London out-migration is selective: it exports working-age families with capital (from property sales) to destination regions, while retaining the very young (students/new workers) and very poor (unable to afford to leave), creating a polarised population.' },
              { type: 'argument', text: 'Despite being the UK\'s highest poverty area after housing costs, London still has the largest natural increase (82,900 births minus deaths, representing 40% of the entire UK total) — because the young migrant population has high fertility rates.' },
              { type: 'evaluation', text: 'The long-term consequence for London is a loss of middle-class families and tax revenue, while destination regions gain human and financial capital but face pressure on housing, infrastructure, and local services.' },
            ],
          },
          {
            label: 'Intra-Urban\nMovement',
            color: '#ffa94d',
            notes: [
              { type: 'argument', text: 'Within cities, internal migration follows a life-cycle model: young single people move near the CBD for employment, nightlife, and social networks, while older families move further out to suburbs for space and schools.' },
              { type: 'argument', text: 'Young families typically move to the newest suburban developments on the urban fringe, where new-build estates offer affordable family homes with gardens. This creates distinct age-profile zones radiating outward from the city centre.' },
              { type: 'stat', text: 'Inner city areas are characterised by high proportions of rented and small housing units — bedsits, studio flats, and HMOs. This housing stock naturally attracts single young adults and deters families.' },
              { type: 'casestudy', text: 'The Notting Hill area of London demonstrates how intra-urban migration transforms places — originally a working-class Caribbean immigrant area (hosting the Notting Hill Carnival since 1966, now attracting 2.5 million annually), it has been gentrified by wealthy professionals.' },
              { type: 'evaluation', text: 'Intra-urban migration is the mechanism through which gentrification operates: wealthier in-migrants displace lower-income residents who are pushed to cheaper areas, creating a ripple effect of demographic change across the city.' },
              { type: 'evaluation', text: 'However, intra-urban patterns are not purely voluntary — housing benefit cuts since 2010 have forced low-income families out of central boroughs, making "choice" of location increasingly determined by government welfare policy rather than personal preference.' },
            ],
          },
          {
            label: 'Counter-\nUrbanisation',
            color: '#51cf66',
            notes: [
              { type: 'argument', text: 'Counter-urbanisation — the movement of people from cities to rural/semi-rural areas — has been accelerated by remote working, improved broadband, and the COVID-19 pandemic. It is driven by quality-of-life aspirations: larger homes, gardens, lower crime, and scenic environments.' },
              { type: 'stat', text: 'In the Cotswolds, counter-urbanisation combined with remote working has pushed house prices up by 40%. The average home costs £310,000, well beyond the reach of local rural workers in farming and tourism.' },
              { type: 'casestudy', text: 'The Cotswolds illustrates consequences: new affordable housing projects are contested by wealthy homeowner NIMBYs, while young people and key workers cannot afford to live in the communities where they work or grew up.' },
              { type: 'argument', text: 'Counter-urbanisation causes are both push (high urban housing costs, crime, pollution, congestion) and pull (rural idyll perception, space, community). Remote working has removed the biggest barrier — the need to commute daily.' },
              { type: 'evaluation', text: 'The consequence for destination rural areas is paradoxical: economically they gain spending power and investment, but socially they lose community cohesion as local families are priced out and replaced by commuters with weaker local ties.' },
              { type: 'evaluation', text: 'Counter-urbanisation is class-selective — it is overwhelmingly driven by middle-class professionals. Rural areas receiving these migrants become wealthier but less diverse, while source cities lose tax-paying families but retain ethnic diversity.' },
            ],
          },
          {
            label: 'COVID & Brexit\nImpact',
            color: '#339af0',
            notes: [
              { type: 'stat', text: 'Net migration into London collapsed post-COVID: only 10,000 net increase compared to pre-COVID figures of 79,500 international migrants and 82,900 natural increase annually.' },
              { type: 'argument', text: 'COVID accelerated existing out-migration trends by proving remote working was viable for millions of workers. The "race for space" saw families leaving cramped London flats for suburban and rural homes, pushing up prices in destination regions.' },
              { type: 'argument', text: 'Brexit reduced international migration flows into London, particularly from Eastern Europe, compounding COVID effects. Together they represented the biggest disruption to London\'s population growth model in decades.' },
              { type: 'evaluation', text: 'However, many predicted a permanent urban exodus that has not fully materialised — hybrid working still requires some city presence, and London\'s cultural attractions, employment diversity, and social networks continue to draw young people.' },
              { type: 'evaluation', text: 'The long-term consequence may be a restructuring rather than a decline: London becomes even more polarised between young/diverse/poor populations and wealthy global investors, while the Home Counties and commuter belt absorb middle-class families.' },
              { type: 'link', text: 'Link to London statistics: pre-COVID London had the largest international migration (43% of UK total), the largest natural increase (40% of UK total), and the greatest outward internal migration. These three flows created a "demographic engine" that COVID disrupted.' },
            ],
          },
          {
            label: 'Consequences &\nEvaluation',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Source regions (London): internal out-migration causes loss of middle-class tax base, ageing of remaining population, increased demand for social housing, and service strain from younger/poorer demographic. But London\'s international migration and natural increase offset this.' },
              { type: 'evaluation', text: 'Destination regions (rural/suburban): receive financial capital (from London property sales) and human capital (skilled workers), but face housing inflation, service pressure, cultural tension with existing communities, and loss of local character.' },
              { type: 'argument', text: 'Internal migration widens regional inequality in some ways (London retains global city status while draining regional talent) but narrows it in others (out-migration spreads wealth and demand to previously declining areas).' },
              { type: 'casestudy', text: 'The Cotswolds case shows destination consequences clearly: without a car residents are "islands in the ocean", only 42% have weekly GP access, teenagers have very limited options, and 40% decline in school funding has closed middle schools — problems worsened by population influx.' },
              { type: 'evaluation', text: 'Overall judgement: internal migration is primarily driven by economic factors (housing costs, employment) and enabled by technology (remote working, transport). Its consequences are deeply unequal — benefiting mobile, wealthy, skilled workers while trapping and displacing the poor.' },
              { type: 'link', text: 'Link to DP-01: internal migration is the primary mechanism creating variation in population structure across the rural-urban continuum. The patterns described in Q1 are the RESULT of the migration processes described here.' },
            ],
          },
        ],
      },

      // DP-03: Population Characteristics
      {
        id: 'dp-03',
        num: '03',
        title: 'Population Characteristics',
        question: 'Evaluate the extent to which past and present migration flows have shaped the demographic and cultural characteristics of places in the UK.',
        marks: 20,
        center: 'Migration Shaping\nUK Population\nCharacteristics',
        branches: [
          {
            label: 'London\nImmigration History',
            color: '#ff6b6b',
            notes: [
              { type: 'casestudy', text: '1656: Jewish people allowed to resettle in England for the first time since their expulsion in 1290, establishing one of London\'s earliest distinct migrant communities and a precedent for religious tolerance.' },
              { type: 'casestudy', text: 'Mid-18th century: London had a significant Black population plus a smaller South Asian community — migration to London is not a modern phenomenon but has been shaping the city\'s character for over 250 years.' },
              { type: 'casestudy', text: 'Early-mid 19th century: Irish workers arrived in huge numbers to build infrastructure (railways, canals, docks). An Italian quarter developed in Clerkenwell. The port area became cosmopolitan with sailors and traders from across the Empire.' },
              { type: 'casestudy', text: 'Late 19th century: the East End became home to Jewish refugees from Eastern Europe plus a small Chinese community. Black and Asian people entered freely as British Empire subjects. German and Italian populations grew significantly.' },
              { type: 'argument', text: 'Each wave of migration left a lasting cultural imprint — place names, religious buildings, food cultures, festivals, and community institutions that persist long after the original migrants assimilated or moved on.' },
              { type: 'evaluation', text: 'London\'s history shows that migration is cumulative — each new wave layers upon previous ones, creating a complex multi-ethnic tapestry. Today\'s diversity is not a sudden change but the product of centuries of migration.' },
              { type: 'argument', text: 'Post-WW2: the Windrush generation from the Caribbean (1948 onwards), followed by South Asian migration from India, Pakistan, and Bangladesh, transformed the demographic profile of entire boroughs and created the multicultural London of today.' },
            ],
          },
          {
            label: 'Social\nClustering',
            color: '#ffa94d',
            notes: [
              { type: 'argument', text: 'Recent migrants gravitate towards areas with high existing ethnic concentrations because of language support, cultural familiarity, religious institutions, and established networks that help with finding housing and employment.' },
              { type: 'argument', text: 'Non-English speakers cluster together out of practical necessity — shops, services, and social life can operate in their native language, reducing the isolation and barriers faced by new arrivals.' },
              { type: 'stat', text: 'The highest social classes show the lowest ethnic concentration — wealth enables choice of location based on housing quality rather than community support, so affluent migrants disperse while poorer migrants cluster.' },
              { type: 'stat', text: 'More qualifications correlate with less clustering, and more paid workers in a household correlates with less clustering — education and employment provide integration pathways that reduce dependence on ethnic community networks.' },
              { type: 'evaluation', text: 'Social clustering is both a product of choice (cultural preference) and constraint (economic necessity) — distinguishing between the two is essential for understanding whether segregation is voluntary community-building or forced exclusion.' },
              { type: 'evaluation', text: 'Over generations, clustering typically reduces as second and third generation migrants gain education, employment, and language skills that enable dispersal — but this process can be disrupted by discrimination and economic inequality.' },
            ],
          },
          {
            label: 'Ethnic\nVillages',
            color: '#51cf66',
            notes: [
              { type: 'casestudy', text: 'A German school and bakery in Richmond, a French Lycée in Kensington — even wealthy European migrants create ethnic clusters, showing that clustering is not just a poverty phenomenon but a universal human desire for cultural community.' },
              { type: 'stat', text: 'The UK has the 2nd largest French expatriate population in the world — these are overwhelmingly affluent professionals in finance and business, concentrated in west London, creating a distinctive Franco-British cultural zone.' },
              { type: 'argument', text: 'Ethnic villages develop their own infrastructure: shops selling culturally specific goods, places of worship, schools teaching in community languages, cinemas showing films from home countries, and community newspapers maintaining cultural links.' },
              { type: 'evaluation', text: 'Ethnic villages demonstrate that migration shapes places culturally as well as demographically — they change the built environment, the economic character, the sensory experience (sounds, smells, visual landscape), and the social norms of an area.' },
              { type: 'link', text: 'The Notting Hill Carnival (established 1966 by Claudia Jones, a Trinidad writer and editor of "The West Indian Gazette") is the largest street festival in Europe with 2.5 million attendees — a single migrant community\'s cultural practice became a defining feature of London.' },
              { type: 'evaluation', text: 'However, ethnic villages can also reinforce segregation — if communities become too insular, they may resist integration and create parallel societies, raising questions about social cohesion and shared national identity.' },
            ],
          },
          {
            label: 'South Asians\nin London',
            color: '#339af0',
            notes: [
              { type: 'stat', text: '35% of all UK Asians live in London. 437,000 Indians call London home. 54% of all UK Bangladeshis live in London — this extreme concentration shows how migration creates place-specific demographic profiles.' },
              { type: 'casestudy', text: 'Southall in west London hosts the largest Sikh community outside Punjab, with gurdwaras, Punjabi shops, three weekly Punjabi newspapers, and a street environment that is culturally more South Asian than British — a complete cultural transformation of place.' },
              { type: 'stat', text: 'Bangladeshi unemployment is the highest of any ethnic group in the UK. 54% of Bangladeshi women and 52% of Pakistani women are economically inactive — migration has shaped demographics but economic integration remains deeply unequal.' },
              { type: 'argument', text: 'South Asian migration to London was driven by post-colonial connections (Empire), economic opportunity, and chain migration. Once a critical mass settled, the community infrastructure (temples, shops, cultural centres) attracted further migration in a self-reinforcing cycle.' },
              { type: 'stat', text: '50% of male Pakistani, Black African and Bangladeshi workers are employed in restaurants and hotels — low-skilled, low-paid sector concentration. 67% of employed Bangladeshi women and 66% of Caribbean women are in low-skilled jobs (mainly NHS/social care).' },
              { type: 'evaluation', text: 'South Asian communities demonstrate the paradox of migration — they have profoundly shaped the cultural character of London (food, religion, festivals, enterprise) while simultaneously experiencing some of the worst economic outcomes and deepest poverty in the UK.' },
              { type: 'evaluation', text: '40% of ethnic minorities live in low-income households — twice the poverty rate of white British. 65% of Bangladeshis are in low-income employment vs just 10% of white British. Migration has shaped demographics and culture but not eliminated structural inequality.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Migration is clearly the PRIMARY driver of the UK\'s demographic and cultural characteristics — without centuries of migration, London would not have 300+ languages, Newham would not be 55% foreign-born, and entire cultural landscapes (Brick Lane, Southall, Chinatown) would not exist.' },
              { type: 'evaluation', text: 'However, migration alone is insufficient — economic factors determine WHERE migrants settle (cheap housing), HOW they integrate (employment opportunities), and WHETHER they cluster or disperse (wealth and education levels).' },
              { type: 'argument', text: 'Government policy has shaped migration impacts: the British Empire enabled free movement of subjects, post-war labour recruitment actively brought specific groups, and housing policy (social housing allocation, housing benefit) concentrated migrants in particular areas.' },
              { type: 'evaluation', text: 'Past migration flows created the conditions for present ones through chain migration — established communities attract new migrants from the same origin, explaining why specific nationalities concentrate in specific boroughs decades after the original migration wave.' },
              { type: 'evaluation', text: 'The cultural impact of migration is overwhelmingly positive in terms of diversity, creativity, and economic dynamism, but it has also created tensions around segregation, inequality, and contested identities — the character of UK places is both enriched and complicated by migration.' },
              { type: 'link', text: 'Overall judgement: past and present migration flows have been the dominant force shaping UK demographics and culture, but their impact is mediated by economic conditions, government policy, and social attitudes. The extent of shaping is greatest in cities and minimal in rural areas.' },
            ],
          },
        ],
      },

      // DP-04a: Jersey & Newham - Connections
      {
        id: 'dp-04a',
        num: '04a',
        title: 'Jersey & Newham - Connections',
        question: 'Evaluate the extent to which national, regional and international connections have shaped the contrasting characteristics of one local and one contrasting place you have studied.',
        marks: 20,
        center: 'Connections Shaping\nJersey & Newham',
        branches: [
          {
            label: 'Jersey\nNational/Regional',
            color: '#ff6b6b',
            notes: [
              { type: 'casestudy', text: 'Steamships from 1823 connected Jersey to mainland Britain, bringing 5,000 English settlers by 1840 — mainly half-pay military officers and their families attracted by Jersey\'s lower cost of living and pleasant climate.' },
              { type: 'argument', text: 'The absence of income tax attracted wealthy British families throughout the 19th and 20th centuries, establishing a pattern where Jersey\'s national connections were shaped by tax advantages rather than employment, creating a distinctly affluent British expatriate community.' },
              { type: 'casestudy', text: 'Seasonal agricultural workers came from Brittany and Normandy due to geographic proximity — Jersey is closer to France than to England. After 1945, UK mainland workers arrived for agriculture, adding another national layer to Jersey\'s population.' },
              { type: 'stat', text: 'Jersey\'s population was stable at approximately 60,000 until the 1960s, then economic growth (shift from tourism to finance) drove it to 110,000 by 2011 — nearly doubling in 50 years, entirely driven by changing national and international economic connections.' },
              { type: 'argument', text: 'Jersey has distinct population laws governing who can stay based on their economic role — this is a unique form of managed national connection where the island actively selects migrants based on their contribution to the finance-dominated economy.' },
              { type: 'stat', text: '51% of Jersey\'s population are non-native: 38% from the UK mainland and 11% mainly Portuguese. The population pyramid shows two distinct peaks — late 20s-30s (workers) and 65+ (retirees) — directly reflecting the two types of national connection.' },
            ],
          },
          {
            label: 'Jersey\nInternational',
            color: '#ffa94d',
            notes: [
              { type: 'argument', text: 'Jersey is one of the most internationally outward-looking places in Europe due to its offshore financial status, which attracts global finance and accounting firms. International connections are overwhelmingly economic and specifically financial in character.' },
              { type: 'casestudy', text: 'A strong link to Madeira, Portugal developed from the 1960s when Portuguese workers arrived for seasonal agriculture and tourism. Family links meant many stayed permanently, creating a self-sustaining chain migration from one specific international origin.' },
              { type: 'stat', text: '96% of Jersey\'s 11,000 Portuguese residents live in St Helier (population 33,000), meaning roughly 1 in 3 St Helier residents are Portuguese — this extreme concentration has created a distinctly Portuguese cultural quarter within the island\'s capital.' },
              { type: 'stat', text: 'St Helier is the 11th most densely populated capital city in the world — an astonishing statistic for a small island, driven by the concentration of both finance workers and service-sector immigrants in the main town.' },
              { type: 'argument', text: 'The finance industry shifted Jersey\'s dominant connection from tourism (domestic British holidaymakers) to global finance (international capital flows) from the 1980s onwards, fundamentally transforming the island\'s economy, demographics, and cultural character.' },
              { type: 'evaluation', text: 'Jersey\'s international connections are highly selective — it attracts either very wealthy finance professionals or lower-paid Portuguese service workers, creating a dual economy with little middle ground. The connections shape the population structure into a bimodal distribution.' },
            ],
          },
          {
            label: 'Newham\nNational/Regional',
            color: '#e85d75',
            notes: [
              { type: 'casestudy', text: 'Newham\'s name dates from the 1960s — "Ham" or "Hamme" is Anglo-Saxon for marsh, giving rise to West Ham FC. The area has a long history of ethnic diversity stretching back to Roman and Medieval docks when sailors and traders from across the known world passed through.' },
              { type: 'argument', text: 'Newham became London\'s most diverse area because of its port history and, critically, because WW2 bombing destroyed much of the housing stock. Post-war rebuilding produced cheap, low-quality housing that attracted successive waves of migrants who could not afford other London boroughs.' },
              { type: 'stat', text: 'Newham is London\'s most diverse borough with white British forming the smallest percentage. Large Asian communities have been established for decades — over 50% of Upton and Kensington wards were ethnic minority by 1981.' },
              { type: 'argument', text: 'Affordable housing was the key national/regional connection — Newham attracted a wide range of groups precisely because it was cheap and accessible. Regional transport links (tube, rail) connected it to central London employment while keeping housing costs below inner London levels.' },
              { type: 'evaluation', text: 'Newham has the lowest life expectancy and highest heart disease rate in London, and it is consistently rated among the poorest and most deprived boroughs — its national connections have brought diversity but not prosperity, suggesting connections alone do not ensure positive outcomes.' },
            ],
          },
          {
            label: 'Newham\nInternational',
            color: '#339af0',
            notes: [
              { type: 'stat', text: 'Every ethnic group in London is represented in Newham: Indian 14%, African 12%, Bangladeshi 12%, Pakistani 10%. The non-UK born population grew by 72,000, with 55% of total residents born outside the UK.' },
              { type: 'casestudy', text: 'The 2012 Olympics brought £9 billion of international investment to the area, transforming Stratford into a transport hub (2nd most connected after Kings Cross) and putting Newham on the global property map as an "up and coming" investment opportunity.' },
              { type: 'argument', text: 'Chinese and Middle Eastern property investment is now casting a long shadow over Newham — 2/3 of private homes in new developments were bought by overseas buyers, meaning international capital is reshaping the housing market for local residents.' },
              { type: 'evaluation', text: 'Some commentators see slow but irreversible change driven by international property investment — as global capital flows in, local working-class communities are displaced by market forces beyond their control or the control of local government.' },
              { type: 'evaluation', text: 'Newham\'s international connections are fundamentally different from Jersey\'s — they are driven by poverty and necessity (cheap housing attracting migrants) rather than wealth and choice (tax advantages attracting finance). Both are international, but the outcomes are opposite.' },
              { type: 'link', text: 'The contrast between Jersey and Newham shows that the NATURE of connections matters more than their existence — Jersey\'s selective, finance-driven connections create wealth, while Newham\'s open, poverty-driven connections perpetuate deprivation despite extraordinary cultural richness.' },
            ],
          },
          {
            label: 'Evaluation\n& Comparison',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Both Jersey and Newham have been profoundly shaped by national, regional, and international connections — but the TYPE of connections differs completely. Jersey attracts wealthy individuals through tax incentives; Newham attracts diverse migrants through cheap housing.' },
              { type: 'evaluation', text: 'Jersey demonstrates selective, managed connections (population laws, visa requirements, economic filtering) that maintain prosperity but limit diversity. Newham demonstrates open, market-driven connections that create extraordinary diversity but perpetuate poverty.' },
              { type: 'argument', text: 'International connections have been the most transformative for both places — Jersey\'s shift to global finance doubled its population, while Newham\'s position as a global migrant gateway made it the most ethnically diverse borough in London.' },
              { type: 'evaluation', text: 'National connections provide the framework (tax policy, transport links, housing markets) within which international connections operate. Without Jersey\'s tax status or Newham\'s cheap post-war housing, neither place would have developed its current characteristics.' },
              { type: 'evaluation', text: 'Overall judgement: connections have shaped both places to an extreme extent — arguably more than any other factor. However, it is the economic and political character of those connections, not just their existence, that determines whether places become wealthy and exclusive (Jersey) or diverse and deprived (Newham).' },
            ],
          },
        ],
      },

      // DP-04b: Jersey & Newham - Economic Change
      {
        id: 'dp-04b',
        num: '04b',
        title: 'Jersey & Newham - Economic Change',
        question: 'Assess the extent to which economic change has influenced the demographic structure and cultural identity of two contrasting places.',
        marks: 20,
        center: 'Economic Change\nInfluencing Identity\nin Jersey & Newham',
        branches: [
          {
            label: 'Jersey\nEconomic Shift',
            color: '#ff6b6b',
            notes: [
              { type: 'argument', text: 'Jersey\'s economy shifted from tourism to finance in the 1980s, fundamentally transforming the island\'s demographic structure. The finance industry attracted young, educated, high-earning professionals from the UK and internationally, creating the peak of 20s-30s in the population pyramid.' },
              { type: 'stat', text: 'Population grew from 60,000 to 110,000 between 1980 and 2011 — almost entirely driven by the finance sector\'s demand for workers. This 83% population increase in three decades was purely economic in origin.' },
              { type: 'argument', text: 'The shift from tourism to finance changed the TYPE of migrant Jersey attracted — from seasonal, low-skilled holiday workers to permanent, high-skilled financial professionals. This transformed the cultural identity from a seaside holiday destination to a global financial centre.' },
              { type: 'casestudy', text: 'The Portuguese community (11,000, 96% in St Helier) arrived from the 1960s initially for seasonal agriculture and tourism but stayed to fill service-sector roles supporting the growing finance industry — their cultural identity within Jersey is directly linked to economic restructuring.' },
              { type: 'evaluation', text: 'Economic change created a dual demographic structure visible in the population pyramid\'s two peaks: young finance workers (20s-30s) and wealthy retirees (65+). This bimodal structure is entirely the product of Jersey\'s economic function as a tax haven and financial centre.' },
              { type: 'evaluation', text: 'Jersey\'s cultural identity has been reshaped from a quintessentially British seaside community to an internationally diverse financial hub — English-speaking but with significant Portuguese, French, and global cultural influences driven entirely by economic connections.' },
            ],
          },
          {
            label: 'Newham\nEconomic Change',
            color: '#ffa94d',
            notes: [
              { type: 'argument', text: 'Newham\'s economic history is defined by the London Docks — the Thames is tidal, and before container ships, boats sailed up the Thames to dock in East London. This created a working-class, ethnically diverse area centred on manual port labour.' },
              { type: 'casestudy', text: 'The closure of the docks in the 1960s-80s devastated Newham\'s economy, creating mass unemployment and deprivation. The area developed into one of London\'s poorest, with cheap housing attracting wave after wave of migrants who could not afford other boroughs.' },
              { type: 'argument', text: 'WW2 bombing targeted the docks heavily, destroying housing stock. Quick post-war rebuilding produced tower blocks and cheap estates — "streets in the sky" high-rise replaced Victorian slums in the 1960s. This economic-driven housing shaped who could live there.' },
              { type: 'casestudy', text: 'The 2012 Olympics represented the biggest economic change in Newham\'s modern history: £9bn investment, 7,000 temporary and 5,000 construction jobs, 200 buildings demolished and recycled, house prices rose by a third, and Stratford became the 2nd most connected area in London.' },
              { type: 'evaluation', text: 'However, Olympic regeneration had mixed effects on demographic structure: only 20% of jobs went to locals, 380 companies (11,000 people) were relocated (some forcibly moved), and 2/3 of private homes were bought by overseas buyers — economic change benefited outsiders more than residents.' },
              { type: 'stat', text: 'The 2009 financial crisis led to 40% council budget cuts by 2013. Council houses fell by 300,000 since 1997 while London\'s population grew by 1 million. 16,000 people remain on the housing waiting list — economic change creates demographic pressure without resolving it.' },
            ],
          },
          {
            label: 'Cultural\nIdentity Impact',
            color: '#51cf66',
            notes: [
              { type: 'argument', text: 'In Jersey, economic change from tourism to finance shifted the cultural identity from a traditional British seaside community to a cosmopolitan financial hub. Portuguese bakeries sit alongside British pubs and French-influenced cuisine, creating a unique multicultural identity.' },
              { type: 'argument', text: 'In Newham, economic decline followed by regeneration created a layered cultural identity — the working-class docklands heritage, the post-war immigrant communities (Caribbean, South Asian, African), and now the post-Olympic gentrification newcomers all coexist in tension.' },
              { type: 'casestudy', text: 'The Carpenters Estate in Newham symbolises the cultural impact of economic change: council-owned flats left empty for 8+ years waiting for property prices to rise, while 16,000 families waited on the housing list. The council effectively prioritised economic returns over community.' },
              { type: 'evaluation', text: 'Economic change in both places has created "winners and losers" in cultural terms — Jersey\'s Portuguese service workers maintain their culture but occupy low-status economic roles, while Newham\'s diverse communities are increasingly displaced by property-driven gentrification.' },
              { type: 'evaluation', text: 'Cultural identity is not just shaped by WHO lives in a place but by WHAT they do — Jersey\'s finance identity is very different from its former tourism identity, and Newham\'s Olympic/regeneration identity differs from its docklands/working-class heritage.' },
            ],
          },
          {
            label: 'Demographic\nStructure Impact',
            color: '#339af0',
            notes: [
              { type: 'argument', text: 'Jersey\'s finance economy created a bimodal population pyramid (young workers + retirees) with minimal middle-aged population — the economic structure directly determines who migrates to and from the island.' },
              { type: 'argument', text: 'Newham\'s economic deprivation created a young, diverse demographic because cheap housing attracted young migrants with high fertility rates (76/1000) — the average age of 31 is a direct consequence of economic factors making it affordable for young people.' },
              { type: 'stat', text: 'Newham: average age 31, 55% foreign-born, fastest growing UK borough (+25%). Jersey: 51% non-native, but with a managed population law system filtering migrants by economic role. Both are shaped by economics but through opposite mechanisms.' },
              { type: 'evaluation', text: 'Economic change has been the dominant influence on demographic structure in both places. In Jersey, prosperity attracts selected workers; in Newham, deprivation attracts displaced communities. Both produce young, diverse populations but for fundamentally different reasons.' },
              { type: 'evaluation', text: 'Overall judgement: economic change has influenced demographic structure and cultural identity to an extreme extent in both places — arguably it is THE determining factor. However, the direction of economic change (growth vs decline, finance vs regeneration) produces very different demographic and cultural outcomes.' },
            ],
          },
          {
            label: 'Comparative\nEvaluation',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'The comparison reveals that economic change does not have a single effect on demographics/culture — it depends on the TYPE of economic change. Finance growth (Jersey) creates affluent selectivity; industrial decline (Newham) creates diverse deprivation.' },
              { type: 'evaluation', text: 'Both places show that economic change is the most powerful shaping force, but it operates through different mechanisms: Jersey through managed migration policy linked to economic needs; Newham through housing market dynamics and unmanaged community formation.' },
              { type: 'argument', text: 'Government intervention mediates the relationship between economic change and demographics — Jersey\'s population laws actively filter migrants, while Newham\'s council has been a "key player" through regeneration but has limited power against global capital flows.' },
              { type: 'link', text: 'The 2012 Olympics and Jersey\'s finance shift both show how a single economic event can transform demographic structure and cultural identity within a generation — economic change is rapid and its demographic effects are equally swift.' },
              { type: 'evaluation', text: 'Overall: economic change has been THE dominant influence on both places. While other factors (historical legacy, geography, politics) matter, they are all secondary to the fundamental economic function that determines who comes, who stays, and what kind of community develops.' },
            ],
          },
        ],
      },

      // DP-05: Perception of Place
      {
        id: 'dp-05',
        num: '05',
        title: 'Perception of Place',
        question: 'Evaluate the extent to which urban places can be perceived differently by contrasting groups of people.',
        marks: 20,
        center: 'Perception of\nUrban Places',
        branches: [
          {
            label: 'Medellín\nPositive Perceptions',
            color: '#ff6b6b',
            notes: [
              { type: 'casestudy', text: 'Medellín was named Urban Land Institute\'s "Innovative City of the Year" — perceived by urban planners and policymakers as a model of how even the most dangerous cities can be transformed through creative infrastructure investment.' },
              { type: 'casestudy', text: 'The city won the 2016 Lee Kuan Yew World City Prize, often called the "Nobel Prize of urbanism", recognising its transformation from one of the world\'s most violent cities to an outstanding, liveable urban environment.' },
              { type: 'argument', text: 'Cable cars and mobile stairways were installed for public transit, deliberately weighted towards the poorest hillside barrios. This practical investment was perceived as symbolic — the government was literally connecting excluded communities to the city centre.' },
              { type: 'evaluation', text: 'International organisations and urban planners perceive Medellín as a success story of inclusive urbanism, but this perception may be influenced by the dramatic before/after narrative rather than the current reality of life for ordinary residents.' },
              { type: 'argument', text: 'Medellín\'s positive perception demonstrates how EXTERNAL observers (planners, prize committees, tourists) can view a place very differently from internal residents who live with the daily reality of persistent inequality and violence.' },
            ],
          },
          {
            label: 'Medellín\nNegative Perceptions',
            color: '#ffa94d',
            notes: [
              { type: 'stat', text: 'At its peak in 1991, Medellín experienced 16 murders per day — this traumatic history means older residents and those who lived through the violence perceive the city through a lens of fear and loss that no amount of regeneration can fully erase.' },
              { type: 'casestudy', text: 'In the 1970s, Medellín was home to the Medellín Cartel led by Pablo Escobar, which generated an estimated $70 million per day from cocaine trafficking. The city was perceived globally as synonymous with drug violence and lawlessness.' },
              { type: 'argument', text: 'Despite transformation, dangerous areas still exist and few tourists venture out after dark. Local residents, particularly in poorer barrios, perceive ongoing risks that international prize committees and daytime tourists do not experience.' },
              { type: 'evaluation', text: 'The gap between perception and reality is widest for Medellín — international awards celebrate transformation while residents still face poverty, inequality, and localised violence. Media representations swing between extremes of "narco city" and "urban miracle".' },
              { type: 'evaluation', text: 'Medellín demonstrates that perception of place is shaped by TEMPORAL perspective — those who remember the 1990s perceive it differently from young people who only know the transformed city, showing that the same place is perceived differently across generations.' },
            ],
          },
          {
            label: 'Factors Shaping\nPerception',
            color: '#51cf66',
            notes: [
              { type: 'argument', text: 'Media representations are the most powerful shaper of place perception for those who have never visited — TV shows, news reports, and social media create mental images that may bear little relation to lived reality.' },
              { type: 'argument', text: 'Personal experience shapes perception differently from media — a resident\'s daily experience of their neighbourhood (safety, community, services) may be completely at odds with external perceptions based on statistics or news stories.' },
              { type: 'argument', text: 'Socio-economic position determines perception: wealthy residents of gentrified areas perceive urban places as vibrant and exciting, while displaced working-class residents perceive the same changes as threatening and exclusionary.' },
              { type: 'argument', text: 'Age, ethnicity, and gender all filter perception — young men may perceive nightlife areas as exciting while elderly women perceive them as dangerous. Ethnic minorities may perceive areas with diverse communities as welcoming while majority populations perceive them as "changed".' },
              { type: 'evaluation', text: 'Perception is not fixed — it changes with time, experience, and context. The same person may perceive their neighbourhood differently on a sunny Saturday vs a dark winter evening, showing that perception is situational as well as structural.' },
              { type: 'link', text: 'Link to representation: official place branding (council marketing, regeneration language) deliberately constructs positive perceptions to attract investment and residents, often glossing over persistent problems — perception as a managed and contested process.' },
            ],
          },
          {
            label: 'Contrasting\nGroup Perceptions',
            color: '#339af0',
            notes: [
              { type: 'argument', text: 'Property developers and investors perceive regenerating urban areas (like Newham post-Olympics) as opportunities for profit, viewing rising prices and "improvement" positively — while existing residents perceive the same process as gentrification and displacement.' },
              { type: 'casestudy', text: 'Newham\'s 2012 Olympics were perceived as a triumph by national media and politicians, but some forcibly relocated residents perceived it as destruction of their community. Lloyds TSB estimated £10bn extra income, but local critics noted only 20% of jobs went to residents.' },
              { type: 'argument', text: 'Tourists perceive cities through a curated lens of attractions, restaurants, and landmarks. Residents perceive the same city through daily realities of commuting, working, and navigating safety. These are fundamentally different perceptual frameworks.' },
              { type: 'evaluation', text: 'Power dynamics shape whose perception dominates — wealthy developers, national media, and government agencies have more power to define places than the low-income residents who actually live there. Perception is political, not just psychological.' },
              { type: 'evaluation', text: 'Social media has democratised place perception — residents can now challenge official narratives through community campaigns, blogs, and viral posts. However, algorithm-driven media also amplifies extreme perceptions (both positive and negative) over nuanced ones.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Urban places are perceived very differently by contrasting groups — this is beyond doubt. The more interesting question is WHY: perception is shaped by personal experience, media representation, socio-economic position, age, ethnicity, and power dynamics.' },
              { type: 'evaluation', text: 'Medellín provides the strongest evidence: the same city is simultaneously perceived as the world\'s most innovative city (by planners) and as dangerous and drug-riddled (by those who remember the 1990s or live in deprived barrios).' },
              { type: 'evaluation', text: 'Perception matters because it drives behaviour — negative perceptions deter investment and visitors, creating a self-fulfilling decline. Positive perceptions attract capital and people, potentially triggering gentrification. Perception is not neutral; it has material consequences.' },
              { type: 'evaluation', text: 'The extent of perceptual difference depends on the place — more unequal cities with greater contrasts between rich and poor neighbourhoods will show wider gaps in perception between groups. Cities undergoing rapid change (regeneration/decline) show the sharpest perceptual divides.' },
              { type: 'link', text: 'Overall judgement: urban places can be perceived EXTREMELY differently by contrasting groups, and this variation is the norm rather than the exception. Perception is socially constructed, politically contested, and materially consequential.' },
            ],
          },
        ],
      },

      // DP-06: Rural Places
      {
        id: 'dp-06',
        num: '06',
        title: 'Rural Places',
        question: "Evaluate the statement: 'Rural places in the UK are far from the idyllic image often portrayed.'",
        marks: 20,
        center: 'Rural Reality\nvs\nIdyllic Image',
        branches: [
          {
            label: 'Transport\nIssues',
            color: '#ff6b6b',
            notes: [
              { type: 'argument', text: 'Without a car, rural residents are described as living on "islands in the ocean" — physically present in a community but unable to access employment, services, healthcare, or social activities. Car dependency is the defining transport challenge of rural life.' },
              { type: 'argument', text: 'Wealthy residents with cars can access everything the countryside offers — picturesque villages, quality local food, scenic walks — while young people, the elderly, and the poor rely on patchy bus networks and only intercity/commuter railways that do not serve most villages.' },
              { type: 'evaluation', text: 'Transport inequality creates a two-tier rural society: the mobile affluent who experience the idyll, and the immobile poor/elderly/young who experience isolation. The "idyllic" perception is literally the view from a car window.' },
              { type: 'stat', text: 'Only intercity and commuter railway lines serve rural areas — local branch lines have been cut since the Beeching closures of the 1960s. Bus services are often subsidised and under constant threat of cancellation as councils cut budgets.' },
              { type: 'evaluation', text: 'Transport problems compound other issues: without transport, people cannot access healthcare, employment, education, or social opportunities. Transport is therefore the ROOT cause of many other rural deprivation indicators.' },
            ],
          },
          {
            label: 'Housing &\nHealthcare',
            color: '#ffa94d',
            notes: [
              { type: 'stat', text: 'Counter-urbanisation and remote working have pushed Cotswolds house prices up 40%, with the average home costing £310,000. This prices out young local workers in farming and tourism who typically earn well below the average needed for a mortgage.' },
              { type: 'argument', text: 'New affordable housing projects are contested by wealthy homeowners (NIMBYism) who moved to rural areas for the character and low density, and who resist any development that might change the "idyllic" village atmosphere — the idyll is preserved for the wealthy at the expense of the young.' },
              { type: 'stat', text: 'Only 42% of rural Cotswolds residents have access to a weekly GP surgery. Many villages have a surgery open just once a week for a few hours. This is a healthcare desert hidden behind attractive stone cottages.' },
              { type: 'argument', text: 'Long-term in-home care for the elderly is prohibitively expensive in rural areas, meaning many elderly people are moved to care homes in towns — uprooted from the communities they have lived in for decades, breaking social networks and accelerating decline.' },
              { type: 'evaluation', text: 'The housing and healthcare crises directly contradict the idyllic image — rural areas have some of the most acute housing affordability problems and worst healthcare access in the UK, but these are invisible in pastoral marketing images.' },
            ],
          },
          {
            label: 'Economy &\nEmployment',
            color: '#51cf66',
            notes: [
              { type: 'argument', text: 'The rural economy relies heavily on low-level skills in farming and tourism — both characterised by low wages, seasonal employment, and limited career progression. This creates structural poverty that is hidden by the wealthy retirees and commuters who inflate average income statistics.' },
              { type: 'argument', text: 'Farming has been mechanised and consolidated, reducing the number of jobs. Tourism is seasonal, with many businesses only viable for 4-6 months of the year. Young people with ambition leave for cities where there are diverse career opportunities.' },
              { type: 'evaluation', text: 'The rural economy creates a paradox: the area appears prosperous because of wealthy in-migrants, but the local working population experiences poverty, underemployment, and economic insecurity. Average income masks extreme inequality.' },
              { type: 'evaluation', text: 'Remote working could transform rural economies by allowing higher-paid professionals to live and spend locally. However, this primarily benefits already-affluent in-migrants rather than addressing the structural poverty of those in traditional rural employment.' },
            ],
          },
          {
            label: 'Social Issues\n& Youth',
            color: '#339af0',
            notes: [
              { type: 'argument', text: 'Teenagers in rural areas have very limited options — few shops or facilities, towns lack transport to clubs, bars, and entertainment venues. Investment in youth infrastructure is limited, with skate parks and playgrounds often left unmaintained.' },
              { type: 'stat', text: '40% decline in school funding has forced the creation of large 1,000+ pupil secondary schools and academies, closing the middle school system (ages 5-12). Locals feel this has broken community ties as children travel further to larger, impersonal schools.' },
              { type: 'argument', text: 'Rural isolation contributes to mental health problems, loneliness, and substance abuse — issues that are under-reported because they contradict the idyllic narrative and because rural communities often have strong norms against discussing personal problems.' },
              { type: 'evaluation', text: 'Young people\'s experience of rural places is perhaps the strongest argument against the idyllic image — for teenagers, rural life means boredom, isolation, limited opportunities, and the knowledge that they must leave their home community to have a future.' },
              { type: 'evaluation', text: 'Social media has made rural youth acutely aware of the opportunities available in cities, intensifying the perception gap between their daily reality and the lives of urban peers. The idyllic image is an adult construction that bears no relation to teenage experience.' },
            ],
          },
          {
            label: 'Cornwall\nCase Study',
            color: '#f06595',
            notes: [
              { type: 'casestudy', text: 'Case Study: Cornwall epitomises the tension between the rural idyll and rural reality — marketed as a holiday paradise of surf beaches, cream teas, and fishing villages, but it consistently ranks among England\'s most deprived regions with some of the lowest average wages in the country.' },
              { type: 'stat', text: 'Cornwall\'s average earnings are around 70-75% of the national average, yet house prices have been inflated by second-home ownership and holiday lets — in some coastal villages like St Ives, Padstow, and Rock, over 25% of homes are second homes or holiday lets, making local housing unaffordable.' },
              { type: 'argument', text: 'Cornwall\'s economy is heavily dependent on seasonal tourism, which provides low-wage, insecure employment for local workers. Outside the summer season, many businesses close and unemployment rises sharply, creating a cycle of seasonal poverty masked by summer affluence.' },
              { type: 'argument', text: 'Cornwall\'s geographic peripherality compounds its problems — it is 300+ miles from London with limited rail connections and no motorway, making it one of the most isolated parts of England. This remoteness is marketed as an attraction but experienced as a barrier to economic development.' },
              { type: 'evaluation', text: 'Cornwall demonstrates how the same features that create the idyllic image (remoteness, unspoilt landscape, traditional culture) are the very features that cause deprivation — isolation means poor access to services, preservation restricts development, and tourism inflates costs without creating sustainable employment.' },
              { type: 'stat', text: 'Cornwall Council has struggled with depopulation of working-age adults: young people leave for education and employment, creating an ageing demographic profile. Meanwhile, retirees and second-home owners from London and the South East drive up property values.' },
              { type: 'evaluation', text: 'However, Cornwall has seen some success in diversifying its economy through creative industries, digital businesses (exploiting improved broadband), and sustainable food production — suggesting that rural areas can evolve beyond traditional dependence on farming and tourism with the right investment.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'The statement is largely correct — rural places face serious challenges (transport poverty, healthcare deserts, housing affordability, youth isolation, economic insecurity) that are completely absent from the idyllic image of thatched cottages and rolling hills.' },
              { type: 'evaluation', text: 'However, the idyllic image is not entirely false — rural areas DO offer lower crime, cleaner air, scenic beauty, and stronger community bonds for those with the resources (car, income, health) to access them. The idyll is real but accessible only to the affluent.' },
              { type: 'argument', text: 'The idyllic image is actively constructed and maintained by those who benefit from it — property agents market rural "lifestyle", councils brand areas for tourism, wealthy residents resist change that would alter the character. The image is an economic and political product.' },
              { type: 'evaluation', text: 'The extent to which the statement is true depends on WHO you are: a wealthy retired couple with two cars and good health may genuinely experience the idyll, while a young single parent without a car experiences rural poverty and isolation. Both experiences are real and simultaneous.' },
              { type: 'evaluation', text: 'Synoptic: Compare the Cotswolds (inland, affluent, counter-urbanisation driven) with Cornwall (coastal, deprived, tourism-dependent) to show that "rural" is not monolithic — different rural areas face different challenges, but both fall short of the idyllic image in different ways.' },
              { type: 'link', text: 'Overall judgement: the statement is substantially correct. Rural places face genuine, serious challenges that affect specific demographics (young, old, poor, carless) disproportionately. The idyllic image is a selective perception enjoyed by the mobile and affluent minority. The Cotswolds and Cornwall both prove this from different angles.' },
            ],
          },
        ],
      },

      // DP-07: Investigation of Perception
      {
        id: 'dp-07',
        num: '07',
        title: 'Investigation of Perception',
        question: 'Evaluate the usefulness of different methods in determining how people perceive a particular place.',
        marks: 20,
        center: 'Methods for\nInvestigating\nPlace Perception',
        branches: [
          {
            label: 'Quantitative\nMethods',
            color: '#ff6b6b',
            notes: [
              { type: 'argument', text: 'Questionnaires with Likert scales allow large sample sizes and statistical analysis of perceptions — they can identify patterns (e.g., age groups perceiving an area as safe/unsafe) and enable comparison between places or time periods.' },
              { type: 'argument', text: 'Census data and deprivation indices provide objective measures that can be compared against subjective perceptions — if an area scores highly on deprivation but residents report high satisfaction, this reveals an interesting disconnect between statistics and lived experience.' },
              { type: 'evaluation', text: 'Quantitative methods produce generalisable findings but miss nuance — a Likert scale cannot capture WHY someone rates an area 3/5 for safety, or the complex emotional associations that underpin perception. Numbers describe patterns but not meanings.' },
              { type: 'evaluation', text: 'Sampling bias is a major limitation — who responds to questionnaires? Typically literate, engaged, available people. The most marginalised (homeless, non-English speakers, digitally excluded) are the least likely to be sampled, yet their perceptions are most valuable.' },
              { type: 'link', text: 'Environmental quality indices (EQI) measure observable features (litter, graffiti, noise) as proxies for perception, but these assume all people perceive environmental quality the same way — a graffiti mural might be art to some and vandalism to others.' },
            ],
          },
          {
            label: 'Qualitative\nMethods',
            color: '#ffa94d',
            notes: [
              { type: 'argument', text: 'Semi-structured interviews allow in-depth exploration of how and why people perceive places as they do — they can uncover personal histories, emotional attachments, fears, and hopes that quantitative methods completely miss.' },
              { type: 'argument', text: 'Oral histories capture how perceptions change over time — a long-term resident can describe how their perception of a neighbourhood has shifted through decades of change, providing a temporal dimension that snapshot surveys cannot.' },
              { type: 'argument', text: 'Focus groups reveal how perceptions are socially constructed — participants influence each other, debate, and negotiate meanings, reflecting the reality that perception is often a collective rather than purely individual process.' },
              { type: 'evaluation', text: 'Qualitative methods produce rich, detailed data but are time-consuming, expensive, and impossible to generalise from. A few powerful interviews cannot represent the perceptions of an entire population.' },
              { type: 'evaluation', text: 'Researcher positionality is a major concern — the interviewer\'s own background (age, ethnicity, accent, gender) influences what respondents say and how they say it. Perceptions are not simply "collected" but co-produced in the interview encounter.' },
            ],
          },
          {
            label: 'Visual &\nCreative Methods',
            color: '#51cf66',
            notes: [
              { type: 'argument', text: 'Mental maps (asking people to draw their neighbourhood from memory) reveal what features people notice, value, and fear — blank spaces on mental maps show areas people avoid or ignore, which is as revealing as the areas they draw in detail.' },
              { type: 'argument', text: 'Photo elicitation (asking people to photograph places that matter to them) accesses perceptions that may be difficult to articulate verbally — the choice of what to photograph reveals values and emotional associations that interview questions might not reach.' },
              { type: 'argument', text: 'Social media analysis (geotagged Instagram/Twitter posts) provides unsolicited perception data at massive scale — what people choose to share about a place reveals their perception without the distortion of being asked directly by a researcher.' },
              { type: 'evaluation', text: 'Visual methods are engaging and accessible (good for involving children, non-English speakers, and marginalised groups) but interpretation is subjective — two researchers may read very different meanings from the same mental map or photograph.' },
              { type: 'evaluation', text: 'Social media data is biased towards younger, digitally active, and often more positive perceptions (people share highlights not complaints). It misses entire demographics who do not use social media, creating a skewed perception dataset.' },
            ],
          },
          {
            label: 'Media &\nSecondary Sources',
            color: '#339af0',
            notes: [
              { type: 'argument', text: 'Newspaper analysis reveals how media constructs and reinforces place perceptions — headlines about crime, regeneration, or community events shape reader perceptions of areas they may never have visited.' },
              { type: 'argument', text: 'Estate agent descriptions and property websites construct aspirational perceptions of place — language choices ("vibrant", "up-and-coming", "character") are carefully designed to shape perceptions for economic gain.' },
              { type: 'argument', text: 'Council marketing materials, tourist brochures, and regeneration documents reveal OFFICIAL perceptions of place that may differ markedly from resident experiences — comparing these to resident interviews reveals the "perception gap" between governors and governed.' },
              { type: 'evaluation', text: 'Media sources are useful for understanding how perceptions are CONSTRUCTED and COMMUNICATED but not for understanding how they are EXPERIENCED — there is a critical difference between the perception projected onto a place and the perception lived within it.' },
              { type: 'evaluation', text: 'Historical secondary sources (old photographs, planning documents, census records) can show how perceptions have changed over time, providing context that neither quantitative surveys nor qualitative interviews can achieve alone.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'No single method is sufficient — perception is multi-dimensional (cognitive, emotional, sensory, social) and no one approach captures all dimensions. The most useful investigation combines quantitative breadth with qualitative depth.' },
              { type: 'evaluation', text: 'Mixed methods (triangulation) are the most useful approach: questionnaires identify broad patterns, interviews explain the reasons behind them, visual methods access non-verbal perceptions, and media analysis reveals constructed narratives.' },
              { type: 'evaluation', text: 'The usefulness of any method depends on the research question — if you want to compare perceptions across groups, quantitative methods are most useful. If you want to understand individual lived experience, qualitative methods are essential.' },
              { type: 'evaluation', text: 'All methods face the fundamental challenge that perception is not stable — it changes with time, context, mood, and company. Any investigation captures a snapshot of a moving target, and the act of investigation itself can change the perception being studied.' },
              { type: 'link', text: 'Overall judgement: qualitative methods (interviews, mental maps) are most useful for understanding the DEPTH of perception, while quantitative methods are most useful for understanding the BREADTH. Neither is complete without the other. The most useful method depends entirely on the specific question being asked.' },
            ],
          },
        ],
      },

      // DP-08: UK Cities Migration
      {
        id: 'dp-08',
        num: '08',
        title: 'UK Cities Migration',
        question: 'Evaluate the significance of both international and internal migration in shaping the character of UK cities.',
        marks: 20,
        center: 'Migration Shaping\nUK City\nCharacter',
        branches: [
          {
            label: 'International\nMigration - London',
            color: '#ff6b6b',
            notes: [
              { type: 'stat', text: 'Pre-COVID London received 79,500 international migrants annually — representing 43% of all international migration to the UK. London was the dominant gateway city for international arrivals.' },
              { type: 'argument', text: 'International migration has been the primary force creating London\'s extraordinary diversity — from Jewish settlement in 1656, through Irish infrastructure workers, Empire subjects, post-war Caribbean and South Asian migration, to contemporary global migration from every continent.' },
              { type: 'casestudy', text: 'Newham exemplifies international migration\'s impact: 55% born outside UK, every ethnic group represented, Indian 14%, African 12%, Bangladeshi 12%, Pakistani 10%. Non-UK born population grew by 72,000, making it London\'s most diverse borough.' },
              { type: 'argument', text: 'International migration has transformed the cultural character of UK cities — food, religion, language, festivals, arts, music, and the built environment have all been reshaped. London has 300+ languages spoken, more than any other city in the world.' },
              { type: 'evaluation', text: 'International migration\'s significance is greatest in terms of cultural transformation — it has made UK cities globally diverse. However, it has also created economic challenges: 40% of ethnic minorities live in low-income households, twice the white British poverty rate.' },
              { type: 'stat', text: 'Post-COVID, international migration collapsed and net migration into London fell to just 10,000 — demonstrating how dependent London\'s character and growth model is on continued international migration flows.' },
            ],
          },
          {
            label: 'Internal\nMigration',
            color: '#ffa94d',
            notes: [
              { type: 'stat', text: 'London experienced the greatest outward internal migration in the UK: 55,000 in 2016 (6/1000 rate), rising to 94,000 in 2019/20. Internal migration is the primary outflow while international migration is the primary inflow.' },
              { type: 'argument', text: 'Internal migration shapes UK cities through the life-cycle model: young adults move to city centres for education and employment, families move to suburbs for space and schools, and retirees move to rural/coastal areas. This creates age-zoned urban geographies.' },
              { type: 'argument', text: 'Internal out-migration from London is primarily from affluent areas — wealthy families cash in on high property values and move to the Home Counties or beyond. Poorer areas experience net in-migration as displaced residents from gentrifying areas move to cheaper boroughs.' },
              { type: 'casestudy', text: 'Counter-urbanisation has reshaped the character of towns like Winchester (average age 48) and rural Cotswolds areas — internal migration from cities has made these places wealthier, older, and less diverse, while source cities become younger and more diverse.' },
              { type: 'evaluation', text: 'Internal migration\'s significance is greatest in terms of demographic sorting — it distributes populations by age and class across the urban hierarchy, creating the variation in population structure observed along the rural-urban continuum.' },
            ],
          },
          {
            label: 'Cultural\nImpact',
            color: '#51cf66',
            notes: [
              { type: 'casestudy', text: 'The Notting Hill Carnival, established in 1966 by Claudia Jones (a Trinidad-born writer and editor of "The West Indian Gazette"), grew from a Caribbean community festival into one of the world\'s largest street festivals with 2.5 million annual attendees — international migration creating iconic British culture.' },
              { type: 'argument', text: 'Ethnic villages within cities (Southall for Sikhs, Brick Lane for Bangladeshis, Chinatown for Chinese) demonstrate how international migration creates distinct cultural quarters that become defining features of city character and tourist attractions in their own right.' },
              { type: 'stat', text: 'Southall hosts the largest Sikh community outside Punjab, with gurdwaras, Punjabi shops, three weekly Punjabi newspapers — a complete cultural transformation of a west London suburb driven entirely by international migration and chain migration.' },
              { type: 'evaluation', text: 'Cultural impact of international migration is overwhelmingly positive in terms of diversity, creativity, and economic dynamism — London\'s global cultural reputation depends on migration. However, internal migration (gentrification) threatens to displace the very communities that created this diversity.' },
              { type: 'evaluation', text: 'The interaction between international and internal migration is critical: international migrants create diverse, vibrant neighbourhoods, then internal migration (gentrification) brings wealthier residents who value the "vibe" but whose presence raises prices and displaces the original community.' },
            ],
          },
          {
            label: 'Economic\nImpact',
            color: '#339af0',
            notes: [
              { type: 'stat', text: 'London inflation has been 73% but house prices have risen 1,000% (1995-2020). Households spend up to 60% of income on housing vs UK average 25%. London has the highest poverty rate in the UK after housing costs are deducted.' },
              { type: 'argument', text: 'International migration provides the labour force that powers UK city economies — from NHS workers (66% of Caribbean women in health/social care) to finance professionals to restaurant workers (50% of male Pakistani/Bangladeshi workers in hospitality).' },
              { type: 'argument', text: 'Internal out-migration hollows out the middle class — London exports families with children and financial capital, retaining a polarised population of wealthy professionals and poor ethnic minorities, intensifying the economic character of inequality.' },
              { type: 'evaluation', text: 'Migration creates a dual economic character in UK cities: internationally driven diversity and enterprise coexist with internally driven gentrification and displacement. The city economy benefits overall but the gains are distributed extremely unequally.' },
              { type: 'stat', text: 'Housing benefit cuts since 2010 particularly affect low-income and ethnic minority residents, forcing displacement from central boroughs — government policy now shapes city character as much as market-driven migration patterns.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Both international and internal migration are highly significant in shaping UK city character, but they work in different ways: international migration adds diversity, culture, and labour; internal migration sorts populations by age, class, and life stage.' },
              { type: 'evaluation', text: 'International migration has arguably been MORE significant for CULTURAL character (creating London\'s extraordinary diversity), while internal migration has been MORE significant for DEMOGRAPHIC character (creating age-zoned urban geographies and gentrification patterns).' },
              { type: 'evaluation', text: 'The two types interact powerfully: international migrants concentrate in affordable inner-city areas, making them diverse and vibrant, then internal migration (gentrification) displaces them outward, spreading diversity to suburbs while commodifying the cultural character of inner areas.' },
              { type: 'evaluation', text: 'Post-COVID disruption has revealed how dependent UK cities are on both types: London\'s growth model requires continuous international migration inflow AND internal migration outflow to maintain its economic and cultural dynamism.' },
              { type: 'link', text: 'Overall judgement: both forms of migration are extremely significant. International migration is the primary cultural shaping force; internal migration is the primary demographic shaping force. Together, they create the complex, layered, and constantly evolving character of UK cities.' },
            ],
          },
        ],
      },

      // DP-09: Segregation Economic
      {
        id: 'dp-09',
        num: '09',
        title: 'Segregation Economic',
        question: 'Evaluate the extent to which economic factors are the primary driver of segregation in UK cities.',
        marks: 20,
        center: 'Economic Factors\nDriving Urban\nSegregation',
        branches: [
          {
            label: 'Housing Market\nSegregation',
            color: '#ff6b6b',
            notes: [
              { type: 'stat', text: 'House prices have risen 11% per year since 1996, far outpacing wage growth. London inflation is 73% overall but house prices are up 1,000% between 1995 and 2020 — the housing market is the primary mechanism through which economic inequality becomes spatial segregation.' },
              { type: 'argument', text: 'Housing costs determine WHERE people can live: the rich cluster in desirable areas with good schools and services, the poor concentrate in areas with cheaper housing stock. Economic filtering through the housing market is the most powerful segregation mechanism.' },
              { type: 'stat', text: 'London households spend 60% of income on housing compared to the UK average of 25%. After housing costs, London has the UK\'s highest poverty rate — economic segregation through housing is so extreme that an apparently wealthy city is actually its poorest.' },
              { type: 'argument', text: 'Housing benefit cuts since 2010 have forcibly displaced low-income and ethnic minority families from central London boroughs, creating government-driven economic segregation that pushes the poor to periphery areas with worse services and longer commutes.' },
              { type: 'evaluation', text: 'The housing market is arguably the primary driver of segregation because it translates ALL other forms of inequality (income, employment, education, discrimination) into spatial separation. You cannot live somewhere you cannot afford, regardless of other preferences.' },
            ],
          },
          {
            label: 'Wealth &\nInvestment',
            color: '#ffa94d',
            notes: [
              { type: 'argument', text: 'The British pound holds its value more consistently than many currencies (e.g., the Russian Rouble), making UK property attractive as a safe investment for international wealth. London is the main capital-raising centre globally, and having a base offers financial respectability.' },
              { type: 'stat', text: 'The UK grants 3-year investor visas for those investing £1 million or more in government bonds. Maintaining these bonds allows purchase of residency — for £10 million, permanent residency after just 2 years. Between 2008 and 2013: 433 Russian and 419 Chinese investor visas were issued.' },
              { type: 'casestudy', text: 'One-third of wealthy Russians buy UK property specifically to educate their children — 8% of HMC (elite school) pupils are Russian, generating approximately £60 million in school fees. International wealth creates ultra-exclusive enclaves in prime London postcodes.' },
              { type: 'argument', text: 'International capital flows create a form of "super-segregation" where entire developments are purchased by overseas buyers as investments, remaining empty while local people are homeless or on waiting lists. 2/3 of private homes in Newham were bought by overseas buyers.' },
              { type: 'evaluation', text: 'Global wealth flows have made economic segregation in London a transnational phenomenon — it is not just about rich vs poor Britons but about global capital vs local communities, a scale of economic driver that dwarfs domestic income inequality.' },
            ],
          },
          {
            label: 'Employment\n& Income',
            color: '#51cf66',
            notes: [
              { type: 'stat', text: '37% of employed men from ethnic minorities work in low-skilled jobs (2020). 50% of male Pakistani, Black African, and Bangladeshi workers are concentrated in restaurants/hotels. 59% of employed women from these groups are in low-skilled positions.' },
              { type: 'stat', text: '40% of ethnic minorities live in low-income households — twice the poverty rate of white British. 10% of white British are in low-income employment vs 65% of Bangladeshis, 50% of Pakistanis, and 30% of Black Africans.' },
              { type: 'argument', text: 'Employment segregation (concentration in specific low-paid sectors) translates directly into residential segregation — workers in restaurants, cleaning, and care cannot afford housing in affluent areas, clustering instead in cheaper neighbourhoods near their workplaces.' },
              { type: 'argument', text: 'The highest economic inactivity rates are among Bangladeshi women (54%) and Pakistani women (52%), linked to cultural norms, language barriers, and childcare responsibilities. This economic exclusion concentrates these communities in deprived areas.' },
              { type: 'evaluation', text: 'Employment-driven segregation shows how economic and ethnic segregation overlap and reinforce each other — ethnic minorities are disproportionately in low-paid work, which concentrates them in cheap housing areas, which happen to be the most ethnically diverse, creating a cycle.' },
            ],
          },
          {
            label: 'Non-Economic\nFactors',
            color: '#339af0',
            notes: [
              { type: 'argument', text: 'Social clustering by choice: recent migrants gravitate towards high-ethnic-concentration areas for language support, cultural familiarity, religious institutions, and community networks. This is voluntary cultural segregation driven by preference, not economics.' },
              { type: 'argument', text: 'Discrimination in housing (landlords refusing ethnic minority tenants) and mortgage lending creates segregation that is cultural/racial rather than purely economic — even wealthy ethnic minorities may face barriers in certain areas.' },
              { type: 'argument', text: 'Historical legacy: once a neighbourhood develops a particular ethnic or class character, it tends to be self-reinforcing. Estate agent steering, school reputation, and neighbourhood perception all maintain segregation patterns beyond purely economic logic.' },
              { type: 'stat', text: 'The highest social classes show the lowest ethnic concentration, and more qualifications correlate with less clustering — this suggests that as economic barriers reduce (through education and income), non-economic segregation also reduces, implying economics IS the root cause.' },
              { type: 'evaluation', text: 'Non-economic factors (culture, choice, discrimination, historical legacy) are real but they operate WITHIN the framework set by economic conditions. Cultural clustering happens in CHEAP areas; voluntary segregation happens where people can AFFORD. Economics sets the boundaries within which other factors operate.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Economic factors are the PRIMARY driver of segregation — the housing market, employment patterns, income inequality, and global capital flows create the spatial structure within which all other forms of segregation operate.' },
              { type: 'evaluation', text: 'However, segregation is multi-causal: cultural preferences, historical legacy, discrimination, and government policy all contribute. Economic factors are necessary but not sufficient to explain the full pattern of urban segregation.' },
              { type: 'evaluation', text: 'The relationship between economic and ethnic segregation is the key issue — they are so deeply intertwined that separating them is analytically difficult. Ethnic minorities are disproportionately poor, so ethnic segregation may appear cultural but be fundamentally economic.' },
              { type: 'evaluation', text: 'The evidence that more education and more employment reduce clustering supports the argument that economics is primary — remove economic barriers and cultural segregation diminishes. But the persistence of discrimination even among wealthy minorities complicates this.' },
              { type: 'link', text: 'Overall judgement: economic factors are the primary driver (especially the housing market), but segregation is best understood as a system where economic, cultural, political, and historical factors interact. Economics is first among equals, not the sole cause.' },
            ],
          },
        ],
      },

      // DP-10a: Managing Cultural & Demographic Issues
      {
        id: 'dp-10a',
        num: '10a',
        title: 'Managing Cultural & Demographic Issues',
        question: 'Evaluate the success of strategies used to manage cultural and demographic inequalities in a diverse urban area.',
        marks: 20,
        center: 'Managing\nInequalities in\nEast London',
        branches: [
          {
            label: 'Community\nEngagement',
            color: '#ff6b6b',
            notes: [
              { type: 'casestudy', text: 'Discover Children\'s Forum in Stratford: 21 children aged 4-11 meet monthly and during holidays to participate in public art projects and consultation on the 73-hectare Stratford City Development. This gives young people a voice in decisions that will shape their community for decades.' },
              { type: 'argument', text: 'Community engagement strategies succeed by empowering residents to shape their own environment rather than having change imposed on them by developers or councils. The Discover Forum shows even young children can contribute meaningfully to urban planning.' },
              { type: 'evaluation', text: 'However, 21 children is a tiny fraction of Newham\'s youth population — the strategy is symbolically powerful but its scale is far too small to materially affect the 73-hectare development. It risks being tokenistic rather than genuinely empowering.' },
              { type: 'casestudy', text: 'Asians in Football initiative in Tower Hamlets: coaching for 350 girls, mostly Bangladeshi. Football is popular with Asian children but ethnic minorities represent only 1% of football audiences — the strategy tackles cultural barriers to participation through sport.' },
              { type: 'evaluation', text: 'The football initiative succeeds in breaking down cultural barriers (Bangladeshi girls accessing sport) but addressing audience diversity requires systemic change in the football industry, not just community coaching. The strategy treats symptoms not root causes.' },
            ],
          },
          {
            label: 'Religious &\nCultural Orgs',
            color: '#ffa94d',
            notes: [
              { type: 'casestudy', text: 'London Muslim Centre (part of East London Mosque) provides religious/spiritual services plus Islamic education, but also works with the local authority on school attendance and attainment, health promotion, community cohesion, and tackling unemployment.' },
              { type: 'argument', text: 'Religious organisations succeed because they have existing trust and access within communities that government agencies cannot replicate. The London Muslim Centre bridges the gap between state services and communities that may distrust official institutions.' },
              { type: 'evaluation', text: 'The multi-function approach is effective — combining spiritual, educational, health, and employment services in one trusted institution addresses the interconnected nature of inequality rather than treating each issue in isolation.' },
              { type: 'evaluation', text: 'However, faith-based strategies risk reinforcing segregation by serving only one community. Critics argue that community cohesion requires inter-faith and inter-ethnic mixing, not just within-community support through separate religious institutions.' },
              { type: 'casestudy', text: 'Rich Mix cultural centre in Hoxton bridges the local population and creative industries, opening arts to new audiences and nurturing disadvantaged youth talents. This uses culture as a tool for economic empowerment and social integration.' },
              { type: 'evaluation', text: 'Rich Mix demonstrates how cultural strategy can address multiple inequalities simultaneously — economic (creative industry skills), social (bridging communities), and cultural (valuing diverse artistic expression). Its success depends on sustained funding and genuine community ownership.' },
            ],
          },
          {
            label: 'Economic\nStrategies',
            color: '#51cf66',
            notes: [
              { type: 'casestudy', text: 'East End Fair Finance: founded by a former Grameen Bank volunteer, it is a partnership of community organisations, banks, and housing associations providing loans to people excluded by mainstream banks. This prevents vulnerable residents from falling prey to doorstep loan sharks.' },
              { type: 'argument', text: 'Fair Finance addresses a root cause of inequality — financial exclusion. Without access to credit, poor communities cannot start businesses, manage emergencies, or invest in education. The strategy directly targets the economic mechanism that perpetuates poverty.' },
              { type: 'casestudy', text: 'TELCO Living Wage campaign: an alliance of unions and faith groups that successfully forced large financial institutions and public authorities to pay above the minimum wage. This directly improved incomes for the lowest-paid workers in East London.' },
              { type: 'evaluation', text: 'Living wage campaigns are among the most directly effective strategies — they put money in the pockets of the poorest workers, many of whom are from ethnic minority backgrounds. The multiplier effect of higher wages boosts the local economy.' },
              { type: 'evaluation', text: 'However, living wage campaigns only help those in employment — the 54% of Bangladeshi women and 52% of Pakistani women who are economically inactive are not reached. Economic strategies must also address barriers to entering employment, not just wages within it.' },
            ],
          },
          {
            label: 'Regeneration\nImpact',
            color: '#339af0',
            notes: [
              { type: 'stat', text: '2012 Olympics: 5,000 new homes + 3,000 Olympic Village flats (half designated low-cost), 4,000 trees + 74,000 plants + 300,000 wetland plants, 2 million tonnes of contaminated soil cleaned in a "soil hospital" — massive physical regeneration.' },
              { type: 'argument', text: 'Regeneration creates visible physical improvement — derelict land replaced with parks, new housing, transport infrastructure. Stratford became the 2nd most connected area in London after Kings Cross, fundamentally changing residents\' access to opportunities.' },
              { type: 'stat', text: 'However, only 20% of Olympic jobs went to local residents. 380 companies (11,000 people) were relocated, some forcibly. Rents increased dramatically. 2/3 of new private homes were bought by overseas investors. House prices rose by one-third.' },
              { type: 'evaluation', text: 'Regeneration is a double-edged sword for inequality: it improves the physical environment and brings investment, but the benefits often flow to newcomers and investors rather than existing residents who are displaced by rising costs. It can INCREASE inequality even as it improves the area.' },
              { type: 'evaluation', text: 'The Carpenters Estate case is damning: council flats left empty for 8+ years waiting for property prices to rise, while 16,000 families languished on the housing waiting list. Regeneration prioritised market logic over community need.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Small-scale community strategies (Discover Forum, football coaching, London Muslim Centre) succeed in building social capital and addressing specific cultural barriers, but their scale is inadequate to tackle structural inequality affecting hundreds of thousands of people.' },
              { type: 'evaluation', text: 'Economic strategies (Fair Finance, TELCO living wage) are the most directly effective because they address the ROOT CAUSE of inequality — poverty. However, they only reach those already engaged in the economy, missing the economically inactive.' },
              { type: 'evaluation', text: 'Large-scale regeneration (Olympics) brings transformative investment but without deliberate pro-poor policies, the benefits flow upward to investors and newcomers. Regeneration is necessary but not sufficient — it must be accompanied by community protection measures.' },
              { type: 'evaluation', text: 'No single strategy is sufficient. The most successful approach combines community engagement (building voice and agency), cultural organisations (building trust and cohesion), economic strategies (addressing poverty directly), and managed regeneration (improving environment without displacement).' },
              { type: 'link', text: 'Overall judgement: strategies have been partially successful — community initiatives succeed locally but are too small, economic strategies succeed directly but are too narrow, and regeneration succeeds physically but risks worsening inequality. A comprehensive, integrated approach is needed.' },
            ],
          },
        ],
      },

      // DP-10b: Regeneration & Inequality
      {
        id: 'dp-10b',
        num: '10b',
        title: 'Regeneration & Inequality',
        question: 'Assess the extent to which regeneration projects successfully address cultural and demographic inequalities.',
        marks: 20,
        center: 'Regeneration\nAddressing\nInequality',
        branches: [
          {
            label: 'East London\nOlympics',
            color: '#ff6b6b',
            notes: [
              { type: 'casestudy', text: 'East London was dominated by the London Docks. When container ships replaced traditional cargo, the docks closed, leaving a working-class, poor area. WW2 bombing had already destroyed much housing, replaced by 1960s tower blocks ("streets in the sky"). The Olympics aimed to reverse decades of decline.' },
              { type: 'stat', text: 'Economic impact: £9 billion invested, 7,000 temporary and 5,000 construction jobs created, 200 buildings demolished and recycled. Lloyds TSB estimated the Olympics would generate £10 billion in additional income for the area.' },
              { type: 'stat', text: 'Social impact: 5,000 new homes built plus 3,000 Olympic Village flats (half designated low-cost). House prices increased by one-third. Stratford tube station became the 2nd most connected in London after Kings Cross.' },
              { type: 'stat', text: 'Environmental impact: 4,000 trees, 74,000 plants, and 300,000 wetland plants established. A wildlife corridor created from Hackney Marshes to the Thames. 2 million tonnes of contaminated soil cleaned in a "soil hospital".' },
              { type: 'evaluation', text: 'The Olympics transformed the physical environment dramatically — but did this address INEQUALITY? Only 20% of jobs went to local residents. Most construction jobs were low-skilled and temporary. 380 companies (11,000 people) were relocated, some forcibly moved.' },
              { type: 'evaluation', text: 'The core problem: regeneration increased land values, which benefited property owners (disproportionately wealthy and non-local) while increasing costs for renters (disproportionately poor and from ethnic minorities). Regeneration can WIDEN inequality.' },
            ],
          },
          {
            label: 'Gentrification\nConsequences',
            color: '#ffa94d',
            notes: [
              { type: 'argument', text: 'Gentrification is the paradoxical outcome of "successful" regeneration: by making an area more attractive, regeneration raises property values, attracting wealthier newcomers and displacing the existing poor community that the regeneration was supposedly designed to help.' },
              { type: 'casestudy', text: 'Carpenters Estate: council-owned homes fell by 300,000 since 1997 while London\'s population grew by 1 million. Flats on the estate were left empty for 8+ years waiting for property prices to reach the level developers wanted. 16,000 families remained on the housing waiting list.' },
              { type: 'stat', text: '2/3 of new private homes in the Olympic area were bought by overseas buyers — Chinese and Middle Eastern property investors. The homes built to regenerate East London ended up as assets in global investment portfolios, not homes for local families.' },
              { type: 'argument', text: 'Some residents were forcibly moved during Olympic construction — most nearby with compensation, but some ended up worse off. Rents increased dramatically across the borough, pushing low-income families further from the regenerated area and its improved transport links.' },
              { type: 'evaluation', text: 'Gentrification means regeneration succeeds in improving PLACES but fails in improving COMMUNITIES — the place gets better but the original community is displaced. New residents benefit from the improved environment while original residents are pushed to less improved areas.' },
              { type: 'evaluation', text: 'The 2009 financial crisis compounded the problem: 40% council budget cuts by 2013 meant Newham council had fewer resources to protect vulnerable residents from market-driven displacement, making regeneration outcomes even more unequal.' },
            ],
          },
          {
            label: 'Slough\nRegeneration',
            color: '#51cf66',
            notes: [
              { type: 'casestudy', text: 'Slough: Berkshire town, population 140,000, 34.5% White British with no racial enclaves (all areas are mixed). Last 100 years saw influxes from Wales, Scotland, and Poland, plus growth in Sikh, Hindu, and Muslim communities.' },
              { type: 'casestudy', text: 'Slough Regeneration Partnership 2012: collaboration between Slough Borough Council and Morgan Sindall. The council identified 39 brownfield sites, with 3 housing developments of 200+ homes — but notably, no affordable housing was included in these developments.' },
              { type: 'casestudy', text: 'Langley Business Centre: a huge data centre with an energy centre and 60 homes (100% affordable housing), unanimously approved. It features pioneering district heating to address climate change, 93,000 sqm of data centre space, and 150 parking spaces.' },
              { type: 'casestudy', text: 'Stoke Wharf: £68 million project by Slough Urban Renewal (SBC + Morgan Sindall), offering a mix of 1-2 bed apartments, 3-bed townhouses, studios, and canal-side improvements. Originally planned for 240 homes but became denser due to "viability issues".' },
              { type: 'argument', text: 'Slough is prosperous due to Heathrow proximity attracting TNC headquarters (O2, Nintendo, Mars, Dulux). But 7,000 council properties serve 7,000 on the waiting list, and housing benefit cuts have forced low-wage workers from central London into Slough.' },
              { type: 'evaluation', text: 'Slough demonstrates the tension between economic regeneration (attracting TNCs and investment) and social regeneration (providing affordable housing and community services). The Langley 100% affordable scheme shows it IS possible but it is the exception, not the rule.' },
            ],
          },
          {
            label: 'Community\nStrategies - Slough',
            color: '#339af0',
            notes: [
              { type: 'casestudy', text: 'Aspire Southall: partnership between companies and the council providing employability skills, working with teachers, parents, advisors, and colleges. Mars offers apprenticeships and office rotations — linking regeneration to actual economic opportunity for local people.' },
              { type: 'casestudy', text: 'Aik Saath ("Together as One"): founded in the early 1990s to tackle Muslim/Hindu/Sikh gang tensions. Works with schools and worship places on themes including extremism, anti-racism, and "no to knives". Works with Thames Valley Police and trains teachers and youth workers.' },
              { type: 'argument', text: 'Aik Saath has engaged Eastern European migrants too, showing adaptability to changing demographics. It addresses cultural and demographic tensions directly at community level — preventing the conflict that can undermine regeneration efforts.' },
              { type: 'casestudy', text: '"The Curve": Slough council built this library, education, café, and performance space as part of regeneration — a cultural infrastructure investment that provides shared community space accessible to all ethnic and demographic groups.' },
              { type: 'evaluation', text: 'Slough\'s community strategies show that addressing inequality requires MORE than physical regeneration — it needs cultural programming (Aik Saath), economic skills development (Aspire), and shared spaces (The Curve) that actively build bridges between diverse communities.' },
              { type: 'evaluation', text: 'Environmental management is also part of the picture: Slough council manages air quality and safety near the M4/Heathrow, and the successful Bowyer Park objection shows communities can resist inappropriate development — regeneration must be environmentally and socially sensitive.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Large-scale regeneration (Olympics) transforms physical environments dramatically but frequently INCREASES inequality through gentrification, displacement, and overseas property investment. The scale of investment does not guarantee equitable outcomes.' },
              { type: 'evaluation', text: 'Community-level strategies (Aik Saath, Aspire, Fair Finance, TELCO) are more directly targeted at inequality but operate at too small a scale to counter the massive market forces unleashed by regeneration. They are necessary complements, not alternatives.' },
              { type: 'evaluation', text: 'The Slough/East London comparison shows that regeneration success depends on HOW it is implemented: Langley\'s 100% affordable housing shows pro-poor regeneration IS possible, but the 3 large developments with no affordable housing shows it is not the default.' },
              { type: 'argument', text: 'Regeneration projects succeed in addressing inequality ONLY when they include deliberate pro-poor policies: affordable housing quotas, local employment clauses, community land trusts, anti-displacement measures, and community engagement in decision-making.' },
              { type: 'link', text: 'Overall judgement: regeneration projects have a MIXED record on addressing inequality. They succeed in physical transformation and attracting investment but frequently fail to protect existing communities from displacement. Success requires deliberate policy intervention to ensure benefits reach the most disadvantaged.' },
            ],
          },
        ],
      },

      // DP-11: Key Players - Urban Communities
      {
        id: 'dp-11',
        num: '11',
        title: 'Key Players - Urban Communities',
        question: 'Evaluate the roles of different stakeholders in managing change in diverse urban communities.',
        marks: 20,
        center: 'Stakeholders\nManaging Urban\nChange',
        branches: [
          {
            label: 'Local\nGovernment',
            color: '#ff6b6b',
            notes: [
              { type: 'casestudy', text: 'Newham Council was a "key player" in Olympic regeneration but faced severe constraints: the 2009 financial crisis led to 40% budget cuts by 2013, drastically reducing its capacity to manage change or protect vulnerable residents from market forces.' },
              { type: 'casestudy', text: 'Slough Borough Council identified 39 brownfield sites and partnered with Morgan Sindall (Slough Urban Renewal) to deliver regeneration. It built "The Curve" (library/education/café/performance) and manages 7,000 council properties against a 7,000-person waiting list.' },
              { type: 'argument', text: 'Local government has unique powers (planning permission, social housing allocation, local taxation) that no other stakeholder possesses. However, austerity has severely weakened councils\' ability to exercise these powers in the interests of vulnerable communities.' },
              { type: 'evaluation', text: 'Newham council sold housing on the Carpenters Estate to private developers, leaving flats empty for 8+ years while 16,000 families waited on the housing list — demonstrating how even local government can prioritise market logic over community need under financial pressure.' },
              { type: 'evaluation', text: 'Local government is the most important stakeholder because it mediates between national policy, market forces, and community needs. But its effectiveness depends entirely on funding, political will, and the balance of power with developers and national government.' },
            ],
          },
          {
            label: 'Community\nOrganisations',
            color: '#ffa94d',
            notes: [
              { type: 'casestudy', text: 'Aik Saath in Slough tackles Muslim/Hindu/Sikh gang tensions, works with schools and worship places, addresses extremism and anti-racism, works with Thames Valley Police, trains teachers and youth workers, and has engaged Eastern European migrants — a grassroots response to diversity challenges.' },
              { type: 'casestudy', text: 'London Muslim Centre (part of East London Mosque) works with local authority on school attendance, health promotion, community cohesion, and tackling unemployment — a faith-based organisation bridging the gap between state services and communities that may distrust government.' },
              { type: 'casestudy', text: 'TELCO (The East London Communities Organisation) is an alliance of unions and faith groups that campaigned successfully for a living wage, forcing large financial institutions and public authorities to pay above the minimum wage.' },
              { type: 'argument', text: 'Community organisations have legitimacy and trust that government and business lack — they are embedded in the communities they serve and can access hard-to-reach groups. Their role is essential for ensuring change reflects community needs rather than just market demands.' },
              { type: 'evaluation', text: 'However, community organisations are typically small, under-funded, and reliant on volunteers or short-term grants. Their impact, while locally significant, cannot match the scale of change driven by government policy or private investment.' },
            ],
          },
          {
            label: 'Private\nSector',
            color: '#51cf66',
            notes: [
              { type: 'casestudy', text: 'Morgan Sindall partnered with Slough Council to form Slough Urban Renewal, delivering the £68 million Stoke Wharf project. Mars provided apprenticeships through Aspire Southall. TNCs (O2, Nintendo, Mars, Dulux) bring employment to Slough through Heathrow proximity.' },
              { type: 'argument', text: 'The private sector brings capital, expertise, and employment that neither government nor community organisations can provide. Without private investment, regeneration at the scale needed to transform deprived areas is simply not possible.' },
              { type: 'evaluation', text: 'However, private sector priorities (profit maximisation, shareholder returns) may conflict with community needs. Stoke Wharf was originally 240 homes but became denser due to "viability issues" — developer jargon for maximising units per hectare to boost profits.' },
              { type: 'stat', text: '2/3 of private homes in Olympic regeneration areas were bought by overseas investors. Chinese and Middle Eastern property investment "casts a shadow" over Newham — the private sector serves global capital as readily as local communities.' },
              { type: 'evaluation', text: 'Private sector involvement is necessary but must be managed by strong local government — without robust planning conditions (affordable housing quotas, local employment clauses, design standards), developers will optimise for profit at the expense of community benefit.' },
            ],
          },
          {
            label: 'National\nGovernment',
            color: '#339af0',
            notes: [
              { type: 'argument', text: 'National government sets the framework within which all other stakeholders operate: housing policy, welfare benefits, immigration rules, planning law, and fiscal transfers to local authorities all determine the conditions for managing urban change.' },
              { type: 'argument', text: 'The 1980s-90s government drove East London regeneration through Docklands development, the O2 Dome (2000), and the 2012 Olympic bid. These national-scale interventions transformed the area more than any local stakeholder could achieve independently.' },
              { type: 'evaluation', text: 'However, national government is also responsible for austerity (40% council budget cuts), housing benefit cuts that displaced poor families, and investor visa schemes that brought global capital but not community benefit. National policy can undermine local management.' },
              { type: 'evaluation', text: 'The tension between national economic priorities (attracting foreign investment, managing the deficit) and local community needs (affordable housing, employment, services) means national government is simultaneously the most powerful enabler and the greatest obstacle to equitable change.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Each stakeholder has a distinct and necessary role: national government provides the framework, local government mediates and implements, the private sector provides capital and jobs, and community organisations provide voice and trust. No single stakeholder can manage change alone.' },
              { type: 'evaluation', text: 'The power balance between stakeholders has shifted since 2010: austerity weakened local government, deregulation empowered the private sector, and community organisations have been squeezed. The result has been market-led change that benefits investors over residents.' },
              { type: 'evaluation', text: 'Community organisations are the most important stakeholder for EQUITY — they are the only ones whose primary mission is community benefit. But they are the LEAST powerful in terms of resources and decision-making authority, creating an inverse relationship between importance and power.' },
              { type: 'link', text: 'Overall judgement: the most successful management of urban change requires collaboration between all stakeholders, but with LOCAL GOVERNMENT as the key coordinator, empowered by national funding and policy, harnessing private sector investment while protecting community interests through strong regulation and genuine community engagement.' },
            ],
          },
        ],
      },

      // DP-12: Key Players - Rural Communities
      {
        id: 'dp-12',
        num: '12',
        title: 'Key Players - Rural Communities',
        question: 'Evaluate the extent to which different stakeholders can successfully manage change in diverse rural communities.',
        marks: 20,
        center: 'Stakeholders\nManaging Rural\nChange',
        branches: [
          {
            label: 'Local\nGovernment',
            color: '#ff6b6b',
            notes: [
              { type: 'argument', text: 'Rural local authorities face the challenge of managing change across vast geographic areas with dispersed populations. Unlike urban councils, they must provide services (roads, buses, waste collection, social care) over much larger distances at much higher per-capita costs.' },
              { type: 'argument', text: 'Planning policy is local government\'s most powerful tool in rural areas — controlling where housing is built, what type (affordable vs market), and at what density. However, NIMBYism from wealthy counter-urbanisers frequently blocks affordable housing proposals.' },
              { type: 'stat', text: '40% decline in school funding has forced creation of large 1,000+ pupil secondary schools and closure of middle schools (5-12). Locals feel this has broken community ties — but these are decisions driven by national austerity imposed on local government.' },
              { type: 'evaluation', text: 'Local government in rural areas is severely constrained by funding — council tax from a small, scattered population cannot cover the costs of services over large areas. National funding formulas often disadvantage rural areas compared to urban ones.' },
              { type: 'evaluation', text: 'However, rural local government can be effective when it uses its planning powers creatively — ensuring new developments include affordable housing, protecting agricultural land, maintaining village character while allowing necessary growth.' },
            ],
          },
          {
            label: 'Community\nGroups',
            color: '#ffa94d',
            notes: [
              { type: 'argument', text: 'Rural community groups (parish councils, village hall committees, church groups, farming cooperatives) are often more powerful relative to other stakeholders than their urban equivalents because rural communities are smaller and more tightly knit.' },
              { type: 'argument', text: 'Community-run services (village shops, post offices, pubs, transport schemes) have become essential as commercial providers have withdrawn from rural areas. These demonstrate communities managing change through collective action and volunteerism.' },
              { type: 'casestudy', text: 'The Cotswolds experience shows that community opposition can block development — wealthy homeowners successfully contest affordable housing proposals, demonstrating community power. But this power serves the affluent, not the young or poor who need housing.' },
              { type: 'evaluation', text: 'Rural community groups can be highly effective at maintaining existing community character but are often resistant to change. This is problematic when change (affordable housing, employment diversification, infrastructure improvement) is necessary for the community\'s long-term survival.' },
              { type: 'evaluation', text: 'The "community" in rural areas is not homogeneous — wealthy in-migrants and long-standing farming families may have very different interests. Community groups can be dominated by the most articulate and powerful voices, typically the affluent retired.' },
            ],
          },
          {
            label: 'Private Sector\n& Landowners',
            color: '#51cf66',
            notes: [
              { type: 'argument', text: 'Large landowners and farming estates have historically shaped rural areas more than any other stakeholder — land use, housing provision, employment, and landscape character are all determined by landowner decisions about agricultural practices and estate management.' },
              { type: 'argument', text: 'Tourism businesses are increasingly important stakeholders in rural change — they drive the maintenance of the "rural idyll" image that attracts visitors but can conflict with the needs of working agricultural communities for modernisation and diversification.' },
              { type: 'evaluation', text: 'Counter-urbanisation has made property developers and estate agents significant stakeholders — they market the "rural dream" to urban buyers, driving up prices and transforming village demographics. Their economic interests conflict with community affordability.' },
              { type: 'argument', text: 'Broadband and technology companies are emerging as key stakeholders — improved digital connectivity enables remote working, which could revitalise rural economies. However, investment in rural broadband depends on commercial viability, which is lower in sparse populations.' },
              { type: 'evaluation', text: 'The private sector in rural areas often extracts value (through tourism or property development) without reinvesting in community infrastructure. Unlike urban areas where Section 106 planning obligations can fund community facilities, rural developments are too small to generate significant developer contributions.' },
            ],
          },
          {
            label: 'National Govt\n& Agencies',
            color: '#339af0',
            notes: [
              { type: 'argument', text: 'National government shapes rural areas through agricultural policy (subsidies, environmental stewardship), transport policy (road building, bus subsidies, railway investment), and housing policy (right to buy, affordable housing requirements).' },
              { type: 'argument', text: 'National Park Authorities and Areas of Outstanding Natural Beauty (AONB) designations constrain development in the most scenic rural areas — protecting landscape character but also restricting the housing development needed to sustain communities.' },
              { type: 'evaluation', text: 'Post-Brexit agricultural policy is the single biggest unknown for rural change management — the shift from EU Common Agricultural Policy subsidies to Environmental Land Management schemes will fundamentally alter farm incomes and land use across rural Britain.' },
              { type: 'evaluation', text: 'National government is often perceived as London-focused and urban-biased — rural communities feel that their needs (transport, healthcare, broadband, housing) are deprioritised compared to urban regeneration. This perception may be accurate given funding allocations.' },
            ],
          },
          {
            label: 'Cornwall\nCase Study',
            color: '#f06595',
            notes: [
              { type: 'casestudy', text: 'Case Study: Cornwall is the spec\'s key example for rural change management. Cornwall Council has pursued EU Objective 1 and Convergence funding (over £1 billion since 2000) to address being one of the poorest regions in Western Europe — but with mixed results across different stakeholder groups.' },
              { type: 'argument', text: 'Cornwall\'s second-home crisis illustrates stakeholder conflict: local residents need affordable housing, tourism businesses rely on holiday lets for income, and wealthy outsiders treat property as investment. Cornwall Council introduced a council tax premium on second homes (up to 100% extra) to address this.' },
              { type: 'stat', text: 'In some Cornish parishes, over 25% of housing stock is second homes or holiday lets. St Ives held a neighbourhood plan referendum in 2016 requiring all new housing to be for permanent residents — demonstrating community stakeholders using democratic tools to manage change.' },
              { type: 'argument', text: 'Cornwall\'s rural economy depends on tourism which creates tension between stakeholders: local workers need year-round employment, tourism businesses need seasonal flexibility, environmentalists want landscape protection, and developers want to build. These interests frequently conflict.' },
              { type: 'evaluation', text: 'Cornwall shows that EU/government investment CAN improve rural infrastructure (broadband, roads, business parks) but cannot solve deeper structural issues like peripherality, seasonal employment, and the tension between preservation and development. Money alone is insufficient.' },
              { type: 'evaluation', text: 'However, Cornwall has had genuine successes: the Eden Project created 600+ jobs, Superfast Cornwall brought broadband to 95% of premises, and creative/digital industries have grown significantly — showing that multiple stakeholders working together can diversify a rural economy.' },
              { type: 'link', text: 'This links to globalisation: Cornwall\'s challenges are partly caused by the global shift — traditional industries (fishing, tin mining, farming) declined as global competition increased, and the tourism economy that replaced them is inherently seasonal and low-wage.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#be4bdb',
            notes: [
              { type: 'evaluation', text: 'Rural change management is MORE challenging than urban management because of geographic scale, population sparsity, funding constraints, and the tension between preservation (what wealthy in-migrants want) and development (what communities need to survive).' },
              { type: 'evaluation', text: 'Community groups are arguably the most important rural stakeholder because in the absence of commercial services and with limited government resources, community-run solutions (transport, shops, care) are often the only options. But they cannot address structural issues like housing affordability.' },
              { type: 'evaluation', text: 'The fundamental tension in rural change management is between those who have chosen to live there (wealthy commuters/retirees who want preservation) and those who have no choice (born there, tied to land/family, unable to afford to leave) who need development and opportunity.' },
              { type: 'evaluation', text: 'Comparing the Cotswolds and Cornwall: both face housing affordability crises but for different reasons — Cotswolds driven by counter-urbanisation from London, Cornwall by second-home ownership and tourism. The solutions needed are different, showing that rural management requires place-specific strategies.' },
              { type: 'evaluation', text: 'National government has the most power to shape rural change (through agricultural, planning, and transport policy) but frequently lacks the political will because rural populations are smaller and less electorally significant than urban ones.' },
              { type: 'link', text: 'Overall judgement: no single stakeholder can successfully manage rural change alone. Cornwall shows that EU/government funding combined with local initiative (St Ives housing plan, Eden Project) can achieve progress, but structural challenges of peripherality and seasonality persist. The Cotswolds show that affluence doesn\'t prevent rural problems — it just changes which groups suffer.' },
            ],
          },
        ],
      },
    ],
  },

  // ======================================================
  // GLOBALISATION SECTION
  // ======================================================
  {
    id: 'globalisation',
    title: 'Globalisation',
    color: '#4a90d9',
    questions: [
      // GL-01: Understanding & Defining Globalisation
      {
        id: 'gl-01',
        num: '01',
        title: 'Understanding & Defining Globalisation',
        question: 'Evaluate the extent to which developments in transport, communications and business have accelerated the process of globalisation.',
        marks: 20,
        center: 'Acceleration of\nGlobalisation',
        branches: [
          {
            label: 'Transport\nDevelopments',
            color: '#4a90d9',
            notes: [
              { type: 'argument', text: 'Lower transport costs have revolutionised global trade and enabled long-distance tourism on a mass scale. Containerisation reduced shipping costs by over 90%, making it economically viable to manufacture goods on one continent and sell them on another.' },
              { type: 'casestudy', text: 'China has built the world\'s largest highway and high-speed rail networks (both doubled in the last decade). Shanghai\'s maglev train operates at 270km/h. China has 82 airports with 250 total planned, and 8 of the top 12 global freight airports are Chinese.' },
              { type: 'argument', text: 'Aviation transformed globalisation by enabling rapid movement of people, ideas, and high-value goods. Low-cost airlines (like those connecting 9 Polish airports to 18 UK airports) made international migration and tourism accessible to ordinary people, not just the wealthy.' },
              { type: 'evaluation', text: 'Transport developments have been necessary for globalisation but not sufficient — without political agreements (trade deals, visa arrangements) and communications technology, improved transport alone would not have produced the interconnected world economy we see today.' },
              { type: 'evaluation', text: 'Transport acceleration has environmental costs that may ultimately limit it — aviation contributes significantly to climate change, and the "race to the bottom" on transport costs has externalised pollution and carbon emissions. Sustainability may slow future transport-driven globalisation.' },
            ],
          },
          {
            label: 'Communications\nRevolution',
            color: '#5ba3e6',
            notes: [
              { type: 'argument', text: 'Mobile phones have interconnected the globe more than any other single technology — there are now more mobile subscriptions than people on Earth. Even in developing countries, mobile banking and communication have leapfrogged traditional infrastructure.' },
              { type: 'argument', text: 'The internet created a "Global Village" in sport, music, and film — cultural products now reach global audiences instantaneously. A Korean pop song or an Indian cricket match can be watched simultaneously by billions, creating shared cultural experiences across borders.' },
              { type: 'argument', text: 'Social media platforms have accelerated globalisation by enabling direct person-to-person communication across borders, bypassing traditional media gatekeepers. Movements like Greta Thunberg\'s climate activism, BLM, and LGBTQ+ rights spread globally through social media.' },
              { type: 'evaluation', text: 'Communications technology has arguably accelerated globalisation MORE than transport — ideas, capital, and culture can move at the speed of light via fibre optics, while physical goods still take days or weeks to transport. Financial globalisation is essentially instantaneous.' },
              { type: 'evaluation', text: 'However, the digital divide means communications-driven globalisation is uneven — countries and communities without reliable internet access are "switched off" from the benefits. Communications accelerate globalisation for the connected while leaving the disconnected further behind.' },
            ],
          },
          {
            label: 'Business &\nTNCs',
            color: '#6bb5f0',
            notes: [
              { type: 'argument', text: 'TNC investment trickles down via wages in host countries, while low-wage economies produce cheap goods for global consumers. The multiplier effect of TNC presence boosts other industries — suppliers, services, retail all benefit from TNC anchor investments.' },
              { type: 'stat', text: 'TNCs have lifted an estimated 70 million people per year out of poverty through job creation. They bring huge capital inflows that improve balance of payments, new technology, management expertise, and machinery to host countries.' },
              { type: 'argument', text: 'Global supply chains are the business innovation that most accelerated globalisation — a single product may involve raw materials from Africa, components from Asia, assembly in China, design in California, and sales worldwide. This creates deep economic interdependence.' },
              { type: 'casestudy', text: 'Nissan Sunderland illustrates TNC impact: UK gave £100m incentive, initially Japanese parts were used but now 90% are UK-sourced (multiplier effect). Peak 5,000 employed, 480,000 cars/year, most efficient plant in Europe. 20% domestic, 80% exported to Europe and Asia.' },
              { type: 'evaluation', text: 'Business developments have been the most powerful accelerant because they provide the MOTIVATION for globalisation — profit-seeking drives companies to find cheaper labour, bigger markets, and lower regulations. Transport and communications are enablers; business is the engine.' },
            ],
          },
          {
            label: 'Political\nFramework',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'Political developments — trade agreements, customs unions, free movement zones — provide the legal framework that ALLOWS transport, communications, and business to operate globally. Without political agreements, technological capability alone would not produce globalisation.' },
              { type: 'argument', text: 'Democracy promotion tends to accompany middle class growth, TNCs can influence government policy, trade blocs develop shared governance, and economic interdependence reduces conflict as nations become embedded in shared supply chains.' },
              { type: 'argument', text: 'Trade agreements range from Free Trade Areas to Customs Unions to Common Markets to full Economic Unions, each representing deeper integration. Benefits include less conflict, comparative advantage, economies of scale, and increased productivity.' },
              { type: 'evaluation', text: 'However, political globalisation can be reversed — Brexit, Trump\'s tariffs, and rising nationalism show that political frameworks are not permanent. The political backlash against globalisation may slow or partially reverse the acceleration driven by technology and business.' },
              { type: 'evaluation', text: 'Political developments are arguably the most important because they are the most reversible — transport and communications technology cannot be un-invented, but trade deals can be torn up and borders can be closed. The political dimension is the most fragile accelerant.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'All three developments have accelerated globalisation, but they interact synergistically rather than independently — cheap transport enables global supply chains, communications enable coordination, and business provides the profit motive. The whole is greater than the sum of parts.' },
              { type: 'evaluation', text: 'Communications has arguably been the MOST significant accelerant in recent decades — the internet and mobile phones have transformed globalisation from primarily a trade phenomenon to a cultural, social, and financial phenomenon operating in real time.' },
              { type: 'evaluation', text: 'However, business/TNC activity has been the DEEPEST accelerant historically — the desire for profit has driven every wave of globalisation from the Age of Exploration to modern supply chains. Transport and communications are tools; business motivation is the driving force.' },
              { type: 'evaluation', text: 'The acceleration is not uniform — some places are deeply connected while others remain "switched off" (Ethiopia, landlocked developing countries). Acceleration has been fastest for wealthy, connected, English-speaking populations and slowest for the poor and isolated.' },
              { type: 'link', text: 'Overall judgement: developments in transport, communications, and business have each contributed significantly to accelerating globalisation, but they are interdependent. The most important single factor is communications technology (internet/mobile), but without the business motivation to exploit it and the political framework to permit it, technology alone would not produce globalisation.' },
            ],
          },
        ],
      },

      // GL-03: Key Players - WTO
      {
        id: 'gl-03',
        num: '03',
        title: 'Key Players - WTO',
        question: 'Evaluate the role of international organisations in promoting globalisation.',
        marks: 20,
        center: 'International Orgs\nPromoting\nGlobalisation',
        branches: [
          {
            label: 'Trade\nAgreements',
            color: '#4a90d9',
            notes: [
              { type: 'argument', text: 'International organisations like the WTO promote globalisation by creating rules-based trading systems. Trade agreements progress through stages: Free Trade Areas, Customs Unions, Common Markets, and full Economic Unions — each stage deepening integration.' },
              { type: 'argument', text: 'Benefits of trade agreements include: less conflict between trading partners, comparative advantage allowing countries to specialise, economies of scale from larger markets, increased productivity through competition, and breaking of domestic monopolies.' },
              { type: 'evaluation', text: 'However, trade agreements have drawbacks: trade diversion (away from efficient non-members), formation of protectionist blocs, complicated regulations that disadvantage smaller countries, crushing of developing industries exposed to competition, and production of goods for export rather than domestic needs.' },
              { type: 'evaluation', text: 'The WTO\'s Doha Round (2001) effectively collapsed because developing countries felt the rules disproportionately favoured wealthy nations. This failure revealed that international organisations promote a SPECIFIC form of globalisation that benefits the already-powerful.' },
              { type: 'argument', text: 'International organisations provide dispute resolution mechanisms that enable globalisation to proceed even when individual nations disagree — without these mechanisms, trade conflicts would be resolved through political power alone, disadvantaging smaller nations.' },
            ],
          },
          {
            label: 'EU as\nCase Study',
            color: '#5ba3e6',
            notes: [
              { type: 'stat', text: 'The EU represents 19% of world trade, 46% of outward Foreign Direct Investment, and 24% of inward FDI. It is both the world\'s largest single market and one of the most powerful promoters of globalisation through its common external tariff and free internal movement.' },
              { type: 'casestudy', text: 'EU enlargement accelerated globalisation dramatically: the 10 new member states (2004) achieved 4.2% growth in 2004-14, estimated at 4.5%+ (double their pre-2004 rate). Free movement and common tariffs created a single economic space from Ireland to Romania.' },
              { type: 'argument', text: 'The EU\'s free movement of goods, services, capital, and people is the most advanced form of economic integration in the world — it goes far beyond a trade agreement to create a genuinely borderless economic zone of 450 million consumers.' },
              { type: 'evaluation', text: 'However, Brexit demonstrated that EU-driven globalisation generates political backlash. The perceived loss of sovereignty and control over immigration led the UK to leave, suggesting that international organisations can push globalisation further than populations are willing to accept.' },
            ],
          },
          {
            label: 'Financial\nInstitutions',
            color: '#6bb5f0',
            notes: [
              { type: 'argument', text: 'The IMF, World Bank, and regional development banks promote globalisation by lending to developing countries, often with conditions (structural adjustment) that require market liberalisation, privatisation, and opening to foreign investment.' },
              { type: 'argument', text: 'These institutions provide the financial infrastructure for globalisation — currency stability (IMF), development loans (World Bank), and trade finance. Without them, the risks of international trade and investment would be much higher.' },
              { type: 'evaluation', text: 'Critics argue that financial institutions promote a neoliberal form of globalisation that primarily benefits wealthy nations and TNCs. Structural adjustment programmes have been blamed for worsening poverty in Africa and Latin America during the 1980s and 1990s.' },
              { type: 'evaluation', text: 'The power dynamics within these institutions reflect globalisation\'s inequalities — the US has veto power at the IMF, and voting rights are weighted by economic size. The institutions that promote globalisation are themselves governed by the countries that benefit most from it.' },
            ],
          },
          {
            label: 'Limitations\n& Resistance',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'China\'s steel dumping in 2016 violated WTO rules but the organisation struggled to enforce compliance — showing that international organisations can promote globalisation in principle but cannot always enforce the rules when powerful nations break them.' },
              { type: 'argument', text: 'Rising populist movements (Trump, Brexit, National Front) explicitly challenge the role of international organisations, viewing them as threats to national sovereignty and democracy. This political resistance may limit future organisational promotion of globalisation.' },
              { type: 'evaluation', text: 'International organisations are most effective at promoting globalisation between roughly EQUAL partners — they struggle when power imbalances are extreme, as stronger nations can ignore rules while weaker nations face consequences for non-compliance.' },
              { type: 'evaluation', text: 'The "switched off" world shows the limits of international organisations — landlocked, conflict-affected, and extremely poor countries remain excluded from globalisation regardless of trade rules, because they lack the basic infrastructure and stability to participate.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'International organisations have played a crucial role in FACILITATING globalisation by creating rules, reducing barriers, and providing financial infrastructure. Without the WTO, EU, IMF, and World Bank, globalisation would be slower and more chaotic.' },
              { type: 'evaluation', text: 'However, they have also shaped globalisation in ways that benefit wealthy nations disproportionately — trade rules, voting structures, and lending conditions all tend to favour the already-powerful. International organisations promote globalisation FOR the powerful, not necessarily for everyone.' },
              { type: 'evaluation', text: 'The political backlash against international organisations (Brexit, Trump) suggests they may have over-promoted globalisation, pushing integration beyond what populations in democratic countries are willing to accept. This is their greatest current challenge.' },
              { type: 'link', text: 'Overall judgement: international organisations have been significant but not sufficient promoters of globalisation. Technology and business would drive globalisation even without these organisations, but the rules-based framework they provide makes it more orderly and (arguably) more equitable than unregulated market-driven globalisation.' },
            ],
          },
        ],
      },

      // GL-04: Key Players - EU
      {
        id: 'gl-04',
        num: '04',
        title: 'Key Players - EU',
        question: 'Evaluate the extent to which the EU has been a key driver of globalisation.',
        marks: 20,
        center: 'EU as Driver\nof Globalisation',
        branches: [
          {
            label: 'EU Car\nIndustry',
            color: '#4a90d9',
            notes: [
              { type: 'argument', text: 'Free movement of goods and a common external tariff created conditions where high-value manufacturing is most profitable INSIDE the EU. This drove massive investment in car manufacturing across the bloc, particularly in new Eastern European member states.' },
              { type: 'stat', text: 'The EU represents 19% of world trade, 46% of outward FDI, and 24% of inward FDI. The single market of 450+ million consumers creates economies of scale that make the EU a magnet for global investment and a powerful driver of globalisation.' },
              { type: 'casestudy', text: 'Slovakia became Forbes\' "investment paradise" — lowest cost base in the EU. VW accounts for 25% of exports (250,000 cars/year) with a 10-year tax concession. Hyundai produces 200,000 cars/year. Kia invested $870 million plus $1.7 billion from suppliers. Peugeot produces 300,000 cars/year. Total: 850,000 cars/year by 2017.' },
              { type: 'stat', text: 'Slovakia, Czech Republic, and Hungary all have automotive sectors representing over 15% of total manufacturing. One-third of German car component suppliers have moved operations to Eastern Europe. 160,000 are employed in the sector across the new member states.' },
              { type: 'evaluation', text: 'The EU car industry case shows how the single market drives globalisation internally (Eastern European integration) and externally (EU-based manufacturers export globally). The EU created a globally competitive automotive powerhouse through economic integration.' },
            ],
          },
          {
            label: 'Labour\nMobility',
            color: '#5ba3e6',
            notes: [
              { type: 'stat', text: 'UK wages are approximately 5 times Polish wages. Eastern European workers work 40-42 hours per week compared to Germany\'s 35 hours. Corporate tax: Poland/Slovakia 19%, Estonia 0%, vs UK 30% and Germany 38%.' },
              { type: 'argument', text: 'Free movement of labour within the EU is one of the most direct forms of globalisation — it allows workers to move from low-wage to high-wage countries, and businesses to access cheaper labour from new member states. This drives economic integration at the personal level.' },
              { type: 'stat', text: 'The EU Commission allocated €50 billion between 2014-16 for new member states\' economic development, particularly automotive infrastructure. This investment accelerated globalisation by bringing Eastern Europe up to the infrastructure standard needed for TNCs to locate there.' },
              { type: 'evaluation', text: 'Labour mobility has been the EU\'s most politically contentious contribution to globalisation — it delivered economic benefits (cheaper goods, filled skills gaps) but generated the immigration concerns that drove Brexit and fuelled populist parties across Europe.' },
              { type: 'argument', text: 'Strategic location matters: VW chose Slovakia partly because of its Austrian border position, giving access to Western European markets while benefiting from Eastern European costs. The EU\'s expansion made these geographic advantages exploitable for the first time.' },
            ],
          },
          {
            label: 'Enlargement\nImpact',
            color: '#6bb5f0',
            notes: [
              { type: 'stat', text: 'The 10 new EU member states (2004 enlargement) achieved 4.2% growth in 2004-14, estimated at 4.5%+ — more than double their pre-2004 growth rate. EU membership accelerated economic development more than any other single factor.' },
              { type: 'argument', text: 'Enlargement was the EU\'s most dramatic driver of globalisation — it extended free trade, free movement, and common regulation to 100+ million additional people in a single act, integrating former communist economies into the global market system.' },
              { type: 'argument', text: 'The combination of low costs (wages, taxes, land) with full access to the EU single market made new member states irresistible to TNCs. Nissan, VW, Hyundai, Kia, and Peugeot all established major facilities in the 2004+ member states.' },
              { type: 'evaluation', text: 'Enlargement created both winners (new member states gaining investment and growth) and losers (old member states losing manufacturing jobs to cheaper competitors within the same trading bloc). This internal tension is a key challenge for the EU as a driver of globalisation.' },
              { type: 'evaluation', text: 'However, enlargement also demonstrates that EU-driven globalisation can reduce inequality between nations — the new member states have converged towards EU average living standards, even if inequality within those countries has increased.' },
            ],
          },
          {
            label: 'External\nRelationships',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'The EU negotiates trade deals as a bloc, giving it far more bargaining power than any individual member state. This collective weight makes the EU one of the most powerful forces in global trade negotiations, shaping globalisation rules to European advantage.' },
              { type: 'argument', text: 'The EU\'s common external tariff creates a barrier to non-EU goods while removing barriers internally — this makes it simultaneously a promoter of globalisation (within the bloc) and a potential barrier (for non-EU developing countries trying to export to Europe).' },
              { type: 'evaluation', text: 'The EU\'s external role in globalisation is ambiguous — it promotes integration among members but can be protectionist towards outsiders. EU agricultural subsidies, for example, have been criticised for undermining farmers in developing countries.' },
              { type: 'evaluation', text: 'Brexit has weakened the EU as a driver of globalisation by removing its second-largest economy. The UK\'s departure reduces the single market\'s scale and raises questions about whether the EU model of deep integration is sustainable in the face of nationalist politics.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'The EU has been a VERY significant driver of globalisation — it created the world\'s most integrated economic bloc, attracted massive TNC investment (especially in the automotive sector), enabled free movement of labour, and used its collective bargaining power to shape global trade.' },
              { type: 'evaluation', text: 'The EU\'s most distinctive contribution to globalisation is its DEPTH of integration — going beyond trade to include shared regulations, free movement of people, common currency (Eurozone), and collective foreign policy. No other international organisation comes close.' },
              { type: 'evaluation', text: 'However, the EU also demonstrates the LIMITS of globalisation — Brexit, the Eurozone crisis, and the rise of populist parties show that deep economic integration generates political resistance when people feel their sovereignty, identity, and livelihoods are threatened.' },
              { type: 'link', text: 'Overall judgement: the EU has been a key driver of globalisation, particularly within Europe. Its car industry case study demonstrates the powerful effects of free trade, free movement, and common regulation. However, Brexit suggests it may have driven globalisation faster than democratic populations were willing to accept.' },
            ],
          },
        ],
      },

      // GL-05: TNCs
      {
        id: 'gl-05',
        num: '05',
        title: 'TNCs',
        question: 'Evaluate the costs and benefits of TNC activity for countries at different levels of development.',
        marks: 20,
        center: 'TNC Costs\n& Benefits',
        branches: [
          {
            label: 'Benefits of\nTNC Activity',
            color: '#4a90d9',
            notes: [
              { type: 'argument', text: 'TNCs bring huge capital inflows that improve the balance of payments of host countries. They also transfer new technology, management expertise, and modern machinery that can transform the productive capacity of developing economies.' },
              { type: 'stat', text: 'TNCs lift an estimated 70 million people per year out of poverty through direct employment, supply chain jobs, and the multiplier effect of wages being spent in local economies.' },
              { type: 'argument', text: 'TNC jobs are relatively well-paid compared to local alternatives — even controversial "sweatshop" wages often exceed local agricultural earnings, which is why workers choose factory employment despite poor conditions.' },
              { type: 'casestudy', text: 'Nissan Sunderland: UK provided £100 million incentive. Initially used Japanese parts but now 90% UK-sourced (massive multiplier effect). Peak 5,000 employed, 480,000 cars/year — the most efficient plant in Europe. In 2011, £235 million additional investment was announced.' },
              { type: 'argument', text: 'The multiplier effect is the key benefit: TNCs attract supplier industries, which attract service industries, which create further employment. Nissan\'s UK supply chain employs far more people than the plant itself, demonstrating how a single TNC can transform a regional economy.' },
              { type: 'stat', text: 'Nissan exports 80% of production to Europe and Asia, contributing significantly to the UK\'s balance of trade. In 2016, production increased by 14% to 480,000 cars — demonstrating the scale of economic contribution a single TNC can make.' },
            ],
          },
          {
            label: 'Costs for\nDeveloping Countries',
            color: '#5ba3e6',
            notes: [
              { type: 'argument', text: 'TNCs reduce the viability of small and medium local firms through economies of scale — they can undercut local prices, buy competitors, or simply outlast them in price wars. This can destroy the domestic business sector that TNCs were supposed to develop.' },
              { type: 'argument', text: 'Host countries pay huge sums in infrastructure development, tax breaks, and regulatory concessions to attract TNCs — money that could be spent on education, healthcare, or domestic economic development. The cost of attracting TNCs often exceeds the benefits for decades.' },
              { type: 'casestudy', text: 'Shell in Nigeria (1990): explored oil on Ogoni land. Ken Saro-Wiwa led 2 years of peaceful protests. He was arrested for "inciting a riot", given a death sentence along with 9 others, hanged the next day, and their bodies were burned behind the police station.' },
              { type: 'casestudy', text: 'GAP/Nike sweatshops: 75% of sweatshop workers are women. 300+ Cambodian workers were sacked for demanding a living wage. Workers earned $38/month when $60 was needed for basic survival. Less than 1% of garment revenue is shared with the workers who make the clothes.' },
              { type: 'stat', text: 'A 20-year-old worker lost her 7-month pregnancy baby after working 100+ hour weeks on GAP jeans — illustrating the human cost of TNC production in developing countries where labour regulations are weak or unenforced.' },
              { type: 'evaluation', text: 'The costs for developing countries are concentrated on the most vulnerable — women, indigenous peoples, rural communities — while the benefits flow to urban elites, TNC shareholders, and consumers in wealthy countries. TNC activity can WIDEN inequality within host countries.' },
            ],
          },
          {
            label: 'Bhopal\nDisaster',
            color: '#6bb5f0',
            notes: [
              { type: 'casestudy', text: 'Union Carbide Bhopal 1984: 500,000 people exposed to methyl isocyanate (MIC) gas. Immediate death toll: 2,200 (government later revised to 3,800). Estimates suggest 8,000 died within 2 weeks and a further 8,000 in subsequent years.' },
              { type: 'stat', text: '2006 government figures: 550,000 injuries, of which 40,000 were partially disabling and 4,000 were severe permanent injuries. 200,000 children were exposed. 17,000 were treated in hospitals. 2,000 buffalo and goats were buried. Leaves yellowed on trees and fishing was prohibited.' },
              { type: 'stat', text: 'Safety negligence was extreme: MIC alarms had been broken for 4 years, only 1 manual backup system existed (compared to 4-stage automated backup in US plants), the flare tower could only handle one-quarter of the gas and was out of order, MIC was stored at 20°C instead of the recommended 4.5°C, and carbon steel valves had corroded.' },
              { type: 'stat', text: 'Settlement: Union Carbide paid $470 million — only 15% of the original $3 billion claim. Compensation went to 550,000 people and 15,300 families, averaging approximately $2,200 per family for permanent injury or death of family members.' },
              { type: 'evaluation', text: 'Bhopal is the ultimate case study of TNC costs in developing countries — a double standard where safety procedures enforced in the US were ignored in India. The disaster killed thousands, the company paid a fraction of the damage, and the site remains contaminated 40 years later.' },
              { type: 'evaluation', text: 'Bhopal demonstrates that TNC costs are not just economic but include catastrophic health and environmental risks that developing countries lack the regulatory capacity to prevent. The power asymmetry between TNCs and developing country governments is the root cause.' },
            ],
          },
          {
            label: 'Vulnerability\n& Dependence',
            color: '#7cc8f5',
            notes: [
              { type: 'casestudy', text: 'Nissan Sunderland during the 2008 financial crisis: sales fell 26.7%, 1,200 workers were made redundant, and remaining workers took a 2% pay cut. A single TNC decision affected thousands of families and the entire regional economy.' },
              { type: 'argument', text: 'TNC dependency creates vulnerability — when a TNC is the dominant employer, any downturn in its global operations causes disproportionate local suffering. Communities become hostages to decisions made in distant boardrooms based on global profit calculations.' },
              { type: 'argument', text: 'TNCs can use the threat of relocation to extract concessions from governments — lower taxes, weaker regulations, reduced worker protections. The VW 10-year tax concession in Slovakia shows how TNCs leverage their mobility to minimise costs.' },
              { type: 'evaluation', text: 'The relationship between TNCs and host countries is fundamentally unequal — TNCs can move to the next low-cost location, but communities cannot follow. This mobility gives TNCs structural power over governments and workers that distorts the cost-benefit calculation.' },
              { type: 'evaluation', text: 'Developed countries are not immune to TNC costs — Sunderland\'s dependence on Nissan and the 2008 layoffs show that even in the UK, TNC activity creates vulnerability. However, developed countries have stronger welfare states and more diversified economies to absorb shocks.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'TNC activity produces BOTH significant benefits AND significant costs for host countries. The key variable is the LEVEL OF DEVELOPMENT: developed countries (UK/Nissan) capture more benefits through the multiplier effect, while developing countries (Nigeria/Shell, India/Bhopal, Cambodia/GAP) bear disproportionate costs.' },
              { type: 'evaluation', text: 'The benefits are real — 70 million out of poverty annually, technology transfer, infrastructure development. But they are unevenly distributed: TNC shareholders and wealthy-country consumers capture most of the value, while host-country workers and communities capture a fraction.' },
              { type: 'evaluation', text: 'The costs are most severe when developing countries lack regulatory capacity: Bhopal\'s safety failures, Shell\'s human rights abuses, and sweatshop labour exploitation all occur where governments are too weak, corrupt, or desperate for investment to enforce standards.' },
              { type: 'evaluation', text: 'The Nissan case shows that even in developed countries, TNC costs include dependency, vulnerability to global downturns, and the loss of economic sovereignty. But the UK captures far more benefit from Nissan (90% UK parts, multiplier effect) than Nigeria captures from Shell.' },
              { type: 'link', text: 'Overall judgement: TNC activity produces net benefits for developed countries with strong institutions, but the cost-benefit balance for developing countries is much more contested. The poorest and least regulated countries bear the greatest costs while capturing the smallest share of benefits.' },
            ],
          },
        ],
      },

      // GL-06: Measuring Globalisation
      {
        id: 'gl-06',
        num: '06',
        title: 'Measuring Globalisation',
        question: 'Evaluate the usefulness of different measures and indices in assessing the degree of globalisation of different countries.',
        marks: 20,
        center: 'Measuring\nGlobalisation',
        branches: [
          {
            label: 'Economic\nMeasures',
            color: '#4a90d9',
            notes: [
              { type: 'argument', text: 'Trade-to-GDP ratio measures economic openness — how much of a country\'s economy involves international trade. This is useful because trade is the most direct form of economic globalisation, but it favours small, trade-dependent economies over large domestic markets.' },
              { type: 'argument', text: 'Foreign Direct Investment (FDI) inflows and outflows measure capital globalisation — how much investment crosses borders. The EU has 46% of global outward FDI and 24% of inward FDI, making it the most capital-globalised region.' },
              { type: 'evaluation', text: 'Economic measures are the most widely used but capture only one dimension of globalisation. A country could be highly economically globalised (high trade) but culturally isolated (censorship, language barriers) — economics alone gives an incomplete picture.' },
              { type: 'evaluation', text: 'Economic measures can be misleading: oil-exporting countries may appear highly globalised (high exports) but their economy is dominated by a single commodity controlled by a state monopoly — this is not the kind of diverse, integrated globalisation the measures are meant to capture.' },
            ],
          },
          {
            label: 'Social &\nCultural Measures',
            color: '#5ba3e6',
            notes: [
              { type: 'argument', text: 'Internet penetration, social media usage, and mobile phone subscriptions measure communications globalisation — the degree to which populations are connected to global information flows and cultural exchange.' },
              { type: 'argument', text: 'International tourism (arrivals and departures), foreign-born population share, and international student numbers measure people globalisation — the physical movement of people across borders for work, study, and leisure.' },
              { type: 'argument', text: 'Cultural globalisation can be measured through English language adoption, fast food chain presence, Hollywood film market share, and international brand recognition — though these measures are criticised for equating globalisation with westernisation.' },
              { type: 'evaluation', text: 'Social and cultural measures are harder to quantify consistently across countries but capture dimensions of globalisation that economic measures miss entirely — the lived experience of interconnection through media, travel, and cultural exchange.' },
              { type: 'evaluation', text: 'Cultural measures raise the question of whether globalisation is measured or just westernisation — presence of McDonald\'s and English language may reflect US cultural hegemony rather than genuine two-way cultural exchange. The measures embed western bias.' },
            ],
          },
          {
            label: 'Composite\nIndices',
            color: '#6bb5f0',
            notes: [
              { type: 'argument', text: 'The KOF Globalisation Index combines economic (trade, FDI, restrictions), social (personal contact, information flows, cultural proximity), and political (embassies, international organisations, treaties) dimensions into a single score.' },
              { type: 'argument', text: 'The AT Kearney Globalisation Index weights economic integration, personal contact, technology, and political engagement to rank countries by overall globalisation level — useful for comparing countries across multiple dimensions simultaneously.' },
              { type: 'evaluation', text: 'Composite indices are the most comprehensive approach but involve subjective weighting decisions — should economic globalisation count more than cultural? How do you combine internet access with trade volumes in a single number? The weighting reflects the creators\' assumptions.' },
              { type: 'evaluation', text: 'Composite indices consistently rank small, wealthy, English-speaking countries highest (Singapore, Netherlands, Switzerland) — this may reflect genuine globalisation or may reflect the indices being designed around the characteristics of these countries.' },
              { type: 'evaluation', text: 'No composite index adequately captures the INEQUALITY of globalisation within countries — a country like China may score moderately overall, but Shanghai is one of the most globalised cities in the world while rural Guizhou province is barely connected. National averages mask internal variation.' },
            ],
          },
          {
            label: 'Limitations\n& Alternatives',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'All globalisation measures struggle with the "switched off" problem — the most isolated, poorest countries have the least data available, meaning the countries where globalisation measurement matters most are the ones least accurately measured.' },
              { type: 'argument', text: 'Qualitative approaches (case studies, ethnography, media analysis) can capture the EXPERIENCE of globalisation that quantitative indices miss — how a farmer in Ethiopia or a factory worker in Cambodia actually encounters global economic forces in their daily life.' },
              { type: 'evaluation', text: 'The biggest limitation is that measures describe OUTCOMES not PROCESSES — they tell you how globalised a country is but not WHY or HOW or for WHOM. Understanding globalisation requires combining measurement with analysis of the underlying power dynamics and mechanisms.' },
              { type: 'evaluation', text: 'Measuring globalisation at the national level is increasingly problematic — cities, regions, and even individuals within the same country can be at very different levels of globalisation. Sub-national and individual-level measurement would be more meaningful but far harder to achieve.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'Economic measures are the most useful for comparing countries on a single, clearly defined dimension but miss the social, cultural, and political aspects of globalisation that are equally important.' },
              { type: 'evaluation', text: 'Composite indices are the most comprehensive but involve subjective weighting decisions and consistently favour small, wealthy countries — raising questions about whether they measure globalisation or just prosperity.' },
              { type: 'evaluation', text: 'No single measure or index is adequate — globalisation is multidimensional and its measurement must be too. The most useful approach combines economic data with social indicators, cultural analysis, and qualitative case studies.' },
              { type: 'link', text: 'Overall judgement: measures and indices are moderately useful for broad comparisons but have significant limitations. They measure AGGREGATE national globalisation but cannot capture internal inequality, lived experience, or the power dynamics that drive globalisation. They are a starting point for analysis, not a conclusion.' },
            ],
          },
        ],
      },

      // GL-07: Switched Off Worlds
      {
        id: 'gl-07',
        num: '07',
        title: 'Switched Off Worlds',
        question: "Evaluate the reasons why some locations remain largely 'switched off' from globalisation.",
        marks: 20,
        center: 'Switched Off\nfrom\nGlobalisation',
        branches: [
          {
            label: 'Environmental\nBarriers',
            color: '#4a90d9',
            notes: [
              { type: 'argument', text: 'Extreme weather events, flooding, and drought create unpredictable economic conditions that deter foreign investment and disrupt trade. Countries dependent on rain-fed agriculture are particularly vulnerable to climate variability that makes economic planning impossible.' },
              { type: 'casestudy', text: 'Ethiopia: 90% of crops are rain-fed. When drought strikes, farmers sell assets to survive, leaving them with nothing for the next season. It takes 3-5 years to rebuild herds, creating a cycle where each drought pushes households further from recovery and further from the global economy.' },
              { type: 'stat', text: 'Ethiopia has less than 3% forest cover remaining and will be completely deforested in 20 years at current rates. Environmental degradation reduces agricultural productivity and makes the country more vulnerable to climate shocks — a vicious cycle that keeps it switched off.' },
              { type: 'argument', text: 'Cash crop dependence, ironically driven by earlier globalisation attempts, makes countries vulnerable to global commodity price fluctuations — when prices crash, export earnings collapse, and countries cannot afford imports of technology and manufactured goods needed for development.' },
              { type: 'evaluation', text: 'Environmental barriers are particularly pernicious because they interact with poverty — poor countries cannot invest in irrigation, flood defences, or drought-resistant crops, so environmental shocks hit hardest where resilience is lowest, perpetuating the switched-off condition.' },
            ],
          },
          {
            label: 'Political\nBarriers',
            color: '#5ba3e6',
            notes: [
              { type: 'argument', text: 'Countries without functioning governments cannot provide the health, education, and infrastructure needed for economic development. Without educated, healthy workers and reliable roads, ports, and communications, there is nothing for global businesses to connect to.' },
              { type: 'argument', text: 'Conflict and political instability deter foreign investment — TNCs will not risk capital in countries where assets might be destroyed, nationalised, or caught up in civil war. Political risk is one of the most powerful barriers to globalisation.' },
              { type: 'argument', text: 'Corruption diverts resources from productive investment — money that should build roads, schools, and hospitals instead flows to elites and offshore accounts. This is doubly damaging because it destroys both development AND trust from international investors.' },
              { type: 'evaluation', text: 'Political barriers are arguably the most important "switched off" factor because they prevent all other forms of development — even countries with good physical geography and resources cannot globalise without stable governance, rule of law, and functioning institutions.' },
              { type: 'evaluation', text: 'However, the relationship between politics and globalisation is circular — poor countries have weak institutions, weak institutions deter investment, lack of investment keeps countries poor, and poverty weakens institutions further. Breaking this cycle is the fundamental development challenge.' },
            ],
          },
          {
            label: 'Physical\nBarriers',
            color: '#6bb5f0',
            notes: [
              { type: 'argument', text: 'Landlocked countries like Bolivia face massive additional transport costs for imports and exports — every product must transit through a neighbouring country\'s ports, adding cost, time, and political dependency that coastal countries avoid.' },
              { type: 'argument', text: 'Mountainous terrain makes internal transportation extremely difficult and expensive — building roads through mountains costs many times more than on flat terrain, and many rural communities remain physically isolated from national and global markets.' },
              { type: 'argument', text: 'Arid environments (Mali, Chad, Sahel region) have low agricultural productivity and sparse populations spread over vast areas — the economic density is too low to attract investment or build infrastructure, keeping communities subsistence-based and switched off.' },
              { type: 'stat', text: 'Low rainfall areas have high variability — areas that receive little rain are also the areas where rainfall is most unpredictable, making planning and investment extremely risky. Less than 50% of Ethiopia\'s population has access to safe drinking water.' },
              { type: 'evaluation', text: 'Physical barriers can be overcome with sufficient investment (tunnels, bridges, irrigation) but the capital needed is not available to the countries that need it most. Physical geography does not determine development, but it dramatically increases its cost.' },
            ],
          },
          {
            label: 'Economic &\nHealth Barriers',
            color: '#7cc8f5',
            notes: [
              { type: 'casestudy', text: 'Ethiopia: farming employs 85% of the workforce and produces 45% of GDP, but output per capita is lower than 20 years ago — the economy is going backwards despite globalisation. Arable land is overcrowded and overcultivated.' },
              { type: 'stat', text: 'Ethiopia: fertility was 7.7 children per woman in 1993 (reduced to 4.0 by 2020). Contraception use: only 5% among illiterate women vs 45% among women with secondary education — education is the key to demographic transition, but education requires investment that switched-off countries cannot afford.' },
              { type: 'stat', text: 'Ethiopia has 1% of the world\'s population but 4% of the world\'s HIV infections. In Southern Africa, HIV/AIDS infection rates reach 20% — this decimates the working-age population, reducing productive capacity and deterring investment.' },
              { type: 'argument', text: 'Malnutrition, lack of clean water, malaria, and HIV/AIDS create a health burden that prevents economic development — sick workers are less productive, healthcare costs absorb family savings, and early death removes experienced workers. Health is a prerequisite for globalisation.' },
              { type: 'evaluation', text: 'Economic and health barriers create a poverty trap: without investment there is no development, without development there is no investment. Globalisation requires a minimum threshold of health, education, and infrastructure that the most switched-off countries have not reached.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'No single barrier explains why locations remain switched off — it is the COMBINATION and INTERACTION of environmental, political, physical, economic, and health barriers that creates the switched-off condition. Each barrier reinforces the others in a vicious cycle.' },
              { type: 'evaluation', text: 'Political barriers are arguably the most important because they are the most amenable to human action — good governance can work around physical barriers, build resilience to environmental shocks, and invest in health and education. But political barriers are also the hardest to address from outside.' },
              { type: 'evaluation', text: 'Historical factors — colonialism, Cold War interference, unfair trade rules — created many of the conditions that keep countries switched off today. The "switched off" condition is not natural but historically produced, which implies responsibility for connected countries to help address it.' },
              { type: 'evaluation', text: 'Globalisation itself can perpetuate the switched-off condition — global trade rules favour already-connected countries, commodity price volatility hurts primary producers, and brain drain removes educated individuals from countries that desperately need them.' },
              { type: 'link', text: 'Overall judgement: locations remain switched off due to a complex, interacting web of barriers. Political instability is the most critical because it prevents all other development, but physical geography, environmental vulnerability, and health crises all contribute. Breaking the cycle requires coordinated intervention addressing multiple barriers simultaneously.' },
            ],
          },
        ],
      },

      // GL-08: The Global Shift - China
      {
        id: 'gl-08',
        num: '08',
        title: 'The Global Shift - China',
        question: 'Evaluate the extent to which the global shift has created both winners and losers in China.',
        marks: 20,
        center: 'Winners & Losers\nin China\'s\nGlobal Shift',
        branches: [
          {
            label: 'Economic\nWinners',
            color: '#4a90d9',
            notes: [
              { type: 'stat', text: 'China has averaged 9.2% GDP growth per year for 30 years — the most sustained period of rapid economic growth in human history. It produces half the world\'s clothes and microwaves, two-thirds of shoes and photocopiers, and one-third of mobile phones.' },
              { type: 'stat', text: '300 million people have joined the middle class. Sales of TVs, laptops, and cars have overtaken the United States. 900 million people were lifted out of poverty between 1980 and 2020 — less than 6% now live on less than $1/day (down from the vast majority).' },
              { type: 'stat', text: 'Urban incomes have risen 12% annually since 2006, reaching an average of $19,000/year. Workers now have 40-hour weeks, paid holidays, and travel expenses — conditions unimaginable a generation ago.' },
              { type: 'casestudy', text: 'Infrastructure transformation: China built the world\'s largest highway and high-speed rail networks (both doubled in the last decade). Shanghai\'s maglev train reaches 270km/h. China has 82 airports with 250 total planned — 8 of the top 12 global freight airports are Chinese.' },
              { type: 'evaluation', text: 'The scale of China\'s economic success is unprecedented — no country in history has lifted so many people out of poverty so quickly. The global shift has created hundreds of millions of winners among China\'s urban population.' },
              { type: 'argument', text: 'Education has been transformed: free education for ages 6-15, literacy at 94% (up from 20% in 1950), 7.2 million university graduates in 2020 (15 times the 2015 figure). Education is both a product and a driver of China\'s economic success.' },
            ],
          },
          {
            label: 'Environmental\nLosers',
            color: '#5ba3e6',
            notes: [
              { type: 'stat', text: 'Coal-dependent industrialisation has caused severe pollution: Beijing regularly issues pollution alerts, 70% of rivers and lakes are polluted, 207 Yangtze tributaries are not fit for irrigation, 100 cities face extreme water shortages, and 360 million people lack safe drinking water.' },
              { type: 'stat', text: 'Chongqing tap water contained 80 out of 1,010 known forbidden toxins. Acid rain affects 30% of China\'s land area (50% of cities), costing an estimated $13 billion per year in damage to agriculture, buildings, and health.' },
              { type: 'stat', text: 'China has 22% of the world\'s population but only 6.4% of its land and 7.2% of farmland. 40% of farmland is degraded: black soils are eroding, southern soils are acidifying. 3 million hectares are polluted by heavy metals, with 12 million tonnes of grain contaminated in 2014.' },
              { type: 'argument', text: 'China\'s global demand has environmental consequences far beyond its borders: the Amazon is being cleared for soya, Venezuela drills oil for Chinese markets, and Greenland has faced disputes over mineral rights driven by Chinese resource demand.' },
              { type: 'stat', text: 'WWF data: terrestrial vertebrate populations in China have declined by 50% since 1970. Chemicals banned in middle-income countries are still used in Chinese agriculture. The environmental cost of the global shift may take generations to repair.' },
              { type: 'evaluation', text: 'The environment is the clearest category of LOSERS — economic growth has been achieved at devastating environmental cost. The same industrialisation that created 300 million middle-class winners has poisoned the air, water, and soil that all 1.4 billion must share.' },
            ],
          },
          {
            label: 'Social\nLosers',
            color: '#6bb5f0',
            notes: [
              { type: 'stat', text: 'Education spending per pupil: $4,000 in urban areas vs just $350 in rural areas — an eleven-fold gap. The global shift\'s benefits have concentrated in coastal cities while rural interior China has been largely left behind.' },
              { type: 'argument', text: 'Rural-urban inequality is China\'s biggest social challenge: hundreds of millions of rural residents have not shared in the wealth generated by industrialisation. Internal migration (hukou system) restricts rural workers\' access to urban services even when they work in cities.' },
              { type: 'argument', text: 'Workers in export factories — the frontline of the global shift — face conditions that, while improved, still involve long hours, low wages relative to the goods\' sale price, and limited labour rights. Factory workers are winners compared to rural poverty but losers compared to the middle class they serve.' },
              { type: 'evaluation', text: 'The 15% still living on less than $2/day (approximately 210 million people) are the most visible losers — they live in the same country as the 300 million middle-class consumers but in a fundamentally different economic reality.' },
              { type: 'evaluation', text: 'The global shift has created a DUAL China: coastal, urban, connected, and prosperous vs interior, rural, isolated, and poor. The winners are highly visible globally; the losers are hidden in villages that tourists and investors never visit.' },
            ],
          },
          {
            label: 'Global\nImpact',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'China\'s global shift has created losers in OTHER countries — deindustrialisation in the UK, US, and Europe is directly linked to manufacturing moving to China. Leicester\'s textile industry, which employed 300,000+ workers in the 1920s, collapsed as China took over production in the 1980s.' },
              { type: 'argument', text: 'Resource extraction for Chinese demand creates environmental losers in developing countries — Amazon deforestation for soya, Venezuelan oil drilling, Greenland mining. China exports its environmental costs to countries with even weaker environmental regulations.' },
              { type: 'evaluation', text: 'China\'s global shift has created the most complex pattern of winners and losers in globalisation history — Chinese urban winners, Chinese rural losers, developing country resource-extraction losers, developed country deindustrialisation losers, and global consumers who are winners through cheap goods.' },
              { type: 'evaluation', text: 'The geopolitical consequences of China\'s rise — trade tensions, technological competition, territorial disputes — mean that the global shift has created political as well as economic winners and losers, with implications that extend far beyond economics.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'The global shift has CLEARLY created both winners and losers in China — the evidence is overwhelming in both directions. 900 million out of poverty is the greatest economic achievement in history; 70% polluted rivers and 50% decline in vertebrates is an environmental catastrophe.' },
              { type: 'evaluation', text: 'The BALANCE between winners and losers depends on your metric: by income, there are far more winners. By environmental quality, almost everyone is a loser. By equality, the gap between winners and losers is widening even as absolute poverty falls.' },
              { type: 'evaluation', text: 'The winners and losers are not fixed categories — the same person can be a winner (higher income) and a loser (polluted water) simultaneously. This complexity makes simple cost-benefit analysis impossible.' },
              { type: 'evaluation', text: 'China\'s government has begun addressing environmental costs (renewable energy investment, pollution controls) but the damage already done will take decades to repair. The question is whether the global shift\'s environmental losers can be compensated before the damage becomes irreversible.' },
              { type: 'link', text: 'Overall judgement: the global shift has created enormous economic winners but at severe environmental and social costs. The extent to which winners and losers are created depends on the metric used, but the ENVIRONMENTAL dimension is the most concerning because its effects are irreversible and affect all 1.4 billion Chinese citizens regardless of their economic status.' },
            ],
          },
        ],
      },

      // GL-09: Global Shift Losers
      {
        id: 'gl-09',
        num: '09',
        title: 'Global Shift Losers',
        question: 'Evaluate the social, economic and environmental impacts of deindustrialisation on communities in developed countries.',
        marks: 20,
        center: 'Deindustrialisation\nImpacts',
        branches: [
          {
            label: 'Social\nImpacts',
            color: '#4a90d9',
            notes: [
              { type: 'argument', text: 'Deindustrialisation leads to lack of investment in skills and training — once factories close, the training infrastructure (apprenticeships, technical colleges, on-the-job learning) disappears with them. Communities lose not just jobs but the capacity to create new ones.' },
              { type: 'argument', text: 'Government policy has been London-focused, concentrating investment in the capital while neglecting deindustrialised regions. This creates a perception of abandonment that fuels resentment, crime, and support for extremist and far-right political movements.' },
              { type: 'argument', text: 'Automation compounds deindustrialisation — even when manufacturing returns, it creates far fewer jobs than before because robots replace human workers. Communities that lost thousands of manual jobs cannot recover even if factories are rebuilt.' },
              { type: 'evaluation', text: 'The social impacts of deindustrialisation are long-lasting and intergenerational — children growing up in deindustrialised communities have lower educational attainment, worse health outcomes, and fewer opportunities than those in prosperous areas. Deprivation becomes self-reproducing.' },
              { type: 'evaluation', text: 'The rise of crime, substance abuse, and far-right extremism in deindustrialised areas is a direct social consequence — communities that lose their economic purpose also lose social cohesion, community pride, and hope for the future. The social fabric unravels alongside the economic base.' },
            ],
          },
          {
            label: 'Economic\nImpacts',
            color: '#5ba3e6',
            notes: [
              { type: 'argument', text: 'Derelict industrial buildings are expensive to demolish and remediate — contaminated land requires costly cleanup before redevelopment. The physical legacy of industry creates an economic burden that deters new investment and perpetuates decline.' },
              { type: 'argument', text: 'Reduced employment leads to lower tax revenues, which reduces local government\'s ability to invest in services, infrastructure, and regeneration — creating a downward spiral where economic decline causes further economic decline.' },
              { type: 'casestudy', text: 'Leicester: in the 1920s, over 300,000 people worked in textiles. In 1960, the industry was still booming — all M&S knitwear was made locally, factories employed 6,000+ staff. Demand for workers brought Indian, Pakistani, and Ugandan immigrants who became part of the community.' },
              { type: 'casestudy', text: 'In the 1980s, Leicester\'s textile industry suffered massive decline as China took over global garment production. Factories closed, unemployment soared, and entire communities that had been built around textile employment lost their economic foundation.' },
              { type: 'evaluation', text: 'The economic impact is not just job losses but the destruction of entire economic ECOSYSTEMS — when a major industry closes, all the supporting businesses (suppliers, maintenance, transport, retail) collapse too. The multiplier effect works in reverse.' },
            ],
          },
          {
            label: 'Environmental\nImpacts',
            color: '#6bb5f0',
            notes: [
              { type: 'argument', text: 'Contaminated land from decades of industrial activity — chemicals, heavy metals, asbestos, oil — makes former industrial sites expensive and dangerous to redevelop. The environmental legacy of industry persists long after the economic activity has ceased.' },
              { type: 'argument', text: 'Chemical waste from abandoned factories can leach into groundwater, contaminate soil, and create health hazards for surrounding communities. Former industrial areas often have higher rates of cancer and respiratory disease linked to historical pollution.' },
              { type: 'evaluation', text: 'Paradoxically, deindustrialisation also has environmental BENEFITS — air and water quality improve when factories close, and nature can recolonise former industrial sites. But this "positive" is hardly compensation for communities that lost their livelihoods.' },
              { type: 'evaluation', text: 'The environmental impact reveals a cruel irony: communities that hosted industry (bearing the pollution costs) are now left with contaminated land (bearing the cleanup costs) while the economic benefits have moved to China and other low-cost producers.' },
            ],
          },
          {
            label: 'Political\nConsequences',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'Deindustrialised communities have been fertile ground for populist and far-right political movements — Brexit, Trump, UKIP, and European nationalist parties all drew disproportionate support from areas that lost manufacturing employment to globalisation.' },
              { type: 'argument', text: 'The perception that globalisation benefits cosmopolitan elites while devastating working-class communities fuels anti-globalisation sentiment and votes for politicians who promise protectionism, immigration controls, and national economic sovereignty.' },
              { type: 'evaluation', text: 'The political consequences of deindustrialisation may ultimately be the most significant — they are reshaping democratic politics across the developed world, with implications for trade policy, immigration, and international cooperation that could slow or reverse globalisation itself.' },
              { type: 'link', text: 'Link to nationalist parties: National Front in France (13% support, anti-EU, anti-immigration), Golden Dawn in Greece (neo-Nazi, 7% during currency crisis, 68 convicted in 2020), Trump (China tariffs, wall, far-right support), UK Conservatives (Brexit, skills-based immigration). All draw support from deindustrialised areas.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'Deindustrialisation has devastating social, economic, and environmental impacts that are mutually reinforcing — job losses reduce tax revenue, reducing services, increasing deprivation, fuelling social problems, deterring investment, causing further job losses. The cycle is extremely difficult to break.' },
              { type: 'evaluation', text: 'SOCIAL impacts are arguably the most severe because they affect human wellbeing directly and intergenerationally — health, education, community cohesion, and mental health are all damaged in ways that economic regeneration alone cannot repair.' },
              { type: 'evaluation', text: 'ECONOMIC impacts are the most visible and measurable — unemployment, dereliction, and fiscal decline are quantifiable. But they may be less permanent than social impacts if effective regeneration policies are implemented.' },
              { type: 'evaluation', text: 'Leicester demonstrates the full cycle: industrial growth attracted diverse workers who built communities; deindustrialisation destroyed the economic base but the communities remained, now dealing with poverty in areas that were once prosperous.' },
              { type: 'link', text: 'Overall judgement: deindustrialisation\'s impacts are overwhelmingly negative for affected communities. The global shift that created Chinese winners created British, American, and European losers. The political consequences (populism, anti-globalisation backlash) now threaten the globalisation system that caused the problem in the first place.' },
            ],
          },
        ],
      },

      // GL-10: Rural to Urban Migration
      {
        id: 'gl-10',
        num: '10',
        title: 'Rural to Urban Migration',
        question: 'Evaluate the causes and consequences of rural-urban migration for both source and destination regions in developing and emerging countries.',
        marks: 20,
        center: 'Rural-Urban\nMigration in\nDeveloping Countries',
        branches: [
          {
            label: 'Push\nFactors',
            color: '#4a90d9',
            notes: [
              { type: 'argument', text: 'Rural poverty is the primary push factor: subsistence farming provides minimal income, land is often overcrowded and overcultivated, and climate change makes rainfall increasingly unpredictable, threatening food security.' },
              { type: 'casestudy', text: 'Ethiopia illustrates rural push factors: farming employs 85% of the workforce but productivity per capita is lower than 20 years ago. Arable land is overcrowded. 90% of crops are rain-fed, so drought devastates livelihoods. Less than 50% have safe water access.' },
              { type: 'argument', text: 'Lack of services drives rural-urban migration — limited access to healthcare, education, and social opportunities in rural areas contrasts sharply with the availability of schools, hospitals, and entertainment in cities, even in developing countries.' },
              { type: 'argument', text: 'Environmental degradation (deforestation, soil erosion, desertification) reduces the carrying capacity of rural land, forcing surplus population to migrate. Ethiopia has less than 3% forest cover and faces complete deforestation within 20 years.' },
              { type: 'evaluation', text: 'Push factors are necessary but not sufficient — people must also perceive that cities offer better opportunities. The perception of urban opportunity (often shaped by media and returning migrants) may not match the reality of urban life for the poor.' },
            ],
          },
          {
            label: 'Pull\nFactors',
            color: '#5ba3e6',
            notes: [
              { type: 'argument', text: 'Urban employment opportunities in manufacturing, services, and the informal sector offer higher incomes than rural agriculture. Even casual urban work often pays more than subsistence farming, making rational economic sense for individual migrants.' },
              { type: 'argument', text: 'Cities offer access to education, healthcare, and social services that are unavailable in rural areas. The concentration of population makes service delivery more efficient, creating genuine advantages for urban residents even in developing countries.' },
              { type: 'argument', text: 'Social and cultural attractions: cities offer entertainment, social networks, religious communities, and the excitement of urban life that contrasts with rural isolation. For young people especially, the city represents freedom and modernity.' },
              { type: 'evaluation', text: 'Pull factors are often exaggerated by media representations and returning migrants who emphasise success over failure. The reality for most rural-urban migrants is informal employment, slum housing, and a different form of poverty — urban rather than rural.' },
              { type: 'evaluation', text: 'China\'s rapid urbanisation illustrates pull factors at scale: the construction of the world\'s largest highway/HSR networks, 82 airports, and massive industrial zones created millions of manufacturing jobs that drew hundreds of millions from rural areas to coastal cities.' },
            ],
          },
          {
            label: 'Source Region\nConsequences',
            color: '#6bb5f0',
            notes: [
              { type: 'argument', text: 'Rural depopulation: selective out-migration of young, educated, able-bodied adults leaves an ageing population dependent on agriculture they increasingly cannot manage. This accelerates rural economic decline.' },
              { type: 'argument', text: 'Remittances sent back by urban migrants can support rural families and communities — providing income for food, school fees, and healthcare that rural economies alone cannot generate. This is the primary positive consequence for source regions.' },
              { type: 'argument', text: 'Loss of human capital (brain drain): the most educated and enterprising young people leave, taking their skills, energy, and innovation potential with them. Rural areas are left with those least able to drive development.' },
              { type: 'evaluation', text: 'The net effect on source regions is debatable: remittances provide short-term financial support, but the long-term loss of human capital and population may doom rural areas to permanent decline. Remittances are a band-aid, not a cure.' },
              { type: 'evaluation', text: 'Rural land may benefit from reduced population pressure — fewer people means less overcultivation. But without investment and innovation (which require the young, educated people who have left), rural agriculture simply declines more slowly rather than developing.' },
            ],
          },
          {
            label: 'Destination\nConsequences',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'Rapid urban growth creates enormous pressure on housing, infrastructure, and services. Cities in developing countries struggle to provide clean water, sanitation, electricity, and transport for populations growing by millions per year.' },
              { type: 'argument', text: 'Informal settlements (slums, favelas) develop as migrants arrive faster than formal housing can be built. These areas lack basic services but provide essential affordable housing and strong community networks for new arrivals.' },
              { type: 'argument', text: 'The informal economy expands to absorb workers who cannot find formal employment — street trading, domestic work, waste recycling, and construction labour provide income but without protection, security, or benefits.' },
              { type: 'evaluation', text: 'Cities benefit from the labour supply: rural-urban migrants are the workers who build infrastructure, staff factories, and provide services. Without migration, urban economic growth would be constrained by labour shortages.' },
              { type: 'evaluation', text: 'The environmental impact on destination cities is severe — air pollution, water contamination, waste management challenges, and loss of surrounding agricultural land to urban sprawl. Rapid urbanisation degrades the urban environment for all residents.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'Rural-urban migration is primarily driven by economic factors (push of rural poverty, pull of urban opportunity) but enabled by transport, communications, and social networks. It is a rational response to structural inequality between rural and urban areas.' },
              { type: 'evaluation', text: 'Consequences are mixed for BOTH source and destination: source regions lose population but gain remittances; destination cities gain labour but face infrastructure strain. Neither purely benefits or loses.' },
              { type: 'evaluation', text: 'The most important consequence is the SCALE — in China alone, hundreds of millions have moved from rural to urban areas in a single generation, making this the largest migration in human history. The consequences are transformative at every level.' },
              { type: 'link', text: 'Overall judgement: rural-urban migration is an inevitable consequence of development and globalisation. Its causes are rooted in rural-urban inequality, and its consequences reshape both source and destination regions in complex ways. Managing it effectively requires investment in BOTH rural development (reducing push factors) and urban infrastructure (managing growth).' },
            ],
          },
        ],
      },

      // GL-11: World Cities
      {
        id: 'gl-11',
        num: '11',
        title: 'World Cities',
        question: 'Evaluate the role of world cities in driving and benefiting from globalisation.',
        marks: 20,
        center: 'World Cities\n& Globalisation',
        branches: [
          {
            label: 'London as\nWorld City',
            color: '#4a90d9',
            notes: [
              { type: 'argument', text: 'London is the main capital-raising centre globally — having a base in London offers financial respectability and access to global capital markets. The City of London and Canary Wharf house the headquarters of major global banks, insurers, and financial services firms.' },
              { type: 'stat', text: 'Pre-COVID London attracted 79,500 international migrants annually (43% of UK total) and had the largest natural increase (82,900, 40% of UK total). Its demographic dynamism is directly linked to its role as a global city attracting talent from worldwide.' },
              { type: 'argument', text: 'London drives globalisation by concentrating decision-making power — TNC headquarters, financial institutions, media companies, and cultural industries based in London make decisions that affect economies and communities worldwide. It is a command-and-control centre of the global economy.' },
              { type: 'evaluation', text: 'London benefits enormously from globalisation — the concentration of wealth, talent, and power generates enormous economic output. But it also concentrates inequality: London has the UK\'s highest poverty rate after housing costs, and ethnic minorities face disproportionate deprivation.' },
              { type: 'stat', text: 'The UK grants investor visas for £1m+ (433 Russian, 419 Chinese between 2008-13). One-third of Russians buy property to educate children. 8% of elite school pupils are Russian (generating £60m in school fees). London\'s world city status attracts global wealth that reshapes the city.' },
            ],
          },
          {
            label: 'Functions\nof World Cities',
            color: '#5ba3e6',
            notes: [
              { type: 'argument', text: 'Financial centres: world cities host stock exchanges, commodity markets, and banking headquarters that direct global capital flows. London, New York, and Tokyo handle trillions of dollars in transactions daily.' },
              { type: 'argument', text: 'Cultural hubs: world cities produce and disseminate global culture — film, music, fashion, art, media, and food. London\'s theatre, New York\'s art scene, and Tokyo\'s technology culture all influence global trends.' },
              { type: 'argument', text: 'Transport nodes: world cities are major aviation hubs connecting global networks. London\'s five airports handle over 170 million passengers annually. China\'s 82 airports (8 of top 12 freight globally) show how transport infrastructure creates world city status.' },
              { type: 'argument', text: 'Innovation centres: world cities concentrate universities, research institutions, and technology companies that drive innovation. The clustering of talent and capital creates an innovation ecosystem that individual cities or countries cannot replicate.' },
              { type: 'evaluation', text: 'World cities concentrate the CONTROL functions of globalisation rather than the production functions — they direct global supply chains, manage capital flows, and shape cultural trends without necessarily manufacturing physical goods. This makes them powerful but also potentially disconnected from productive economies.' },
            ],
          },
          {
            label: 'Benefits\nfor World Cities',
            color: '#6bb5f0',
            notes: [
              { type: 'argument', text: 'Wealth concentration: world cities attract disproportionate shares of global investment, talent, and economic activity. This generates high incomes, tax revenue, and cultural vibrancy that make them magnets for further investment in a self-reinforcing cycle.' },
              { type: 'argument', text: 'Cultural diversity: world cities attract migrants from every country, creating extraordinary cultural richness — London has 300+ languages, the most of any city globally. This diversity drives creativity, innovation, and cultural production.' },
              { type: 'argument', text: 'Infrastructure investment: world city status justifies massive infrastructure spending (Crossrail in London, Hudson Yards in New York) that improves quality of life and productivity for residents and businesses.' },
              { type: 'evaluation', text: 'The benefits of world city status are UNEVENLY distributed — they accrue primarily to property owners, financial sector workers, and affluent professionals. Low-paid service workers, who make the city function, often cannot afford to live there.' },
            ],
          },
          {
            label: 'Problems\nof World Cities',
            color: '#7cc8f5',
            notes: [
              { type: 'stat', text: 'London: house prices up 1,000% (1995-2020), households spend 60% of income on housing, highest poverty rate after housing costs. The world city premium makes living costs unsustainable for ordinary workers.' },
              { type: 'argument', text: 'World cities drive globalisation but also experience its most extreme consequences — extreme inequality, housing crises, cultural displacement, and the tension between global capital and local communities are all concentrated in these cities.' },
              { type: 'argument', text: 'The dominance of world cities drains talent and investment from other regions — the "London effect" in the UK means that the capital attracts disproportionate investment while regional cities and rural areas decline. World cities benefit at the expense of national balance.' },
              { type: 'evaluation', text: 'World cities may be becoming disconnected from their national contexts — London has more in common with New York and Singapore than with Manchester or Newcastle. This creates political tension as non-world-city populations feel left behind by globalisation.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'World cities are both DRIVERS and BENEFICIARIES of globalisation — they concentrate the command-and-control functions that direct global economic activity, and they capture a disproportionate share of the resulting wealth and cultural vibrancy.' },
              { type: 'evaluation', text: 'However, the relationship is reciprocal: globalisation also creates world cities by concentrating activities in a few locations. Without globalisation, there would be no world cities; without world cities, globalisation would lack its command centres.' },
              { type: 'evaluation', text: 'The benefits of world city status are real but unequally distributed — they generate extreme wealth alongside extreme poverty, cultural richness alongside cultural displacement, and opportunity alongside exclusion.' },
              { type: 'link', text: 'Overall judgement: world cities are the NODES of globalisation — the points where global flows of capital, people, information, and culture intersect and are directed. They drive globalisation through decision-making power and benefit through wealth concentration. But they also concentrate globalisation\'s most extreme inequalities.' },
            ],
          },
        ],
      },

      // GL-12: International Migration
      {
        id: 'gl-12',
        num: '12',
        title: 'International Migration',
        question: 'Evaluate the costs and benefits of international migration for both host and source countries.',
        marks: 20,
        center: 'International\nMigration\nCosts & Benefits',
        branches: [
          {
            label: 'Polish Migration\nto UK',
            color: '#4a90d9',
            notes: [
              { type: 'stat', text: 'Push factors from Poland: 18.5% national unemployment, 40% youth unemployment, 40%+ rural unemployment. Poland\'s GDP per capita was $12,700 vs UK\'s $30,900. These massive economic differentials drove migration when borders opened in 2004.' },
              { type: 'stat', text: 'Pull factors to UK: only 5.1% unemployment, significant skill shortages in construction, hospitality, and agriculture. The UK was one of only 3 EU countries not to restrict A8 (2004 enlargement) workers, making it the most accessible destination.' },
              { type: 'argument', text: 'Enabling factors: low-cost airlines connected 9 Polish airports to 18 UK airports, making migration physically easy and cheap. Regional employers actively sought cheap seasonal labour, and specialist recruitment agencies matched Polish workers to UK vacancies.' },
              { type: 'stat', text: '80% of Polish migrants were aged 18-35 — young, economically active, and contributing to National Insurance from day one. They were widely regarded as hard-working, skilled, and flexible, willing to take jobs British workers did not want.' },
              { type: 'evaluation', text: 'Polish migration illustrates the textbook economic migration model: young workers move from low-wage to high-wage economies, filling skill gaps and contributing to growth. But the cultural and political consequences went far beyond the economic logic.' },
            ],
          },
          {
            label: 'Benefits for\nHost Country (UK)',
            color: '#5ba3e6',
            notes: [
              { type: 'stat', text: 'Polish and A8 migration contributed 0.5-1% to UK GDP growth and £2.5 billion in tax revenue. The young age profile meant they were net contributors — paying more in taxes and NI than they consumed in services.' },
              { type: 'argument', text: 'Polish workers filled undesirable jobs in agriculture, food processing, construction, and hospitality that British workers were unwilling to do at the wages offered. This kept these sectors functioning and food prices lower than they would otherwise be.' },
              { type: 'argument', text: 'The migrants were hard-working, skilled, and flexible — they offset inflationary pressures by increasing labour supply, and their willingness to work in difficult conditions made them valued by employers across multiple sectors.' },
              { type: 'evaluation', text: 'The economic benefits are clear in aggregate — more workers, more tax, more growth. But benefits were unevenly distributed: employers gained from cheap labour while local workers in some areas faced wage competition and community change they did not want.' },
            ],
          },
          {
            label: 'Costs for\nHost Country (UK)',
            color: '#6bb5f0',
            notes: [
              { type: 'argument', text: 'Exploitation by employers was widespread — some Polish workers were paid below minimum wage, housed in overcrowded accommodation, and denied employment rights. The vulnerability of migrant workers created opportunities for unscrupulous employers.' },
              { type: 'argument', text: 'Tensions emerged in areas that received large numbers of migrants quickly — communities that had been ethnically homogeneous experienced rapid change, generating cultural friction, competition for housing, and resentment.' },
              { type: 'stat', text: 'Education pressure: 36,000 dependants accompanied Polish migrants, with 27,000 child benefit claims approved. Schools in areas of high migration faced sudden increases in pupils needing English language support.' },
              { type: 'argument', text: 'NHS and public service stress: migrants were generally healthy and young, but their concentration in specific areas created localised pressure on GP surgeries, hospitals, and housing that national aggregate data obscured.' },
              { type: 'stat', text: 'Remittances sent back to Poland represented money leaving the UK economy — billions of pounds flowed to Poland rather than being spent in British shops and services, reducing the domestic multiplier effect of migrant wages.' },
              { type: 'evaluation', text: 'The political cost was ultimately the most significant: immigration concerns were a primary driver of the Brexit vote, suggesting that even economically beneficial migration can generate political costs that exceed the economic gains.' },
            ],
          },
          {
            label: 'Impact on\nSource Country (Poland)',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'Benefits: remittances sent home by UK-based workers supported families, funded education, and stimulated local economies. Skills and experience gained abroad were transferred back when migrants returned, upgrading Poland\'s human capital.' },
              { type: 'argument', text: 'Unemployment reduction: the departure of hundreds of thousands of young workers reduced Poland\'s unemployment rate, easing social pressure and enabling wage growth for those who remained.' },
              { type: 'evaluation', text: 'Costs: brain drain — Poland lost its youngest, most educated, and most enterprising workers to the UK. This human capital loss was difficult to replace and slowed Poland\'s own economic development.' },
              { type: 'evaluation', text: 'Demographic impact: the departure of young adults of childbearing age reduced Poland\'s birth rate, contributing to population decline and ageing. Poland now faces labour shortages of its own, partly caused by the emigration it once encouraged.' },
              { type: 'evaluation', text: 'The net impact on Poland is ambiguous: short-term economic relief (lower unemployment, remittances) came at long-term demographic and human capital costs. Poland\'s subsequent rapid economic growth suggests it adapted, but the full costs may not be visible for a generation.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'International migration produces BOTH costs AND benefits for BOTH host and source countries — the Polish-UK case demonstrates this clearly. There are no simple winners or losers; both countries gained and lost in different dimensions.' },
              { type: 'evaluation', text: 'ECONOMIC costs and benefits are broadly positive for host countries (more workers, more tax, more growth) and mixed for source countries (remittances vs brain drain). The aggregate economic case for migration is strong.' },
              { type: 'evaluation', text: 'SOCIAL and POLITICAL costs are the most contentious — community change, cultural tension, and democratic backlash (Brexit) show that economically beneficial migration can generate social costs that populations are unwilling to accept.' },
              { type: 'evaluation', text: 'The DISTRIBUTION of costs and benefits matters more than the total: employers and migrants benefit most, while local workers and communities in high-migration areas bear the highest costs. Migration increases aggregate wealth but can increase local inequality.' },
              { type: 'link', text: 'Overall judgement: international migration is economically beneficial in aggregate but socially and politically costly in specific locations. The challenge is not whether migration is net positive (it probably is) but how to distribute its benefits more widely and manage its local impacts more effectively.' },
            ],
          },
        ],
      },

      // GL-13: Towards Global Culture
      {
        id: 'gl-13',
        num: '13',
        title: 'Towards Global Culture',
        question: 'Evaluate the extent to which globalisation has led to the spread of a westernised global culture.',
        marks: 20,
        center: 'Globalisation\n& Western\nCulture',
        branches: [
          {
            label: 'Media &\nCorporate Power',
            color: '#4a90d9',
            notes: [
              { type: 'casestudy', text: 'News Corp empire: 101 newspapers, Fox News, 20th Century Fox, BSKYB, plus 33% of a major Russian financial newspaper. The concentration of media ownership in a single western corporation shapes news consumption and political opinion globally — including contributing to Trump\'s rise to power.' },
              { type: 'stat', text: '90% of global music sales are controlled by just 5 firms — all western-owned. This oligopoly determines what music reaches global audiences, promoting western (primarily American) musical styles and English-language content at the expense of local musical traditions.' },
              { type: 'argument', text: 'Hollywood dominates global film markets, spreading western values, lifestyles, and consumer culture to every country with a cinema screen. The "westernisation" debate centres on whether this represents cultural enrichment or cultural imperialism.' },
              { type: 'argument', text: 'Social media platforms (Facebook, Instagram, TikTok, X/Twitter) are designed primarily for western markets but used globally, spreading western communication norms, beauty standards, and consumer aspirations to billions of non-western users.' },
              { type: 'evaluation', text: 'Media power is the most direct mechanism for spreading western culture because it operates at massive scale with minimal cost — a single Netflix series can reach 200+ countries simultaneously, making cultural transmission faster and more pervasive than at any point in history.' },
            ],
          },
          {
            label: 'Cultural\nHomogenisation',
            color: '#5ba3e6',
            notes: [
              { type: 'argument', text: 'Western consumer brands (McDonald\'s, Coca-Cola, Nike, Apple) have become global symbols of modernity and aspiration. Their presence in every major city worldwide represents the most visible form of cultural globalisation — identical products, branding, and consumption experiences everywhere.' },
              { type: 'argument', text: 'English has become the global lingua franca of business, science, technology, and popular culture. This advantage for English-speaking nations represents a massive cultural power imbalance — non-English speakers must adopt the language to fully participate in globalisation.' },
              { type: 'casestudy', text: 'Cultural erosion: Papua New Guinea\'s tribal lifestyles, which represent thousands of years of cultural development, are disappearing as globalisation brings western consumer goods, media, and economic systems. Language loss is accelerating — when a language dies, an entire worldview dies with it.' },
              { type: 'evaluation', text: 'Cultural homogenisation is real but incomplete — while surface-level culture (fashion, food, entertainment) is increasingly globalised, deeper cultural values (family structure, religious practice, social norms) change much more slowly and show greater resistance to westernisation.' },
              { type: 'evaluation', text: 'The spread of western culture is not just cultural but ECONOMIC — western brands, media, and languages carry economic advantages (employment, business opportunities) that make their adoption rational even when culturally unwanted. Economic incentives drive cultural change.' },
            ],
          },
          {
            label: 'Resistance &\nAlternatives',
            color: '#6bb5f0',
            notes: [
              { type: 'casestudy', text: 'Iran banned Barbie dolls as a symbol of western cultural imperialism, replacing them with Sara and Dara dolls wearing traditional Islamic dress. This represents active state resistance to western cultural products perceived as threatening national/religious identity.' },
              { type: 'casestudy', text: 'France and China both impose broadcast content limits requiring minimum percentages of domestic production — protecting local cultural industries from being overwhelmed by cheaper, more heavily marketed American content.' },
              { type: 'argument', text: 'Non-western cultural products are also globalising: K-pop, Bollywood, anime, Chinese cinema, and African music all have growing international audiences. Globalisation is increasingly multi-directional rather than simply western-to-rest.' },
              { type: 'argument', text: 'Social movements spread globally through non-western initiative: Greta Thunberg (Swedish), BLM (US but globally resonant), LGBTQ+ rights movements, and China\'s advocacy for disabled athletes\' rights (2012/2016 Paralympics) all show global cultural flows are not exclusively western.' },
              { type: 'evaluation', text: 'Resistance to western culture shows that globalisation does not inevitably produce homogenisation — where cultures have strong institutions (governments, religious organisations, education systems), they can selectively adopt western innovations while maintaining core cultural identity.' },
            ],
          },
          {
            label: 'Glocalisation\n& Hybridity',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'Glocalisation — the adaptation of global products to local markets — shows that western culture is not simply imposed but is actively modified by receiving cultures. McDonald\'s serves McAloo Tikki in India and teriyaki burgers in Japan; the brand is global but the product is local.' },
              { type: 'argument', text: 'Cultural hybridity creates new forms that are neither purely western nor purely traditional — fusion cuisine, world music, Afrofuturism, and Islamic finance all combine global and local elements in creative ways that defy simple categorisation.' },
              { type: 'evaluation', text: 'Glocalisation suggests that western cultural dominance is more nuanced than it appears — local cultures are not passive recipients but active agents who select, modify, and resist western influences. The flow is two-way, even if unequal.' },
              { type: 'evaluation', text: 'However, the POWER imbalance remains: western companies decide what to adapt and where, western platforms control distribution, and western English dominates communication. Glocalisation may give the appearance of local agency while the structural power remains western.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'Globalisation HAS led to significant spread of western culture — western media, brands, language, and consumer values are now present in virtually every country. The evidence of cultural spread is undeniable.' },
              { type: 'evaluation', text: 'However, the extent should not be exaggerated — deep cultural values (religion, family, social norms) are much more resistant to change than surface-level consumer culture. People may drink Coca-Cola and watch Netflix while maintaining fundamentally non-western worldviews.' },
              { type: 'evaluation', text: 'Cultural globalisation is INCREASINGLY multi-directional: K-pop, Bollywood, and Chinese cultural products are globalising alongside western ones. The future may be cultural diversity at a global level rather than western cultural dominance.' },
              { type: 'evaluation', text: 'State and community resistance shows that cultural globalisation is not inevitable — where there is political will and institutional capacity, cultures can resist, modify, and selectively adopt western influences. But this capacity is unequally distributed.' },
              { type: 'link', text: 'Overall judgement: globalisation has spread western culture significantly, particularly at the surface level of brands, media, and language. But this is not total or irreversible — local resistance, adaptation, and multi-directional cultural flows mean the outcome is cultural hybridity rather than complete westernisation.' },
            ],
          },
        ],
      },

      // GL-14: Closing the Development Gap
      {
        id: 'gl-14',
        num: '14',
        title: 'Closing the Development Gap',
        question: 'Evaluate the extent to which globalisation has widened or narrowed the development gap.',
        marks: 20,
        center: 'Globalisation &\nthe Development\nGap',
        branches: [
          {
            label: 'Evidence of\nNarrowing',
            color: '#4a90d9',
            notes: [
              { type: 'stat', text: 'China: 900 million lifted out of poverty 1980-2020, less than 6% on less than $1/day, 300 million middle class created. This represents the greatest poverty reduction in history, directly linked to China\'s integration into the global economy.' },
              { type: 'stat', text: 'EU new member states achieved 4.2% growth 2004-14 (double pre-accession), Slovakia became an "investment paradise" with 850,000 cars/year production. Globalisation through EU membership dramatically narrowed the gap between Eastern and Western Europe.' },
              { type: 'argument', text: 'TNCs lift an estimated 70 million people per year out of poverty through job creation and the multiplier effect. Technology transfer, management expertise, and infrastructure investment all contribute to development in host countries.' },
              { type: 'argument', text: 'Global health improvements — declining child mortality, increasing life expectancy, expanded vaccination — have been facilitated by globalisation through the spread of medical knowledge, pharmaceutical distribution, and international health organisations.' },
              { type: 'evaluation', text: 'The evidence for narrowing is strongest for EMERGING economies (China, India, Southeast Asia, Eastern Europe) that have successfully integrated into global supply chains. These countries have seen dramatic improvements in living standards directly linked to globalisation.' },
            ],
          },
          {
            label: 'Evidence of\nWidening',
            color: '#5ba3e6',
            notes: [
              { type: 'casestudy', text: 'Ethiopia: farming employs 85% of the workforce but productivity is LOWER than 20 years ago. Less than 3% forested. 1% of world population but 4% of world HIV. The poorest countries have been left further behind even as global wealth increases.' },
              { type: 'argument', text: 'The "switched off" world has not benefited from globalisation — landlocked, conflict-affected, and resource-poor countries lack the infrastructure, stability, and human capital to participate in global supply chains. For them, the development gap has widened.' },
              { type: 'argument', text: 'Within countries, globalisation has WIDENED inequality even where it has raised average incomes. China\'s $4,000 per pupil urban vs $350 rural education spending illustrates how globalisation\'s benefits concentrate in connected areas while bypassing the hinterland.' },
              { type: 'stat', text: 'Bhopal settlement: $470 million for 550,000 injuries and thousands of deaths — $2,200 per family. Meanwhile, Union Carbide shareholders retained billions. The development gap is embedded in the power asymmetry between TNCs and developing country citizens.' },
              { type: 'evaluation', text: 'The development gap has narrowed BETWEEN SOME countries (emerging economies converging with developed ones) but widened WITHIN most countries (urban vs rural, connected vs disconnected, skilled vs unskilled). The aggregate picture hides divergent experiences.' },
            ],
          },
          {
            label: 'Structural\nBarriers',
            color: '#6bb5f0',
            notes: [
              { type: 'argument', text: 'Trade rules favour wealthy nations — agricultural subsidies in the EU and US undermine developing country farmers, patent rules restrict access to medicines and technology, and trade agreements are negotiated by powerful countries in their own interests.' },
              { type: 'argument', text: 'Debt traps: developing countries that borrowed to industrialise often found themselves trapped in debt repayment cycles that transferred wealth from poor to rich countries. Structural adjustment programmes demanded by the IMF often worsened poverty.' },
              { type: 'argument', text: 'Brain drain: globalisation enables the most talented and educated people from developing countries to migrate to wealthier ones, depriving source countries of the human capital needed for development while enriching already-wealthy destination countries.' },
              { type: 'evaluation', text: 'Structural barriers suggest that globalisation is not a neutral force that benefits everyone equally — it operates within a framework of rules, institutions, and power relationships that systematically favour the already-wealthy.' },
            ],
          },
          {
            label: 'Australia\nCase Study',
            color: '#7cc8f5',
            notes: [
              { type: 'stat', text: 'Australia\'s exports/imports ratio has increased by 20% since 1970. Over 400,000 jobs have been created from globalisation. Tribal art has become a valuable export, bringing indigenous culture to global audiences.' },
              { type: 'evaluation', text: 'However, Aboriginal people remain disadvantaged despite national prosperity — welfare is underfunded, traditional land has been sold to TNCs, and English threatens Aboriginal languages. Globalisation has widened the gap WITHIN Australia between indigenous and non-indigenous populations.' },
              { type: 'evaluation', text: 'Australia illustrates the paradox of globalisation and development: the country as a whole has benefited enormously (400,000+ jobs), but its most vulnerable population has been further marginalised. National development can coexist with indigenous dispossession.' },
              { type: 'argument', text: 'The Australian case shows that the "development gap" is not just between countries but within them — globalisation creates winners and losers in every nation, and the gap between them may widen even as national aggregate measures improve.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'Globalisation has NARROWED the development gap between emerging economies and developed ones — China, India, Eastern Europe, and Southeast Asia have converged dramatically. The scale of poverty reduction is historically unprecedented.' },
              { type: 'evaluation', text: 'Globalisation has WIDENED the gap between emerging economies and the "switched off" world — countries in sub-Saharan Africa, conflict zones, and landlocked regions have fallen further behind. The gap between the bottom and the middle has grown.' },
              { type: 'evaluation', text: 'Globalisation has WIDENED inequality WITHIN most countries — urban/rural, skilled/unskilled, connected/disconnected divides have grown even in countries experiencing rapid overall development. This is the most consistent finding across different contexts.' },
              { type: 'evaluation', text: 'The answer to "widened or narrowed?" depends entirely on WHICH gap and WHOSE experience. There is no single answer — the development gap has been simultaneously narrowed and widened depending on the scale and dimension being examined.' },
              { type: 'link', text: 'Overall judgement: globalisation has restructured rather than simply widened or narrowed the development gap. It has created dramatic winners (China\'s 900 million out of poverty) and dramatic losers (Ethiopia\'s declining productivity). The net effect depends on context, governance, and the specific dimension of development being measured.' },
            ],
          },
        ],
      },

      // GL-15: Rising Tensions
      {
        id: 'gl-15',
        num: '15',
        title: 'Rising Tensions',
        question: 'Evaluate the social, political and environmental tensions that have resulted from globalisation.',
        marks: 20,
        center: 'Tensions from\nGlobalisation',
        branches: [
          {
            label: 'Social\nTensions',
            color: '#4a90d9',
            notes: [
              { type: 'argument', text: 'Immigration has generated social tension in host countries — cultural change in previously homogeneous communities creates anxiety about identity, values, and social cohesion. Polish migration to the UK led to tensions in areas receiving large numbers quickly.' },
              { type: 'argument', text: 'Labour market competition: globalisation pits workers in different countries against each other. Deindustrialised communities in developed countries see jobs moving to low-wage economies, generating anger at both migrants (locally) and global trade (structurally).' },
              { type: 'stat', text: 'Leicester: 300,000+ in textiles in the 1920s, industry booming in 1960 (all M&S knitwear), then massive decline as China took over. The social fabric of entire communities was destroyed — communities built around shared industrial employment lost their economic AND social foundation.' },
              { type: 'argument', text: 'Cultural erosion: globalisation threatens traditional lifestyles (Papua New Guinea tribal cultures), languages (thousands endangered), and local identities. Communities that maintained distinct cultures for centuries are being homogenised within a generation.' },
              { type: 'evaluation', text: 'Social tensions are the most personal and emotional consequence of globalisation — they affect how people experience their daily lives, their sense of belonging, and their identity. These tensions cannot be resolved by economic arguments alone.' },
            ],
          },
          {
            label: 'Political\nTensions',
            color: '#5ba3e6',
            notes: [
              { type: 'argument', text: 'Trade protectionism is rising: China was accused of steel dumping in 2016 (against WTO rules), and major economies increasingly use tariffs, subsidies, and regulations to protect domestic industries from global competition.' },
              { type: 'argument', text: 'Immigration restriction has become a dominant political issue: Trump\'s border wall, populist anti-immigration parties across Europe, and skills-based immigration systems all represent political attempts to control the flow of people that globalisation enables.' },
              { type: 'argument', text: 'Censorship and information control: China underplayed the Arab Spring in domestic media, and both Russia and China have been accused of "post-truth" and "fake news" strategies. States use information control to manage the political consequences of globalisation.' },
              { type: 'casestudy', text: 'Nationalist parties have grown across the developed world: National Front in France (formed 1972, 2nd most popular in 2002 presidential election, 13% support, anti-immigration and anti-EU). Golden Dawn in Greece (neo-Nazi, racist/xenophobic symbols, 22 of 703 regional seats, 7% during currency crisis, 68 members convicted in 2020).' },
              { type: 'casestudy', text: 'Trump/Republican: Tea Party element, border wall, flight bans, child separation, removed climate policy, China tariffs, far-right support. UK Conservatives: Brexit, independent trade blocs, skills-based immigration, rightward shift to absorb UKIP voters.' },
              { type: 'evaluation', text: 'Political tensions may be the most dangerous consequence of globalisation because they threaten the international cooperation that globalisation requires. Rising nationalism could reverse decades of trade liberalisation, free movement, and international institution-building.' },
            ],
          },
          {
            label: 'Environmental\nTensions',
            color: '#6bb5f0',
            notes: [
              { type: 'stat', text: 'China: 70% rivers/lakes polluted, 207 Yangtze tributaries unfit for irrigation, acid rain on 30% of land, 360 million without safe water, 40% farmland degraded. The environmental cost of being the "world\'s factory" is catastrophic.' },
              { type: 'argument', text: 'Globalisation externalises environmental costs: developed countries consume products manufactured in countries with weaker environmental regulations, effectively "exporting" their pollution to the developing world. This creates an environmental injustice at global scale.' },
              { type: 'argument', text: 'Resource extraction for global markets drives deforestation (Amazon for soya), drilling (Venezuela for oil), mining (Greenland for minerals), and overfishing worldwide. Globalisation increases demand on finite natural resources beyond sustainable levels.' },
              { type: 'stat', text: 'Ethiopia: less than 3% forested, will be completely deforested in 20 years. China: terrestrial vertebrates declined 50% since 1970, chemicals banned in other countries still used in agriculture. Globalisation accelerates environmental degradation in the most vulnerable countries.' },
              { type: 'evaluation', text: 'Environmental tensions are the most potentially catastrophic — climate change, biodiversity loss, and resource depletion threaten the planetary systems on which globalisation itself depends. The environmental tensions of globalisation may ultimately limit its continuation.' },
            ],
          },
          {
            label: 'Interconnected\nTensions',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'Social, political, and environmental tensions are deeply interconnected: environmental degradation (climate change) causes social disruption (climate migration), which generates political tension (anti-immigration sentiment). Each type of tension fuels the others.' },
              { type: 'argument', text: 'The COVID-19 pandemic exposed how globalisation\'s interconnections transmit shocks: a virus that originated in one country spread worldwide within weeks, triggering economic collapse, supply chain disruption, and nationalistic border closures that revealed the fragility of the globalised system.' },
              { type: 'evaluation', text: 'The interconnection of tensions means that addressing one type without addressing the others is futile — trade protectionism may reduce social tension in developed countries but increases political tension with trading partners and does nothing for environmental degradation.' },
              { type: 'evaluation', text: 'Globalisation has created a world where problems are global but politics remains national — climate change, pandemics, and migration require international cooperation, but nationalism and protectionism are making such cooperation harder. This is the fundamental tension of our era.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'Globalisation has generated significant tensions in ALL three dimensions: social (immigration, cultural change, inequality), political (nationalism, protectionism, censorship), and environmental (pollution, resource depletion, climate change).' },
              { type: 'evaluation', text: 'ENVIRONMENTAL tensions may be the most serious because they are the most irreversible — social and political tensions can theoretically be resolved through policy, but environmental damage (extinction, climate change, deforestation) may be permanent.' },
              { type: 'evaluation', text: 'POLITICAL tensions are currently the most visible — the rise of populism, trade wars, and nationalist movements represents a backlash against globalisation that could reshape the international order for decades.' },
              { type: 'evaluation', text: 'SOCIAL tensions are the most personal and widely felt — deindustrialised workers, displaced communities, and culturally threatened populations experience globalisation\'s tensions in their daily lives.' },
              { type: 'link', text: 'Overall judgement: all three types of tension are significant and interconnected. The most concerning feature is that the tensions may be self-reinforcing — environmental degradation causes social disruption, which generates political nationalism, which prevents the international cooperation needed to address environmental degradation. Breaking this cycle is the defining challenge of globalisation.' },
            ],
          },
        ],
      },

      // GL-16: Maintaining Cultural Identity
      {
        id: 'gl-16',
        num: '16',
        title: 'Maintaining Cultural Identity',
        question: 'Evaluate the strategies used by different groups to maintain cultural identity in the face of globalisation.',
        marks: 20,
        center: 'Maintaining\nCultural Identity',
        branches: [
          {
            label: 'State-Level\nStrategies',
            color: '#4a90d9',
            notes: [
              { type: 'casestudy', text: 'Iran banned Barbie dolls — perceiving them as symbols of western cultural imperialism that threatened Islamic values and gender norms. The state created alternative dolls (Sara and Dara) wearing traditional Islamic dress to provide culturally appropriate toys for Iranian children.' },
              { type: 'casestudy', text: 'France and China both impose broadcast content limits requiring minimum percentages of domestic TV and radio production. This protects local cultural industries from being overwhelmed by cheaper, more heavily marketed American content.' },
              { type: 'argument', text: 'State censorship and information control (China\'s Great Firewall, Russian media management) can be seen as cultural identity preservation strategies — controlling what information reaches citizens prevents western cultural values from undermining national identity.' },
              { type: 'evaluation', text: 'State-level strategies are the most powerful because governments have the coercive capacity to enforce cultural protection through law, regulation, and censorship. However, they are also the most controversial because they restrict individual freedom and access to information.' },
              { type: 'evaluation', text: 'The effectiveness of state strategies depends on regime type: authoritarian states (China, Iran) can impose cultural protection more effectively than democracies where citizens resist censorship. But this effectiveness comes at the cost of civil liberties.' },
            ],
          },
          {
            label: 'Community\nStrategies',
            color: '#5ba3e6',
            notes: [
              { type: 'casestudy', text: 'Ethnic villages in London (German school in Richmond, French Lycée in Kensington, Southall\'s Sikh community) demonstrate how migrant communities maintain cultural identity through institutions: schools, places of worship, shops, newspapers, and cultural events.' },
              { type: 'casestudy', text: 'The Notting Hill Carnival (since 1966, 2.5 million attendees) shows how Caribbean cultural identity has been maintained AND shared through an annual public celebration. Cultural preservation does not require isolation — it can involve outward expression and celebration.' },
              { type: 'argument', text: 'Language preservation through community education is one of the most important strategies — 3 weekly Punjabi newspapers in Southall, Islamic education at the London Muslim Centre, and heritage language schools across the UK maintain cultural identity through linguistic continuity.' },
              { type: 'argument', text: 'Religious institutions are powerful cultural preservation mechanisms — mosques, gurdwaras, temples, and churches maintain not just religious practice but cultural norms, community networks, and intergenerational knowledge transmission.' },
              { type: 'evaluation', text: 'Community strategies succeed because they are voluntary and embedded in daily life — people maintain cultural identity not through dramatic acts of resistance but through everyday practices of cooking, speaking, worshipping, and socialising within cultural communities.' },
            ],
          },
          {
            label: 'Political\nMovements',
            color: '#6bb5f0',
            notes: [
              { type: 'casestudy', text: 'National Front in France: anti-immigration, anti-EU, anti-Islamic — uses cultural identity arguments to justify political positions. The party frames globalisation as a threat to French culture and national sovereignty, attracting 13% support.' },
              { type: 'argument', text: 'Brexit was partly driven by cultural identity concerns — the perception that EU membership eroded British sovereignty, culture, and control over borders. "Take Back Control" was a cultural identity slogan as much as an economic one.' },
              { type: 'argument', text: 'Indigenous rights movements (Aboriginal Australians, Native Americans, Maori) use political activism to resist the cultural erosion caused by globalisation — demanding land rights, language preservation, and recognition of cultural practices.' },
              { type: 'evaluation', text: 'Political movements for cultural identity range from benign (indigenous rights) to dangerous (neo-Nazi Golden Dawn). The same impulse — to preserve cultural identity against globalisation — can produce both progressive and regressive political outcomes.' },
              { type: 'evaluation', text: 'The distinction between legitimate cultural preservation and xenophobic nationalism is the key ethical challenge. When does protecting "our culture" become discriminating against "their culture"? This boundary is politically contested and context-dependent.' },
            ],
          },
          {
            label: 'Cultural\nAdaptation',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'Glocalisation allows cultural identity to be maintained within globalisation rather than against it — communities adopt global products and technologies while maintaining local cultural meaning. Using social media to share traditional practices, for example, uses globalisation to preserve culture.' },
              { type: 'casestudy', text: 'Aik Saath in Slough brings together Muslim, Hindu, and Sikh young people to address tensions — this is cultural identity MAINTENANCE (each group keeps its identity) combined with cultural NEGOTIATION (learning to coexist). It shows that cultural preservation and integration are not opposites.' },
              { type: 'argument', text: 'Cultural hybridisation creates new identities that combine global and local elements — British-Asian, African-American, Franco-Arab identities are not losses of cultural identity but creations of NEW cultural identities that draw on multiple traditions.' },
              { type: 'evaluation', text: 'Cultural adaptation may be the most successful long-term strategy because it works WITH globalisation rather than against it. Pure preservation (attempting to freeze culture in its current form) is likely to fail because cultures have always evolved through contact and exchange.' },
              { type: 'evaluation', text: 'However, adaptation requires CHOICE — communities must be able to choose which elements of globalisation to adopt and which to resist. When economic power dictates cultural change (e.g., TNCs destroying local industries), adaptation becomes imposition.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'State-level strategies are the most POWERFUL (legal enforcement, censorship) but the most CONTROVERSIAL (restrict freedom). They are most effective in authoritarian states but at the cost of civil liberties.' },
              { type: 'evaluation', text: 'Community strategies are the most ORGANIC and SUSTAINABLE — they maintain culture through daily practices rather than top-down enforcement. But they require institutional capacity (schools, religious organisations, media) that not all communities possess.' },
              { type: 'evaluation', text: 'Political movements are the most VISIBLE but the most RISKY — they can protect cultural identity but can also slide into xenophobia and exclusion. The line between cultural pride and cultural supremacism is dangerously thin.' },
              { type: 'evaluation', text: 'Cultural adaptation/hybridisation is the most REALISTIC strategy in a globalised world — pure preservation is impossible when cultures are constantly in contact. The most successful communities are those that maintain core identity while adapting to changing circumstances.' },
              { type: 'link', text: 'Overall judgement: the most effective strategy combines community-level cultural practices (language, religion, food, festivals) with political advocacy for cultural rights, within a framework of cultural adaptation rather than rigid preservation. State censorship and nationalist politics are less effective and more damaging alternatives.' },
            ],
          },
        ],
      },

      // GL-17: Sustainable Living
      {
        id: 'gl-17',
        num: '17',
        title: 'Sustainable Living',
        question: 'Evaluate the effectiveness of local and global strategies in promoting sustainable living as a response to globalisation.',
        marks: 20,
        center: 'Sustainable Living\nStrategies',
        branches: [
          {
            label: 'Local\nStrategies',
            color: '#4a90d9',
            notes: [
              { type: 'casestudy', text: 'Langley Business Centre in Slough: pioneering district heating system using waste heat from a massive data centre to heat 60 homes (100% affordable housing). This local strategy addresses both climate change and housing affordability simultaneously.' },
              { type: 'argument', text: 'Community-level initiatives — local food production, renewable energy cooperatives, transition towns, community-owned transport — address sustainability at a scale where individual actions can make a visible difference and build community engagement.' },
              { type: 'argument', text: 'Local planning decisions shape sustainability: Slough council manages air quality near the M4/Heathrow, residents successfully objected to Bowyer Park development, and the Langley scheme was unanimously approved — local democracy can drive sustainable outcomes.' },
              { type: 'evaluation', text: 'Local strategies are effective at building engagement and demonstrating solutions, but their SCALE is insufficient to address global environmental challenges. A single district heating scheme cannot offset the emissions from the M4 corridor it sits beside.' },
              { type: 'evaluation', text: 'Local strategies often conflict with local economic interests: sustainable planning restrictions can deter the business investment and housing development that communities need. The tension between sustainability and local prosperity is real and unresolved.' },
            ],
          },
          {
            label: 'Global\nStrategies',
            color: '#5ba3e6',
            notes: [
              { type: 'argument', text: 'International agreements (Paris Climate Accord, SDGs) set global frameworks for sustainability that individual nations cannot achieve alone. Climate change, ocean pollution, and biodiversity loss are global problems requiring global coordination.' },
              { type: 'argument', text: 'Global trade rules could promote sustainability if reformed — carbon border adjustments, environmental standards in trade deals, and penalties for environmental dumping would make sustainable production economically competitive with unsustainable alternatives.' },
              { type: 'evaluation', text: 'Global strategies have the potential SCALE to address global problems but lack the ENFORCEMENT mechanisms to ensure compliance. The Paris Accord is voluntary, the SDGs have no penalties for non-achievement, and powerful nations (US, China) can undermine global agreements.' },
              { type: 'evaluation', text: 'Global strategies often reflect the interests of powerful nations: developed countries that industrialised using fossil fuels now demand that developing countries (China, India) limit their emissions, creating perceptions of hypocrisy and injustice that undermine cooperation.' },
              { type: 'argument', text: 'Global movements (Greta Thunberg, BLM, environmental activism) use the tools of globalisation (social media, international networks) to advocate for sustainability — globalisation itself creates the communication channels needed to promote alternatives to unsustainable globalisation.' },
            ],
          },
          {
            label: 'Technology\n& Innovation',
            color: '#6bb5f0',
            notes: [
              { type: 'argument', text: 'Renewable energy technology has become dramatically cheaper, making sustainable energy economically viable. Solar, wind, and battery storage are now cost-competitive with fossil fuels in many markets, creating market-driven sustainability.' },
              { type: 'argument', text: 'Digital technology enables sharing economy, remote working, and reduced travel — potentially reducing emissions without reducing economic activity. COVID-19 demonstrated that remote working is viable at massive scale.' },
              { type: 'evaluation', text: 'Technology is necessary but not sufficient — the rebound effect means that efficiency gains are often consumed by increased consumption. More efficient cars lead to more driving; cheaper flights lead to more flying. Technology alone cannot deliver sustainability without behavioural change.' },
              { type: 'evaluation', text: 'The environmental cost of technology itself is significant: data centres (like Langley\'s 93,000 sqm facility) consume massive amounts of energy, rare earth mining for electronics causes environmental destruction, and e-waste is a growing pollution problem.' },
            ],
          },
          {
            label: 'Economic\nApproaches',
            color: '#7cc8f5',
            notes: [
              { type: 'argument', text: 'Fairtrade, ethical consumption, and corporate social responsibility represent market-based approaches to sustainability — using consumer choice to incentivise sustainable production without requiring government regulation.' },
              { type: 'argument', text: 'Carbon pricing (taxes or cap-and-trade) makes polluters pay for environmental damage, creating economic incentives to reduce emissions. This aligns market forces with sustainability goals rather than working against them.' },
              { type: 'evaluation', text: 'Market-based approaches are effective where consumers have information and purchasing power, but fail for the poorest consumers who cannot afford to choose sustainable options. Ethical consumption is a middle-class luxury in both developed and developing countries.' },
              { type: 'evaluation', text: 'The fundamental tension is that globalisation\'s economic model — growth through increased production and consumption — is inherently unsustainable on a finite planet. Sustainability strategies that do not challenge this growth model are addressing symptoms rather than causes.' },
            ],
          },
          {
            label: 'Evaluation\n& Judgement',
            color: '#3d7fc2',
            notes: [
              { type: 'evaluation', text: 'LOCAL strategies are more effective at building engagement and demonstrating solutions but lack the scale to address global environmental challenges. They are necessary complements to global action, not alternatives.' },
              { type: 'evaluation', text: 'GLOBAL strategies have the necessary scale but lack enforcement mechanisms and are undermined by power politics. International agreements set aspirations but do not guarantee outcomes.' },
              { type: 'evaluation', text: 'The most effective approach COMBINES local action (community energy, sustainable planning, behavioural change) with global frameworks (emissions targets, trade rules, technology transfer) and economic incentives (carbon pricing, ethical trade).' },
              { type: 'evaluation', text: 'However, the fundamental effectiveness question is whether ANY strategy can make globalisation sustainable without fundamentally changing the economic growth model. If sustainability requires reduced consumption, it conflicts with the economic logic that drives globalisation.' },
              { type: 'link', text: 'Overall judgement: current strategies are PARTIALLY effective — they have raised awareness, driven technological innovation, and achieved localised successes. But they have not yet reversed the overall trajectory of environmental degradation driven by globalisation. The scale of the response remains far below the scale of the problem.' },
            ],
          },
        ],
      },
    ],
  },
];

// ========================================
// DIVERSE PLACES - Edexcel A-Level Geography
// Unit 4B: Diverse Places (Human Geography)
// ========================================

export const topicDiversePlaces = {
  id: 'diverse',
  title: 'Diverse Places',
  icon: 'Building2',
  color: '#ff00ff',
  unit: 'Human Geography',
  youtubeLinks: [
    { title: 'Diverse Places Overview', url: 'https://www.youtube.com/watch?v=F3X5K28flDY', duration: '14:20' },
    { title: 'Population & Migration', url: 'https://www.youtube.com/watch?v=4VL0MfVBFKs', duration: '10:15' },
    { title: 'Place Perceptions', url: 'https://www.youtube.com/watch?v=rPOGXPp9Lzg', duration: '8:50' },
    { title: 'Managing Communities', url: 'https://www.youtube.com/watch?v=J2sYkVFHKlE', duration: '12:30' },
  ],

  sections: [
    // ======================================================================
    // SECTION 1 — EQ1: How do population structures vary?
    // ======================================================================
    {
      id: 'div-eq1',
      title: 'EQ1: How do population structures vary?',
      keyTerms: [
        { term: 'Population structure', def: 'The composition of a population by age, sex, ethnicity, employment, and other demographic characteristics, often represented using population pyramids.' },
        { term: 'Census', def: 'An official count and survey of a population conducted every 10 years in the UK, collecting data on age, ethnicity, employment, housing, and migration.' },
        { term: 'Index of Multiple Deprivation (IMD)', def: 'A composite measure ranking areas across seven domains: income, employment, education, health, crime, barriers to housing/services, and living environment. Used to identify the most and least deprived areas in England.' },
        { term: 'ONS (Office for National Statistics)', def: 'The UK government body responsible for collecting, analysing, and publishing official statistics including census data, birth/death rates, migration figures, and economic data.' },
        { term: 'Quantitative data', def: 'Numerical, measurable data such as census statistics, population figures, IMD scores, crime rates, and demographic indicators that can be statistically analysed.' },
        { term: 'Qualitative data', def: 'Non-numerical data capturing opinions, feelings, experiences, and perceptions, gathered through interviews, oral histories, photographs, and media analysis.' },
        { term: 'Sense of place', def: 'The subjective emotional attachment and meaning people associate with a place, shaped by lived experience, memory, identity, culture, and belonging. Varies between insiders and outsiders.' },
        { term: 'Insider perspective', def: 'The viewpoint of someone who lives in or has deep personal experience of a place, shaped by daily routines, community connections, and accumulated memories.' },
        { term: 'Outsider perspective', def: 'The viewpoint of someone unfamiliar with a place, shaped by media representations, statistics, stereotypes, and brief visits rather than lived experience.' },
        { term: 'Deindustrialisation', def: 'The decline of manufacturing and heavy industry in an area, leading to job losses, economic deprivation, out-migration, and changes in population structure. Major in UK from 1970s onwards.' },
        { term: 'Tertiarisation', def: 'The shift of an economy from secondary (manufacturing) to tertiary (service) sector employment, changing the skills demanded and population attracted to an area.' },
        { term: 'Counter-urbanisation', def: 'The movement of people from urban areas to rural settlements, often driven by desire for better quality of life, remote working, and retirement. Changes rural population structures.' },
        { term: 'Suburbanisation', def: 'The outward growth of urban areas into surrounding rural land, driven by transport improvements, housing demand, and desire for more space, creating commuter settlements.' },
        { term: 'Gentrification', def: 'The process by which wealthier people move into a poorer urban area, renovating housing and changing the character of the neighbourhood, often displacing original lower-income residents.' },
        { term: 'Centripetal forces', def: 'Factors that attract or draw people towards a place, such as employment opportunities, low taxes, cultural attractions, and quality of life.' },
        { term: 'Centrifugal forces', def: 'Factors that push people away from a place, such as high housing costs, overcrowding, crime, pollution, or lack of services.' },
        { term: 'GIS (Geographic Information Systems)', def: 'Digital mapping technology used to collect, store, analyse, and present spatial and geographic data, enabling layered analysis of population, deprivation, land use, and environmental data.' },
        { term: 'Demographic data', def: 'Statistical information about populations including birth rates, death rates, fertility rates, age distribution, ethnicity, and migration patterns.' },
        { term: 'Natural increase', def: 'Population growth resulting from more births than deaths in an area, without accounting for migration. Contributes to changing population structures.' },
        { term: 'Net migration', def: 'The difference between immigration (people arriving) and emigration (people leaving) an area. Positive net migration means more people arriving than leaving.' },
        { term: 'Population pyramid', def: 'A graphical representation showing the age and sex distribution of a population. Shape reveals demographic characteristics such as ageing, youth bulges, and migration impacts.' },
        { term: 'Dependency ratio', def: 'The ratio of economically inactive people (under 16 and over 65) to the working-age population. High ratios create economic strain on public services and working taxpayers.' },
        { term: 'Ethnic diversity index', def: 'A statistical measure of how ethnically diverse a population is, calculated as the probability that two randomly chosen people from an area will be from different ethnic groups.' },
        { term: 'Chain migration', def: 'The process by which migrants from a particular area follow earlier migrants to the same destination, creating established community networks that attract further migration.' },
      ],
      notes: [
        'Population structures vary between and within places due to past and present connections to other places, and economic and social changes over time.',
        'Quantitative data sources for investigating places include: the national census (every 10 years), ONS mid-year population estimates, IMD rankings, demographic statistics (birth/death/fertility rates), census ward-level data, crime statistics, and employment data.',
        'Qualitative data sources include: semi-structured interviews with residents, oral histories from long-term inhabitants, photographs (historical and contemporary), media representations (newspaper articles, TV programmes, social media), personal diaries, and artistic depictions.',
        'Fieldwork methods for investigating diverse places include: questionnaire surveys, environmental quality surveys, land-use mapping, pedestrian counts, photographic surveys, GIS mapping of census data, and analysis of IMD indicators at ward level.',
        'Factors changing population structures over time: economic restructuring (deindustrialisation to tertiarisation to quaternary growth), waves of immigration, natural population change, counter-urbanisation, suburbanisation, gentrification, and government policy (housing, planning, immigration).',
        'Deindustrialisation from the 1970s onwards transformed many UK cities — loss of manufacturing jobs led to unemployment, out-migration of working-age people, and deprivation in former industrial areas.',
        'Tertiarisation and quaternary sector growth attracted different demographics — younger, more educated workers drawn to financial services, technology, and creative industries concentrated in cities.',
        'Immigration waves have transformed UK population structures: post-WW2 Commonwealth migration, EU accession migration (2004 A8 countries, 2007 A2), and ongoing global migration patterns.',

        '--- JERSEY CASE STUDY ---',
        'Jersey: Crown dependency in the English Channel, population approximately 110,000, population density 972 people per km\u00b2, average age 37, fertility rate 51 per 1,000 women.',
        'Jersey demographics: 51% of population are non-native born. Of the total population, 38% originate from the UK mainland and 11% are mainly Portuguese (with smaller Polish and Romanian communities).',
        'St Helier (Jersey capital): population approximately 33,000, one-third Portuguese residents, ranked as the 11th most densely populated capital in the world.',
        'Jersey economic transformation: the finance industry became dominant from the 1980s onwards, replacing tourism as the primary economic driver. Low tax status (no VAT, low income tax) attracted international financial services.',
        'Jersey population growth: population grew dramatically from approximately 60,000 in 1980 to approximately 110,000 by 2011, driven largely by migration attracted to finance sector employment.',
        'Jersey centripetal forces: high-paying finance jobs, low taxation regime, high quality of life, English-speaking with European proximity, established Portuguese-speaking community network.',
        'Jersey centrifugal forces: extremely high housing costs, overcrowding in St Helier, limited space on a small island (9 miles by 5 miles), social tensions between established and newer communities, strain on public services.',
        'Jersey housing: average house price significantly above UK average, creating affordability crisis for lower-paid workers, particularly in hospitality and agriculture sectors.',
        'Jersey has a unique sense of place — it is a Crown Dependency, not fully part of the UK, with its own parliament (the States of Jersey), its own currency, and distinct cultural identity blending British and French influences.',
        'Jersey immigration controls: unlike the UK, Jersey operates its own immigration system. Workers need licences to live on the island, and housing qualifications restrict who can buy property — creating a tiered society between "qualified" and "non-qualified" residents.',
        'Jersey language and culture: Jerriais (a Norman French dialect) is still spoken by a small minority, reflecting the island\'s distinct historical identity. The Portuguese community has established its own churches, shops, and cultural organisations.',

        '--- NEWHAM CASE STUDY ---',
        'Newham: London borough in East London, population approximately 352,000, population density 8,762 people per km\u00b2, average age 31 (youngest borough in the UK).',
        'Newham ethnic composition (2021 census): White British fell from 17% in 2011 to 14.8% in 2021, overtaken by Bangladeshi community at 15.9%. African population 11.6%, Indian population 11%.',
        'Newham migration: 55% of residents are non-UK born. There was a 72,000 increase in non-UK born population between 2001 and 2011. Newham is considered the most ethnically diverse borough in London.',
        'Newham has experienced successive waves of immigration: Jewish refugees (early 20th century), Caribbean Windrush generation (1948 onwards), South Asian communities (1960s-70s), Bangladeshi migration (1970s-80s), African migration (1990s onwards), Eastern European EU accession (2004+).',
        'Newham population structure reflects its diversity: very young average age (31), high birth rate, large working-age population, high population turnover (people arriving and leaving), and significant linguistic diversity (over 100 languages spoken).',
        'Newham deprivation: consistently ranked among the most deprived boroughs in England. High levels of child poverty, overcrowded housing, and low wages characterise many wards despite proximity to Canary Wharf financial district.',
        'Newham economic profile: median household income significantly below the London average. High proportion of residents in low-paid service sector work. The contrast with neighbouring financial districts (Canary Wharf, City of London) highlights extreme spatial inequality.',

        '--- SLOUGH POPULATION STRUCTURE ---',
        'Slough: town in Berkshire with population approximately 140,000. Located west of London near Heathrow Airport. The most ethnically diverse town/city in the UK.',
        'Slough ethnic composition: only 34.5% White British, yet 75% of residents claim British identity and 60% were born in Britain — demonstrating that ethnic diversity and national identity can coexist.',
        'Slough has NO racial enclaves — communities are genuinely mixed across the town, unlike many other diverse areas where ethnic clustering occurs. This is relatively unusual for such a diverse place.',
        'Slough has approximately 100 years of successive immigration waves: Welsh and Scottish workers (early 20th century industrial estate), Polish WW2 veterans, Sikh communities (1950s-60s), Hindu communities, and Muslim communities from multiple countries.',
        'Slough population structure: relatively young population due to immigration of working-age people and their families. Higher birth rate than the national average. Large South Asian community (Sikh, Hindu, Muslim) alongside Eastern European, African, and Caribbean communities.',

        '--- SENSE OF PLACE ---',
        'Sense of place is subjective — the same place can evoke completely different feelings in different people depending on their lived experience, cultural background, age, gender, and economic status.',
        'Insider perspectives are shaped by everyday routines, social networks, memories, and emotional connections built over time. Long-term residents may feel strong attachment even to deprived areas.',
        'Outsider perspectives are often shaped by media representations, statistics, and brief impressions. Outsiders may perceive a place very differently from those who live there.',
        'Place identity can be contested — different groups within the same area may have conflicting senses of place, especially in rapidly changing diverse communities.',
        'Media representation significantly shapes outsider perceptions: newspaper coverage of crime, TV documentaries, social media posts, and tourism marketing all construct particular narratives about places.',
        'Place profiles can be constructed using a combination of quantitative data (census, IMD, economic statistics) and qualitative data (interviews, photographs, oral histories) to build a comprehensive picture.',
        'Past and present connections shape population structure: historical trade routes, colonial links, transport infrastructure, and economic specialisation all determine which populations are attracted to or pushed from a place.',
        'The Index of Multiple Deprivation (IMD) ranks 32,844 Lower Layer Super Output Areas (LSOAs) in England across 7 domains: income (22.5% weighting), employment (22.5%), education (13.5%), health (13.5%), crime (9.3%), barriers to housing/services (9.3%), and living environment (9.3%). The most deprived LSOA in England is in Jaywick, Essex. Newham contains some of the most deprived LSOAs in London.',
        'Ethnic diversity index: Calculated as the probability that two randomly chosen people from an area will belong to different ethnic groups. Newham scores among the highest in England (>0.85). Rural areas like the Cotswolds score very low (<0.10). The 2021 census showed England and Wales became more ethnically diverse — White British fell from 80.5% (2011) to 74.4% (2021).',
        'Population pyramids reveal migration impacts: Areas receiving young migrant workers (e.g. Newham, Slough) show bulges in the 20-40 age groups. Retirement destinations (e.g. Cotswolds, Cornwall) show top-heavy pyramids with large 65+ cohorts. Student cities (e.g. Manchester) show spikes in 18-24 age groups.',
        'Chain migration and ethnic clustering: Bangladeshi migration to Tower Hamlets/Newham exemplifies chain migration — early migrants from Sylhet in the 1960s-70s established community infrastructure (mosques, shops, restaurants), attracting subsequent waves. By 2021, the Bangladeshi community was 15.9% of Newham\'s population and 34.6% of Tower Hamlets.',
        'The dependency ratio varies significantly between places: Retirement areas (Cotswolds, Cornwall) have high elderly dependency ratios, straining health and care services. Young, diverse urban areas (Newham, average age 31) have low dependency ratios but high demand for schools and maternity services. Jersey\'s finance-driven migration created a working-age bulge that keeps its dependency ratio low.',
        'Counter-urbanisation impacts on rural population structure: In the Cotswolds, counter-urbanisation by affluent retirees and remote workers has raised the median age to 44 (vs UK 40), driven house prices up 40%, and created "dormitory villages" where newcomers commute and have limited engagement with local community life.',
        'The Windrush generation: Between 1948-1971, approximately 500,000 Caribbean migrants came to the UK, invited to fill post-WW2 labour shortages. The HMT Empire Windrush docked at Tilbury in June 1948 carrying 492 passengers from Jamaica. Caribbean communities settled predominantly in London (Brixton, Notting Hill), Birmingham (Handsworth), and Bristol (St Pauls). The Windrush scandal (2018) saw long-term legal residents wrongly classified as illegal immigrants.',
        'UK immigration policy timeline: 1948 British Nationality Act (Commonwealth citizens\' right to settle), 1962 and 1968 Commonwealth Immigrants Acts (restricting entry), 1971 Immigration Act (work permits), 2004 EU A8 accession (free movement), 2016 Brexit referendum, 2021 points-based immigration system. Each policy shift has reshaped where migrants come from and who can settle.',
        'Gentrification and population change: Gentrification alters the class, age, and ethnic composition of neighbourhoods. In Shoreditch (Hackney), the arrival of tech firms and creative industries transformed a deprived area — White British professionals displaced Bangladeshi communities, average house prices rose from \u00a3150,000 (2000) to \u00a3600,000+ (2020), and independent shops were replaced by artisan coffee shops and galleries.',
        'Evaluation point: Population structures are not static — they are constantly reshaped by economic change, migration policy, housing markets, and social trends. The exam requires understanding how these factors interact at different scales (local, national, global) and how they create both opportunities and tensions in diverse places.',
      ],
    },

    // ======================================================================
    // SECTION 2 — EQ2: How do different people view diverse living spaces?
    // ======================================================================
    {
      id: 'div-eq2',
      title: 'EQ2: How do different people view diverse living spaces?',
      keyTerms: [
        { term: 'Perception', def: 'The way a place is viewed or understood by individuals or groups, shaped by personal experience, media, culture, and available information. Can differ markedly from statistical reality.' },
        { term: 'Rural idyll', def: 'The romanticised perception of the countryside as peaceful, safe, close-knit, and beautiful, often contrasting with the reality of isolation, limited services, poverty, and ageing populations.' },
        { term: 'Media representation', def: 'How places are portrayed in newspapers, television, film, social media, and advertising, which powerfully shapes public perception and can create positive or negative stereotypes.' },
        { term: 'Lived experience', def: 'The personal, first-hand knowledge of a place gained through daily life there, which may differ significantly from statistical data or media portrayals.' },
        { term: 'Environmental quality', def: 'The physical condition of an area including air quality, green space, noise levels, building condition, litter, and overall aesthetic appeal, affecting both perception and wellbeing.' },
        { term: 'Deprivation', def: 'The lack of access to resources and opportunities considered necessary for adequate quality of life, measured across domains including income, employment, education, health, and housing.' },
        { term: 'Place inequality', def: 'The uneven distribution of wealth, services, opportunities, and quality of life between and within places, creating spatial patterns of advantage and disadvantage.' },
        { term: 'Rural decline', def: 'The loss of services, employment, young people, and economic activity in rural areas, leading to an ageing population, reduced service provision, and increasing isolation.' },
        { term: 'Counter-urbanisation impacts', def: 'The effects of urban-to-rural migration on rural communities: rising house prices, changing village character, dormitory settlements, conflict between newcomers and established residents.' },
        { term: 'Crime perception', def: 'How safe or dangerous people believe a place to be, often shaped more by media coverage and reputation than actual crime statistics.' },
        { term: 'Cultural representation', def: 'How a place is depicted through art, literature, film, TV, and music, creating narratives that shape both insider identity and outsider perception.' },
        { term: 'Boosterism', def: 'The deliberate promotion of a place to attract visitors, investment, or residents, often emphasising positive features while downplaying challenges or problems.' },
        { term: 'Place branding', def: 'The strategic marketing of a place to create a positive identity and image, often used by councils and tourism bodies to attract investment and visitors. Can conflict with residents\' lived experience.' },
        { term: 'Cognitive map', def: 'A mental image or map of a place held by an individual, shaped by personal experience and knowledge. Different people hold different cognitive maps of the same place.' },
        { term: 'Endogenous factors', def: 'Internal characteristics of a place that shape its identity — local culture, traditions, community organisations, physical geography, and built environment.' },
        { term: 'Exogenous factors', def: 'External forces that shape a place — government policy, globalisation, migration, media representation, and investment decisions made elsewhere.' },
      ],
      notes: [
        'Urban places are simultaneously perceived as dangerous and attractive — cities offer economic opportunities, cultural diversity, entertainment, and social connections, but also face issues of crime, pollution, inequality, and overcrowding.',
        'Cities attract young people and migrants because of the range of economic opportunities: diverse job markets, higher wages, career progression, entrepreneurial opportunities, access to education, and established migrant community networks.',
        'Media representation powerfully shapes perception of places — both positively (tourism promotion, regeneration success stories) and negatively (crime reporting, deprivation narratives, stereotyping of communities).',
        'Quantitative data such as IMD scores and crime statistics provide measurable indicators but may not reflect the lived experience of residents. A statistically deprived area may have strong community bonds and resident satisfaction.',
        'Qualitative data from interviews and oral histories captures the emotional and subjective dimensions of place that statistics miss, but can be biased by individual experience and difficult to generalise.',

        '--- MEDELL\u00CDN CASE STUDY (Perception of Place) ---',
        'Medell\u00edn: Colombia\'s second largest city, located in the Aburr\u00e1 Valley in the Andes mountains. Population approximately 2.5 million in the city, 3.7 million in the metropolitan area.',
        'Medell\u00edn in the 1990s was known as the "murder capital of the world" — dominated by Pablo Escobar and the Medell\u00edn Cartel, which at its peak in the 1970s made an estimated $70 million per day.',
        'The Medell\u00edn Cartel controlled approximately 80% of cocaine entering the United States. During the 1990s, an average of 16 people per day were murdered in the city.',
        'Medell\u00edn transformation: the city has won major international awards for urban innovation — the Urban Land Institute named it "Innovative City of the Year" and it won the Lee Kuan Yew World City Prize in 2016.',
        'Key Medell\u00edn innovations: an integrated cable car (Metrocable) network linking poor hillside communities (comunas) to the downtown metro system, dramatically reducing travel times and social isolation for the poorest residents.',
        'Medell\u00edn social investment: new youth clubs, education centres (library parks built in the poorest neighbourhoods), escalators on steep hillsides (Comuna 13), and public spaces designed to foster community interaction.',
        'Medell\u00edn outdoor escalators in Comuna 13: a 384-metre outdoor escalator system installed in one of the most dangerous neighbourhoods, replacing a 35-minute steep climb with a 6-minute ride. Became a symbol of the city\'s transformation.',
        'Medell\u00edn library parks programme: architecturally striking public libraries built in the poorest comunas, providing free internet, education, and community space. The Espa\u00f1a Library (designed by Giancarlo Mazzanti) became an iconic symbol of regeneration.',
        'Medell\u00edn murder rate reduction: approximately 80% reduction in murder rate from the peak of the 1990s, achieved through a combination of social investment, infrastructure improvements, and policing reforms.',
        'Medell\u00edn now hosts South America\'s biggest fashion show (Colombiamoda), reflecting its transformation from a city associated with violence to one associated with creativity, fashion, and innovation.',
        'Wall Street Journal named Medell\u00edn the "most innovative city in the world" in 2013, beating New York and Tel Aviv. This demonstrates how sustained investment and urban planning can fundamentally transform place perception.',
        'Medell\u00edn demonstrates how place perception can be transformed through sustained investment, innovative urban planning, and deliberate rebranding — though challenges of inequality and violence persist in some areas.',
        'Medell\u00edn as an exam case study: useful for discussing how perception of place changes over time, the role of media in shaping place identity (from "murder capital" to "most innovative city"), and how infrastructure investment can transform both reality and perception.',
        'Medell\u00edn limitations: despite improvements, inequality remains extreme. Wealthy residents in El Poblado neighbourhood live very differently from hillside comuna residents. Violence has reduced but not disappeared. Some critics argue the transformation benefits tourists and middle classes more than the poorest.',

        '--- COTSWOLDS RURAL CASE STUDY ---',
        'The Cotswolds: Area of Outstanding Natural Beauty (AONB) spanning parts of Gloucestershire, Oxfordshire, Wiltshire, and neighbouring counties. Known for honey-coloured limestone villages.',
        'Cotswolds demographics: highest proportion of unpaid carers in the UK per 1,000 population. Median age 44 (compared to UK median of 40). One in three residents aged over 65 (compared to UK average of one in six).',
        'The "Weekend Wiltshire Effect": migration from Bristol and London is changing the character of Cotswolds villages. Affluent urban professionals buying second homes or relocating, driving counter-urbanisation.',
        'Cotswolds housing crisis: house prices have risen approximately 40%, with average prices around \u00a3310,000. Counter-urbanisation by wealthier incomers prices out younger local people and key workers.',
        'Cotswolds transport challenges: without a car, residents face extreme isolation — described as living on "islands in an ocean" due to very limited public transport. Bus services have been cut repeatedly.',
        'Cotswolds seasonal challenges: traffic and congestion in summer from tourism, limited youth services (approximately 40% funding cuts), housing unaffordable for young locals, low-wage seasonal jobs in farming and tourism.',
        'Cotswolds elderly isolation: loneliness rates among the elderly are approximately 18% higher than in urban areas. Only 42% of rural residents can access a weekly GP surgery, compared to much higher rates in urban areas.',
        'The rural idyll vs rural reality: the Cotswolds exemplifies this tension — perceived externally as a tranquil, beautiful, prosperous countryside, but facing real challenges of isolation, ageing, service decline, and affordability.',
        'BBC Three\'s "This Country" (set in the Cotswolds) represents the cultural challenge of rural life: boredom, lack of opportunity, limited social life, and the gap between the idyllic image and lived reality of young rural residents.',
        'Cotswolds economy: dominated by agriculture, tourism, and small-scale services. Seasonal employment creates income instability. Limited quaternary sector opportunities drive young people to cities.',
        'Cotswolds perception vs reality: outsiders perceive it through tourism marketing (honey-coloured villages, cream teas, rolling hills) while insiders experience the challenges of rural poverty, isolation, and service deprivation hidden behind the picturesque facade.',
        'Cotswolds second homes: significant numbers of properties purchased as second homes or holiday lets, reducing available housing stock for local residents and creating "ghost villages" that feel empty during weekdays and winter months.',

        '--- SLOUGH PERCEPTION OF PLACE ---',
        'Slough has a historically negative outsider perception — famously mocked in John Betjeman\'s 1937 poem "Slough" ("Come, friendly bombs, and fall on Slough!") and used as the setting for Ricky Gervais\'s "The Office" (2001-2003), portraying suburban boredom and mundane working life.',
        'Slough insider perspective: residents often describe strong community bonds, cultural vibrancy, economic opportunity, and pride in the town\'s diversity and multiculturalism, contrasting sharply with the negative outsider stereotype.',
        'Slough perception gap: outsiders associate it with concrete, industrial estates, and the M4 corridor; insiders highlight cultural festivals, diverse cuisine, community organisations like Aik Saath, and proximity to both London and the countryside.',
        'Slough demonstrates how media representation can create lasting negative perceptions that persist long after the reality has changed — the town has undergone significant regeneration and economic growth but still battles its cultural reputation.',

        '--- NEWHAM PERCEPTION OF PLACE ---',
        'Newham perception before 2012: associated with deprivation, crime, and post-industrial decline. The docklands closure left lasting economic damage and negative perceptions of East London.',
        'Newham perception after 2012 Olympics: rebranded as a regenerating, dynamic area with the Queen Elizabeth Olympic Park, Westfield Stratford City, and improved transport links. However, existing residents may not feel the benefits match the hype.',
        'Westfield Stratford City: Europe\'s largest urban shopping centre, opened in 2011 ahead of the Olympics. Provides retail employment but much of it is low-paid and insecure. Changes the perception of Stratford from industrial to commercial.',
        'Newham contested perception: developers and the council promote a narrative of regeneration and opportunity; long-term residents may perceive displacement, rising costs, and loss of community character. Both perspectives are valid but conflicting.',
        'Lived experience of place differs by age, gender, ethnicity, and class: A young Bangladeshi woman in Newham may experience the area as a supportive community with familiar food, language, and cultural institutions. A White British retiree in the same area may feel alienated by demographic change. Both are valid "lived experiences" of the same place.',
        'The "rural idyll" concept (Raymond Williams): The countryside is romanticised as peaceful, safe, and community-oriented — an idealised vision perpetuated by tourism marketing, TV programmes (Countryfile, Escape to the Country), and estate agents. The reality for many rural residents includes isolation, limited services, fuel poverty, poor broadband, and hidden deprivation.',
        'Deprivation in rural areas is often hidden: The IMD may not capture rural deprivation effectively because LSOAs in rural areas cover larger geographical areas, averaging out pockets of severe deprivation. Access deprivation (distance to services, lack of public transport) is particularly severe — in the Cotswolds, only 42% of residents can access a weekly GP surgery.',
        'Brixton as a contested place: Brixton in Lambeth, south London, has experienced dramatic perception shifts. In the 1980s, it was associated with the Brixton riots (1981, 1985) driven by racial tensions and police discrimination. By the 2010s, gentrification transformed it — Brixton Village market became a foodie destination, house prices tripled, and the area attracted young professionals. Long-term Caribbean residents feel their cultural identity is being erased.',
        'Place branding and boosterism: Liverpool rebranded itself as European Capital of Culture (2008), investing in waterfront regeneration and cultural tourism. Glasgow used the "People Make Glasgow" campaign after decades of negative perception. Birmingham is promoting itself as a post-Commonwealth Games (2022) destination. These show how deliberate marketing reshapes place perception, though the lived experience may not match the brand.',
        'Endogenous vs exogenous factors in shaping places: Endogenous factors (local culture, community organisations, physical landscape) give places their distinctive character. Exogenous factors (government policy, globalisation, TNC investment decisions, media representation) can override local identity. The tension between endogenous identity and exogenous forces is a key exam theme.',
        'Social media and place perception: Instagram, TikTok, and Twitter create new place narratives — viral content can transform perception overnight. Walthamstow in East London went from "overlooked" to "desirable" partly through social media promotion of its village feel, marshes, and independent shops. However, this can accelerate gentrification as the area becomes fashionable.',
        'Edward Relph\'s concept of "placelessness" (1976): The increasing homogenisation of places through chain stores, identical housing estates, and standardised architecture erodes distinctive local character. High streets dominated by the same chains (Costa, Greggs, Tesco Express) look identical across the UK. This links to globalisation and cultural homogenisation debates.',
        'Yi-Fu Tuan\'s concept of "topophilia" (1974): The affective bond between people and place — the emotional attachment that develops through lived experience. Residents of even the most deprived areas may feel strong topophilia through community networks, memories, and familiarity. This explains why people resist displacement even when offered "better" housing elsewhere.',
        'Evaluation point: Perception of place is always partial and contested. No single data source (quantitative or qualitative) captures the full picture. The exam rewards candidates who can critically evaluate how different sources of evidence construct different narratives about the same place, and who recognise that insider and outsider perspectives are both valid but incomplete.',
      ],
    },

    // ======================================================================
    // SECTION 3 — EQ3: Why are there demographic and cultural tensions?
    // ======================================================================
    {
      id: 'div-eq3',
      title: 'EQ3: Why are there demographic and cultural tensions in diverse places?',
      keyTerms: [
        { term: 'Cultural tension', def: 'Friction or conflict arising from differences in values, traditions, language, and lifestyle between cultural groups living in the same area, often intensified by rapid population change.' },
        { term: 'Ethnic clustering', def: 'The spatial concentration of an ethnic group in a particular area, driven by chain migration, community support networks, shared cultural facilities, and sometimes exclusion from other areas.' },
        { term: 'Ethnic dispersal', def: 'The spreading out of ethnic communities from concentrated clusters into wider areas, often driven by economic mobility, housing choices, and integration over generations.' },
        { term: 'Cultural diffusion', def: 'The spread of cultural practices, ideas, food, festivals, and traditions from one community or place to another, often through migration, media, and globalisation.' },
        { term: 'Segregation', def: 'The spatial separation of different population groups within an area, whether by ethnicity, income, age, or social class. Can be voluntary (choice) or involuntary (discrimination, economics).' },
        { term: 'Intra-urban migration', def: 'Movement of people within a city, often following life-cycle patterns: young adults near the CBD (rented accommodation, nightlife), families moving to suburbs (space, schools), elderly downsizing or entering care.' },
        { term: 'Regeneration', def: 'The process of improving and revitalising a run-down or economically declining area through investment in housing, infrastructure, employment, and services.' },
        { term: 'Olympic legacy', def: 'The long-term economic, social, environmental, and infrastructure impacts of hosting the Olympic Games on the host city and surrounding area.' },
        { term: 'Displacement', def: 'The forced movement of residents from their homes, often caused by regeneration, gentrification, rising rents, compulsory purchase orders, or redevelopment schemes.' },
        { term: 'Brutalist architecture', def: 'A style of architecture using exposed concrete, geometric forms, and large-scale structures, common in UK council housing from the 1960s-70s. Often associated with the concept of "streets in the sky".' },
        { term: 'Social housing', def: 'Rental housing provided at below-market rates by local councils or housing associations, intended for people who cannot afford private market housing.' },
        { term: 'Overseas investment', def: 'Foreign capital invested in property or development, which can drive regeneration but also inflate house prices and create "buy-to-leave" properties that remain empty.' },
        { term: 'Centripetal vs centrifugal forces', def: 'Centripetal forces draw communities together (shared identity, festivals, community organisations), while centrifugal forces push them apart (cultural differences, economic competition, spatial segregation, language barriers).' },
        { term: 'White flight', def: 'The movement of White British populations out of increasingly diverse urban areas, driven by complex factors including housing costs, lifestyle preferences, and sometimes discomfort with demographic change.' },
        { term: 'Housing affordability ratio', def: 'The ratio of average house prices to average earnings in an area. A higher ratio means housing is less affordable. Used to measure the housing crisis in diverse places.' },
        { term: 'Section 114 notice', def: 'A formal declaration by a local authority that it cannot balance its budget, effectively declaring bankruptcy. Prevents all non-essential spending and triggers government intervention.' },
        { term: 'Buy-to-leave', def: 'The practice of purchasing property as a financial investment without intending to live in or rent it, leaving homes empty while profiting from rising property values. Common with overseas investors in London.' },
      ],
      notes: [
        'Rapid population change creates cultural tensions and competition for resources — housing, school places, healthcare, and employment can all become contested when populations change quickly.',
        'Centripetal forces bringing diverse communities together include: shared economic interests, community festivals and events, local institutions (schools, places of worship, community centres), and inter-marriage/social mixing.',
        'Centrifugal forces pushing communities apart include: language barriers, cultural differences in lifestyle and values, economic competition for jobs and housing, spatial segregation, media stereotyping, and political rhetoric about immigration.',

        '--- NEWHAM IMMIGRATION AND CULTURAL IMPACT ---',
        'Bangladeshi community is the most clustered ethnic group in East London, concentrated in areas like Tower Hamlets and parts of Newham. However, there is evidence of gradual dispersal as second and third generations move outward.',
        'Approximately half of the White British population has moved out of Newham since 2011, a pattern sometimes described as "white flight" though the reasons are complex (housing costs, counter-urbanisation, changing preferences).',
        'Cultural landscape changes in Newham: traditional pubs closing as demographics change, replaced by cafes, restaurants, and shops serving diverse communities. This is perceived positively by some (cultural richness) and negatively by others (loss of traditional character).',
        'Notting Hill Carnival: annual Caribbean festival established in 1966 by Claudia Jones, a Trinidadian-born activist. Approximately 2.5 million people attend, making it Europe\'s largest street festival. Demonstrates cultural diffusion and celebration of diversity.',
        'Diwali celebrations: Hindu festival of lights now widely celebrated across the UK. Leicester\'s "Golden Mile" (Belgrave Road) hosts the largest Diwali celebrations outside India. Used for boosterism and tourism promotion, BUT associated with PM2.5 air pollution spikes from fireworks.',
        'Chinese New Year: once confined to London\'s Chinatown in Soho, now a major London-wide event with celebrations in Trafalgar Square. Raises the question of whether cultural events represent genuine social integration or merely cultural acceptance at a surface level.',

        '--- LONDON MIGRATION STATISTICS ---',
        'London migration dynamics: London has the largest natural increase of any UK region at 82,900 (representing 40% of the UK total), plus 79,500 net international migrants (43% of UK net international migration).',
        'However, London experiences significant internal out-migration: approximately 55,000 net internal migrants leave London annually for other UK regions (counter-urbanisation, housing costs, family-stage moves).',
        'Post-Covid and post-Brexit impact on London: net increase dropped to only 10,000 in 2020/21. Approximately 94,000 people left London in 2019/20, accelerated by remote working possibilities and pandemic lifestyle changes.',
        'Intra-urban migration patterns in London: young people cluster near the CBD in small rented units attracted by social life, employment, and transport. Older families move further out seeking space, gardens, and good schools.',

        '--- ECONOMIC INEQUALITY AND EAST LONDON HISTORY ---',
        'East London historical development: dominated by docklands industry (shipping, warehousing, manufacturing), suffered heavy WW2 bombing damage, rebuilt in 1960s with tower blocks exemplifying Brutalist architecture and "streets in the sky" philosophy.',
        'London Docklands regeneration from the 1980s: creation of the London Docklands Development Corporation (LDDC), Canary Wharf financial district development, transformation from industrial wasteland to global financial centre.',
        'Major East London regeneration milestones: Docklands Development (1980s), O2 Dome/Millennium Dome (2000), and the 2012 Olympic Games — each bringing investment but also controversy over benefits distribution.',

        '--- 2012 OLYMPICS IMPACT ON NEWHAM ---',
        '2012 Olympics: approximately \u00a39 billion investment in east London. Created 7,000 temporary jobs and 5,000 construction jobs, BUT only 20% of construction jobs went to local Newham residents.',
        'Olympic displacement: 380 companies were relocated during construction, displacing approximately 11,000 jobs from the area. Some businesses never recovered from forced relocation.',
        'Olympic housing impact: house prices in Newham increased by 33% or more following the Olympics. Two-thirds of private homes in the Olympic Village were bought by overseas investors and not lived in ("buy-to-leave" investment).',
        'Some residents were forcibly moved from their homes to make way for Olympic construction, raising questions about whose interests regeneration serves.',
        'Olympic legacy positives: 5,000 new homes planned, 3,000 Olympic Village flats converted to housing (half designated low-cost/affordable), significant environmental improvements.',
        'Olympic environmental legacy: 4,000 trees planted, 300,000 wetland plants established, 2 million tonnes of contaminated soil cleaned from the former industrial site, creating the Queen Elizabeth Olympic Park.',
        'The Olympics illustrates the tension in regeneration: large-scale investment brings genuine improvements but benefits may flow disproportionately to outsiders (investors, commuters, tourists) rather than existing local communities.',
        'Queen Elizabeth Olympic Park: now includes the London Stadium (West Ham United), London Aquatics Centre, ArcelorMittal Orbit sculpture, and extensive parkland. Hosts cultural events and provides recreation space for East London communities.',

        '--- CARPENTERS ESTATE AND GENTRIFICATION ---',
        'London social housing crisis: since 1997, London council houses have fallen by approximately 300,000 units while population increased by approximately 1 million people.',
        'Newham housing pressure: approximately 16,000 people on the housing waiting list. Council budgets were cut by approximately 40% between 2008 and 2013 under austerity measures.',
        'Carpenters Estate (Stratford, Newham): council-owned estate near the Olympic Park. Flats left deliberately empty for 8 or more years as the council and developers waited for property values to rise post-Olympics.',
        'Newham Council sold the Carpenters Estate to private developers, triggering intense debate about gentrification, displacement, and the purpose of social housing.',
        'Arguments FOR Carpenters Estate redevelopment: creation of jobs, attracting investment, improved transport connections, higher-quality housing, mixed-tenure development, and regeneration of a declining estate.',
        'Arguments AGAINST Carpenters Estate redevelopment: displacement of existing low-income residents, only short-term construction jobs, new homes unaffordable for local people, overseas buyers purchasing investment properties, loss of community, and destruction of social housing stock.',
        'Gentrification cycle: wealthier newcomers move in, property values rise, local shops replaced by upmarket businesses, original residents priced out, community character fundamentally changes — a pattern repeated across London and other major cities.',

        '--- SLOUGH TENSIONS AND CHALLENGES ---',
        'Slough environmental challenge: second highest deaths from poor air pollution (approximately 4,000 deaths per year attributed to pollution from the M4 motorway and Heathrow Airport flight paths).',
        'Slough housing pressure: housing benefit cuts forced many low-wage earners from central London boroughs to relocate to Slough, increasing pressure on already-stretched housing and services.',
        'Slough housing demand: approximately 7,000 council properties but a waiting list of 7,000 more people — demand equals existing stock, creating a severe housing crisis.',
        'Slough development objections: Bowyer Park apartment complex objected to by locals on grounds of visual impact on green spaces and neighbourhood character.',
        'Stoke Wharf development faced local objections about density — residents concerned about overcrowding and impact on existing infrastructure and services.',
        'High Street development: 300 homes planned but original 19-storey tower design rejected by residents as "far too high" for the town centre character — demonstrating tension between densification needs and community preferences.',
        'Slough demonstrates tensions between economic growth and quality of life — strong economy attracts workers and investment, but air pollution, housing shortage, and strained services create significant challenges for residents.',

        '--- CORNWALL TENSIONS ---',
        'Cornwall demographic tensions: elderly migration from London and the South East raises house prices beyond local affordability, creating intergenerational conflict over housing access.',
        'Cornwall immigration impact: migrant workers (particularly Eastern European) undercutting local labour costs in agriculture, hospitality, and food processing sectors, creating economic tension.',
        'Cornwall post-Brexit tension: loss of EU Convergence Funding (worth hundreds of millions) left a significant gap. UK Shared Prosperity Fund replacement criticised as insufficient and less well-targeted.',
        'Cornwall centre-periphery tension: critics argue Westminster funding and policy misses local issues. Decisions made in London do not reflect the needs of a peripheral rural economy dependent on declining primary industries.',
        'Cornwall generational tension: young people leave for education and employment in cities (brain drain), while retirees move in, changing the age structure and character of communities.',

        '--- SEGREGATION VS INTEGRATION ---',
        'Segregation can be voluntary or involuntary: Voluntary segregation occurs when communities cluster for mutual support — shared language, cultural facilities, places of worship, and specialist shops (e.g. Brick Lane Bangladeshi community in Tower Hamlets). Involuntary segregation results from discrimination, affordability constraints, and exclusion from certain areas.',
        'The Casey Review (2016) found that some UK communities were becoming more segregated, not less. Dame Louise Casey reported that in some areas, people from different backgrounds led "parallel lives" with little meaningful interaction. Schools in parts of Birmingham, Bradford, and Blackburn were over 90% from a single ethnic group.',
        'Integration indicators: inter-ethnic marriage rates (increasing — 10% of UK partnerships are inter-ethnic), shared workplace and school experiences, participation in community events, and English language proficiency. The 2021 census showed 91.1% of usual residents in England and Wales spoke English as a main language.',
        'The Cantle Report (2001) — produced after the Bradford, Burnley, and Oldham riots — coined the term "parallel lives" and recommended promoting community cohesion through shared spaces, inter-faith dialogue, and citizenship education. It argued segregation bred mutual suspicion and mistrust.',

        '--- GENTRIFICATION CASE STUDIES ---',
        'Shoreditch (Hackney) gentrification: Once a deprived area of East London with high unemployment and social housing. From the late 1990s, artists and creative industries moved in, attracted by cheap rents. Tech firms followed (Silicon Roundabout/Tech City). Average house prices rose from \u00a3150,000 (2000) to \u00a3600,000+ (2020). Original Bangladeshi and working-class communities were priced out.',
        'Brixton gentrification: Historically a centre of Afro-Caribbean culture (Windrush generation settled from 1948). Brixton Village indoor market was revitalised in 2009 with independent food stalls. By 2015, Foxtons estate agents opened a branch — seen as a symbol of gentrification. Average rents doubled between 2010-2020. The Ritzy Cinema living wage dispute (2014) highlighted tensions between gentrifying businesses and workers.',
        'Gentrification process (Ruth Glass, 1964 — coined the term): Stage 1 — pioneer gentrifiers (artists, students) move to cheap areas. Stage 2 — property developers recognise potential, renovate housing. Stage 3 — middle-class professionals arrive, house prices rise sharply. Stage 4 — original residents displaced, local character fundamentally altered. Chain shops replace independents.',
        'Arguments FOR gentrification: Reduces crime, improves housing stock, increases council tax revenue, attracts investment and jobs, improves environmental quality, diversifies the local economy. Arguments AGAINST: Displaces vulnerable communities, destroys social networks, erases cultural identity, increases inequality, and benefits newcomers at the expense of existing residents.',

        '--- DEPRIVATION AND INEQUALITY ---',
        'Spatial inequality in London: Kensington and Chelsea (average life expectancy 84 for men) is just miles from Tower Hamlets (77 for men). The richest 10% of London households own 50% of total wealth. In Newham, 38% of children live in poverty vs 15% in Richmond-upon-Thames.',
        'Deprivation is multi-dimensional: The IMD captures income, employment, education, health, crime, housing, and environment. A place can score well on one domain but poorly on others — Newham has good transport links but high overcrowding; the Cotswolds has beautiful environment but poor access to services.',
        'Housing as a driver of inequality: UK house price to earnings ratio averaged 8.3:1 nationally (2022) but exceeded 12:1 in London. The "housing ladder" has become inaccessible for many young people, particularly in diverse urban areas where demand is highest. Social housing stock fell by 1 million units between 1980-2020 under Right to Buy.',
        'Evaluation point: Cultural tensions in diverse places are not inevitable — they are shaped by policy choices (housing, education, integration strategies), media narratives, and economic conditions. Places like Slough (genuinely mixed, no enclaves) show integration can work, while the Casey Review\'s findings show it is not guaranteed. The exam rewards nuanced analysis of why some places integrate successfully while others experience segregation.',
      ],
    },

    // ======================================================================
    // SECTION 4 — EQ4: How successfully are issues managed?
    // ======================================================================
    {
      id: 'div-eq4',
      title: 'EQ4: How successfully are cultural and demographic issues managed?',
      keyTerms: [
        { term: 'Regeneration strategy', def: 'A planned approach to improving a declining area through coordinated investment in housing, infrastructure, employment, services, and environmental quality, involving multiple stakeholders.' },
        { term: 'Stakeholder', def: 'Any individual, group, or organisation with an interest in or affected by decisions about a place, including residents, councils, developers, businesses, community groups, and government agencies.' },
        { term: 'Brownfield site', def: 'Previously developed land that is available for redevelopment, often former industrial, commercial, or residential sites. Government policy generally favours brownfield over greenfield development.' },
        { term: 'Affordable housing', def: 'Housing provided at below-market rates through government subsidy, planning requirements (Section 106), or housing association provision. Critical shortage in many UK cities.' },
        { term: 'Multiculturalism', def: 'A policy approach that celebrates and supports cultural diversity, encouraging different ethnic and cultural groups to maintain their distinct identities while participating in wider society.' },
        { term: 'Integration', def: 'A policy approach emphasising social cohesion and shared values, encouraging different communities to interact, mix, and develop common bonds while respecting cultural differences.' },
        { term: 'Local Enterprise Partnership (LEP)', def: 'Voluntary partnerships between local authorities and businesses to determine local economic priorities and drive economic growth and job creation. Replaced Regional Development Agencies in 2010.' },
        { term: 'Enterprise Zone', def: 'A designated area offering tax incentives, simplified planning regulations, and government support to attract businesses and stimulate economic growth and employment.' },
        { term: 'EU Convergence Funding', def: 'EU structural funding allocated to regions with GDP per capita below 75% of the EU average (or 50% in some programmes), aimed at reducing economic disparities between European regions.' },
        { term: 'Community cohesion', def: 'The extent to which different groups in a community get along, share common values, and work together, characterised by mutual respect, trust, and a sense of shared belonging.' },
        { term: 'Section 106 agreement', def: 'A legal agreement between a local authority and developer requiring the developer to contribute to affordable housing, infrastructure, or community facilities as a condition of planning permission.' },
        { term: 'Regional Development Agency (RDA)', def: 'Government-funded bodies responsible for economic development in English regions, abolished in 2010-12 and replaced by Local Enterprise Partnerships with significantly less funding and power.' },
        { term: 'Shared Prosperity Fund', def: 'UK government replacement for EU structural funds post-Brexit, intended to reduce inequalities between communities. Critics argue it provides less funding and is less well-targeted than EU programmes.' },
        { term: 'Public-private partnership', def: 'A collaboration between government bodies and private sector companies to deliver services, infrastructure, or development. Can combine public accountability with private sector efficiency and investment.' },
        { term: 'Morgan Sindall', def: 'Major UK construction and regeneration company involved in the Stoke Wharf development in Slough, an example of public-private partnership in housing delivery.' },
        { term: 'Crossrail (Elizabeth Line)', def: 'Major east-west railway across London opened in stages from 2022. Slough was added as a stop, dramatically improving connectivity and driving economic growth and house price increases.' },
      ],
      notes: [
        'Managing cultural and demographic issues involves multiple scales: national government policy (immigration, planning legislation, funding), regional strategies, local council planning, and grassroots community organisations.',
        'National strategies include: government regeneration funding, planning regulations (brownfield-first policies, affordable housing requirements), immigration policy (points-based systems, visa categories), and debates over multiculturalism vs integration approaches.',
        'Local strategies include: council-led regeneration projects, community partnerships, planning decisions on housing and services, support for community groups, and locally targeted employment and education programmes.',

        '--- SLOUGH CASE STUDY (Urban Management) ---',
        'Slough: town in Berkshire with population approximately 140,000. The most ethnically diverse town/city in the UK — only 34.5% White British. Despite this, 75% of residents claim British identity and 60% were born in Britain.',
        'Slough has NO racial enclaves — communities are genuinely mixed across the town, unlike many other diverse areas where ethnic clustering occurs. This is relatively unusual for such a diverse place.',
        'Slough has approximately 100 years of successive immigration waves: Welsh and Scottish workers (early 20th century industrial estate), Polish WW2 veterans, Sikh communities (1950s-60s), Hindu communities, and Muslim communities from multiple countries.',
        'Slough economy: outperforms the UK average at approximately 5-6% growth. House prices increased approximately 66% since 2014. Proximity to Heathrow Airport attracts transnational corporations including O2, Nintendo, Mars, and Dulux.',
        'Slough transport: added to the Crossrail (Elizabeth Line) network, dramatically improving connectivity to central London and further driving economic growth and house price increases.',
        'Slough environmental challenge: second highest deaths from poor air pollution (approximately 4,000 deaths per year attributed to pollution from the M4 motorway and Heathrow Airport flight paths).',

        '--- SLOUGH COUNCIL AND REGENERATION ---',
        'Slough Borough Council: identified 39 brownfield sites for regeneration across the town. Key player in driving development and managing growth.',
        'Slough Council housing projects: 3 housing developments delivering 200+ homes but with NO affordable housing included, plus 29 council-rented houses. The lack of affordable housing in major developments is a significant criticism.',
        '"The Curve": Slough\'s cultural learning centre, a flagship regeneration project incorporating a library, adult education facilities, caf\u00e9, and performance centre. Designed to promote community cohesion and lifelong learning.',
        'Slough new sports stadium: part of the regeneration portfolio aimed at improving quality of life, community facilities, and the town\'s image.',
        'CRITICAL: Slough Borough Council declared effectively bankrupt in 2021 due to failed investments, issuing a Section 114 notice. This severely impacted ongoing regeneration plans and council services.',
        'Slough bankruptcy consequences: the Section 114 notice meant all non-essential council spending was frozen. Regeneration projects were delayed or cancelled, services cut, and central government commissioners were brought in to oversee the council\'s recovery.',
        'Slough bankruptcy causes: the council had made risky investments and loans, including in a property company, and had poor financial management. This raises questions about local government capacity to manage large-scale regeneration.',

        '--- SLOUGH PARTNERSHIPS AND COMMUNITY ORGANISATIONS ---',
        'Slough Regeneration Partnership: formed in 2012 between the council and a construction company. Identified the biggest need as affordable rented housing — Slough has approximately 7,000 council properties but a 7,000-person waiting list (demand equals existing stock).',
        'Housing benefit cuts forced many low-wage earners from central London boroughs to relocate to Slough, increasing pressure on already-stretched housing and services.',
        'Aspire Southall: a partnership organisation developing employability skills in the community. Works with teachers, parents, training advisors, and local colleges to improve employment outcomes.',
        'Mars (confectionery company) participates through apprenticeship programmes and office rotation schemes, providing practical employment pathways for local young people.',
        'Aik Saath ("Together as One"): a charity tackling tensions between young Muslims, Hindus, and Sikhs since the early 1990s. Works in schools and places of worship addressing extremism, anti-racism, and knife crime ("saying no to knives").',
        'Aik Saath engages with Thames Valley Police and has successfully reached out to Eastern European migrant communities, demonstrating adaptability to changing demographics.',
        'Aik Saath methods: peer mediation training in schools, inter-faith dialogue sessions, workshops on extremism prevention, community sports events, and collaboration with police to build trust between young people and authorities.',

        '--- SLOUGH REGENERATION PROJECTS (Detailed) ---',
        'Akzo Nobel site: former paint factory site being redeveloped for approximately 1,000 homes (25% affordable), plus warehouses and data centres providing employment. One of the largest brownfield regeneration projects in Slough.',
        'High Street development: 300 homes planned, but the original 19-storey tower design was rejected by residents as "far too high" for the town centre character.',
        'Stoke Wharf: \u00a368 million canal-side development of 312 homes (48 affordable), delivered through a partnership with Morgan Sindall construction company. Located alongside the canal, intended to create an attractive waterside living environment.',
        'Langley Business Centre: planned data centre plus 60 homes at 100% affordable housing plus an energy centre — a rare fully affordable development and an example of mixed-use brownfield regeneration.',
        'Bowyer Park apartment complex: faced environmental objections regarding visual impact on green spaces.',
        'Environmental stakeholders find air quality particularly challenging to manage given Slough\'s proximity to the M4 motorway and Heathrow Airport — sources largely outside local control.',
        'Slough regeneration evaluation: strong economic performance (5-6% growth, TNC presence) but significant challenges remain — council bankruptcy, insufficient affordable housing, air pollution, and strained public services. The 2021 Section 114 notice undermines confidence in the council\'s ability to deliver regeneration.',
        'Slough stakeholder conflicts: developers want maximum profit (fewer affordable homes); council needs affordable housing but also revenue; residents want affordable homes and green space but resist high-density development; environmental groups prioritise air quality but lack power over M4/Heathrow decisions.',

        '--- CORNWALL CASE STUDY (Rural Management) ---',
        'Cornwall: England\'s lowest full-time average wage at approximately \u00a325,000 (77% of the UK average). Peripheral location in the far south-west creates economic disadvantages.',
        'Cornwall\'s old economy is declining: traditional industries of fishing, tin mining, china clay extraction, and farming have all contracted significantly, with limited replacement employment.',
        'Cornwall demographic challenges: immigration undercutting local labour wages in agriculture and hospitality, elderly counter-urbanisation raising house prices beyond local affordability.',
        'EU Convergence/Objective Funding: Cornwall qualified as a region with GDP below 50% of the EU average, making it eligible for significant EU structural funding pre-2020. Loss of EU funding post-Brexit is a major concern.',
        'South West Regional Development Agency (SWRDA): abolished in 2010 as part of government spending cuts, removing a key regional economic planning body.',
        'Cornwall public sector: NHS Cornwall and Cornwall Council are major employers in the county. Public sector employment is disproportionately important in areas with a weak private sector.',
        'Council funding for business start-ups was removed in 2010 due to government spending cuts, reducing support for local entrepreneurship.',
        'Newquay Enterprise Zone: offers tax rebates and simplified planning to attract businesses, particularly in the aerospace and technology sectors.',
        'Cornwall Local Enterprise Partnership: formed to replace SWRDA, bringing together local authorities and businesses to set economic priorities. Less funding and power than the predecessor RDA.',
        'Critics argue Westminster funding misses local issues in Cornwall — national policies designed for urban areas do not address the specific challenges of a peripheral rural economy with declining traditional industries.',

        '--- CORNWALL REGENERATION SUCCESSES ---',
        'Eden Project: major regeneration success in Cornwall, built in a former china clay pit. Major tourism driver attracting over 1 million visitors annually, creating jobs and boosting the local economy.',
        'Newquay Aerohub: aerospace enterprise zone at Cornwall Airport Newquay, attracting aviation and space technology companies. Represents diversification from traditional industries.',
        'Plymouth University and Falmouth University: received government funding for Cornwall-focused courses and research programmes, investing in local education and retaining young people in the region.',
        'Combined Universities in Cornwall (CUC): partnership bringing higher education to Cornwall, addressing the historic lack of university provision and reducing brain drain to other regions.',
        'Environmental concerns in Cornwall: wasteland from historical china clay extraction, intensive farming methods impacting water quality and biodiversity, and tourism impact on coastal scenery and habitats.',
        'Cornwall demonstrates the challenges of rural regeneration: distance from major markets, limited infrastructure, seasonal tourism dependency, ageing population, and the loss of EU funding post-Brexit.',

        '--- CORNWALL STAKEHOLDER ANALYSIS ---',
        'Cornwall stakeholders — EU: provided Convergence Funding (pre-2020) worth hundreds of millions for infrastructure, skills, and business support. Loss post-Brexit created a significant funding gap.',
        'Cornwall stakeholders — UK Government: provides national funding, sets planning policy, and controls immigration rules. Abolished SWRDA (2010), cut council start-up funding (2010). Replaced EU funds with Shared Prosperity Fund (criticised as inadequate).',
        'Cornwall stakeholders — Local Government (Cornwall Council): major employer, delivers services, makes planning decisions. Faces budget constraints and must balance competing demands from different communities.',
        'Cornwall stakeholders — Local Business: need skilled workers, good infrastructure, and access to markets. Many are small-scale and seasonal. Benefit from Enterprise Zones but struggle with peripherality.',
        'Cornwall stakeholders — Environmental Groups: campaign to protect Cornwall\'s natural beauty (AONB areas, coastline, biodiversity). May conflict with development proposals and tourism expansion.',
        'Cornwall stakeholders — Local Residents: want affordable housing, well-paid jobs, and good services. Older residents may resist change while younger residents want more opportunities. Second-home owners have different priorities from permanent residents.',
        'Cornwall regeneration evaluation: some successes (Eden Project, universities, Newquay Aerohub) but fundamental challenges persist — lowest wages in England, ageing population, declining traditional industries, loss of EU funding, and peripherality from decision-making centres.',

        '--- NATIONAL POLICY AND MANAGEMENT ---',
        'UK Levelling Up agenda (2022 White Paper): Government policy aimed at reducing regional inequalities by spreading opportunity more evenly. Included 12 "missions" covering pay, productivity, transport, digital connectivity, education, health, and pride in place. Critics argue funding is insufficient and politically targeted.',
        'Points-based immigration system (post-Brexit, 2021): Ended EU free movement. Requires minimum salary threshold (\u00a325,600 or \u00a326,200 in revised 2024 rules), English language proficiency, and a job offer from an approved sponsor. Skilled Worker visa replaced Tier 2. Impact: reduced low-skilled migration from the EU, creating labour shortages in agriculture, hospitality, and social care.',
        'The Prevent strategy: Government counter-terrorism programme operating in schools, universities, healthcare, and prisons. Aims to stop people being drawn into terrorism. Controversial — Muslim communities argue it disproportionately targets them and creates a "surveillance culture" that undermines trust.',

        '--- REGENERATION EVALUATION FRAMEWORK ---',
        'Evaluating regeneration success requires multiple criteria: economic (job creation, business growth, income levels), social (community cohesion, crime reduction, health outcomes), environmental (green space, air quality, building quality), and political (democratic participation, stakeholder satisfaction).',
        'Top-down vs bottom-up regeneration: Top-down (government/developer-led, e.g. London Docklands LDDC, Olympic Park) can deliver large-scale transformation but may ignore local needs. Bottom-up (community-led, e.g. Aik Saath in Slough, transition towns) responds to local priorities but may lack funding and scale. The most effective regeneration combines both approaches.',
        'Measuring community cohesion: The Community Life Survey asks whether people feel they belong to their neighbourhood, trust their neighbours, and mix with people from different backgrounds. The Citizenship Survey (discontinued 2011) showed 86% of people felt their local area was a place where people from different backgrounds got on well together. However, national averages mask significant local variation.',
        'The role of community organisations: Aik Saath (Slough) works on inter-faith dialogue and knife crime prevention. Newham has 1,100+ community organisations serving diverse populations. The Notting Hill Carnival committee organises Europe\'s largest street festival. These grassroots organisations are often more trusted by communities than government agencies.',
        'Gentrification management tools: Section 106 agreements require developers to include affordable housing (typically 35-50% in London, but often negotiated down). Community Land Trusts (CLTs) buy land to provide permanently affordable housing. The London Mayor\'s "Homes for Londoners" programme (2016) set a target of 50% affordable housing on public land. However, "affordable" is often defined as 80% of market rent, which remains unaffordable for many.',
        'Rural regeneration challenges: The Cotswolds and Cornwall case studies show that rural regeneration faces distinct challenges — distance from markets, seasonal economies, ageing populations, poor digital connectivity, and the tension between conservation (AONB/National Park designations) and development. The loss of EU Convergence Funding post-Brexit removed a critical funding source for Cornwall.',
        'Smart growth and sustainable communities: The concept of creating mixed-use, walkable, transit-oriented communities that reduce car dependency and social isolation. Applied in some UK regeneration schemes but often undermined by car-dependent suburban design, NIMBYism, and developer resistance to affordable housing requirements.',
        'Evaluation point for 20-mark essays: Successful management of diverse places requires balancing competing stakeholder interests — developers want profit, councils need tax revenue and affordable housing, existing residents want stability, newcomers want opportunity, and environmental groups want sustainability. No strategy satisfies all stakeholders equally, and the exam rewards candidates who can evaluate trade-offs with specific evidence from case studies.',
      ],
    },
  ],

  // ======================================================================
  // QUIZZES — Comprehensive questions covering all four sections
  // ======================================================================
  quizzes: [
    // --- EQ1: Population structures ---
    {
      q: 'What is the population density of Jersey?',
      a: '972 people per km\u00b2',
      options: ['487 people per km\u00b2', '972 people per km\u00b2', '1,450 people per km\u00b2', '3,200 people per km\u00b2'],
    },
    {
      q: 'What percentage of Jersey\'s population is non-native born?',
      a: '51%',
      options: ['32%', '44%', '51%', '67%'],
    },
    {
      q: 'What proportion of St Helier\'s population is Portuguese?',
      a: 'One-third',
      options: ['One-quarter', 'One-third', 'One-half', 'One-fifth'],
    },
    {
      q: 'How did Jersey\'s population change between 1980 and 2011?',
      a: 'It grew from approximately 60,000 to 110,000',
      options: ['It grew from approximately 60,000 to 110,000', 'It grew from 80,000 to 100,000', 'It declined from 120,000 to 90,000', 'It remained stable at around 85,000'],
    },
    {
      q: 'What industry became dominant in Jersey from the 1980s?',
      a: 'Finance',
      options: ['Tourism', 'Finance', 'Agriculture', 'Fishing'],
    },
    {
      q: 'What is the population density of Newham?',
      a: '8,762 people per km\u00b2',
      options: ['4,500 people per km\u00b2', '6,300 people per km\u00b2', '8,762 people per km\u00b2', '12,100 people per km\u00b2'],
    },
    {
      q: 'What is the average age in Newham, making it the youngest borough in the UK?',
      a: '31',
      options: ['25', '28', '31', '34'],
    },
    {
      q: 'Which ethnic group overtook White British as the largest group in Newham by the 2021 census?',
      a: 'Bangladeshi (15.9%)',
      options: ['Indian (18.2%)', 'Bangladeshi (15.9%)', 'African (16.5%)', 'Pakistani (14.1%)'],
    },
    {
      q: 'What percentage of Newham residents are non-UK born?',
      a: '55%',
      options: ['35%', '45%', '55%', '65%'],
    },
    {
      q: 'What does the Index of Multiple Deprivation (IMD) measure?',
      a: 'Deprivation across seven domains including income, employment, education, health, crime, housing, and living environment',
      options: ['Only income and employment levels', 'Deprivation across seven domains including income, employment, education, health, crime, housing, and living environment', 'Population density and age structure', 'Housing quality and environmental standards'],
    },
    {
      q: 'Which of these is a centripetal force in Jersey?',
      a: 'High-paying finance jobs and low taxation',
      options: ['High housing costs', 'Overcrowding in St Helier', 'High-paying finance jobs and low taxation', 'Limited space on the island'],
    },
    {
      q: 'What is the difference between insider and outsider perspectives on a place?',
      a: 'Insiders have perspectives shaped by lived experience; outsiders by media, statistics, and brief impressions',
      options: ['Insiders always view places positively; outsiders negatively', 'Insiders have perspectives shaped by lived experience; outsiders by media, statistics, and brief impressions', 'There is no meaningful difference', 'Insiders rely on quantitative data; outsiders on qualitative data'],
    },

    // --- EQ2: Perceptions of diverse living spaces ---
    {
      q: 'How much did the Medell\u00edn Cartel reportedly make per day at its peak in the 1970s?',
      a: '$70 million per day',
      options: ['$10 million per day', '$35 million per day', '$70 million per day', '$150 million per day'],
    },
    {
      q: 'How many people per day were murdered in Medell\u00edn during the 1990s?',
      a: '16 people per day',
      options: ['5 people per day', '16 people per day', '25 people per day', '40 people per day'],
    },
    {
      q: 'What percentage of US cocaine was controlled by the Medell\u00edn Cartel?',
      a: '80%',
      options: ['50%', '65%', '80%', '95%'],
    },
    {
      q: 'What innovative transport system links poor hillside communities to downtown Medell\u00edn?',
      a: 'An integrated cable car (Metrocable) network',
      options: ['A monorail system', 'An integrated cable car (Metrocable) network', 'An underground metro extension', 'A funicular railway'],
    },
    {
      q: 'What award did Medell\u00edn win from the Urban Land Institute?',
      a: 'Innovative City of the Year',
      options: ['World\'s Most Liveable City', 'Innovative City of the Year', 'Best Transport System', 'Greenest City Award'],
    },
    {
      q: 'What is the median age in the Cotswolds compared to the UK median?',
      a: 'Cotswolds median 44, UK median 40',
      options: ['Cotswolds 38, UK 36', 'Cotswolds 40, UK 38', 'Cotswolds 44, UK 40', 'Cotswolds 50, UK 42'],
    },
    {
      q: 'What proportion of Cotswolds residents are over 65?',
      a: '1 in 3 (compared to UK average of 1 in 6)',
      options: ['1 in 4 (UK average 1 in 8)', '1 in 3 (compared to UK average of 1 in 6)', '1 in 5 (UK average 1 in 7)', '1 in 2 (UK average 1 in 4)'],
    },
    {
      q: 'By how much have house prices risen in the Cotswolds?',
      a: 'Approximately 40%, to an average of \u00a3310,000',
      options: ['Approximately 20%, to \u00a3200,000', 'Approximately 40%, to an average of \u00a3310,000', 'Approximately 60%, to \u00a3450,000', 'Approximately 80%, to \u00a3550,000'],
    },
    {
      q: 'What does the phrase "islands in an ocean" describe in the Cotswolds context?',
      a: 'The isolation of rural residents without cars due to limited public transport',
      options: ['Flood-prone villages surrounded by farmland', 'The isolation of rural residents without cars due to limited public transport', 'Small communities surrounded by second homes', 'Tourist hotspots amid depopulated countryside'],
    },
    {
      q: 'How much higher are elderly loneliness rates in the Cotswolds compared to urban areas?',
      a: 'Approximately 18% higher',
      options: ['Approximately 5% higher', 'Approximately 10% higher', 'Approximately 18% higher', 'Approximately 30% higher'],
    },
    {
      q: 'What is the "rural idyll"?',
      a: 'The romanticised perception of the countryside as peaceful, safe, and beautiful, contrasting with reality',
      options: ['A government rural development policy', 'The romanticised perception of the countryside as peaceful, safe, and beautiful, contrasting with reality', 'A type of rural settlement pattern', 'The economic benefits of rural tourism'],
    },
    {
      q: 'What BBC Three programme represents the challenges of rural life in the Cotswolds area?',
      a: '"This Country"',
      options: ['"Countryfile"', '"This Country"', '"The Archers"', '"Escape to the Country"'],
    },

    // --- EQ3: Demographic and cultural tensions ---
    {
      q: 'When was the Notting Hill Carnival established and by whom?',
      a: '1966, by Claudia Jones',
      options: ['1958, by Sam King', '1966, by Claudia Jones', '1972, by local community leaders', '1980, by the Greater London Council'],
    },
    {
      q: 'How many people attend the Notting Hill Carnival annually?',
      a: 'Approximately 2.5 million',
      options: ['500,000', '1 million', 'Approximately 2.5 million', '5 million'],
    },
    {
      q: 'How much was invested in east London for the 2012 Olympics?',
      a: 'Approximately \u00a39 billion',
      options: ['\u00a33 billion', '\u00a36 billion', 'Approximately \u00a39 billion', '\u00a315 billion'],
    },
    {
      q: 'What percentage of Olympic construction jobs went to local Newham residents?',
      a: 'Only 20%',
      options: ['Only 10%', 'Only 20%', 'Approximately 40%', 'Over 50%'],
    },
    {
      q: 'How many companies were relocated due to Olympic construction and how many jobs were displaced?',
      a: '380 companies relocated, approximately 11,000 jobs displaced',
      options: ['150 companies, 5,000 jobs', '380 companies relocated, approximately 11,000 jobs displaced', '500 companies, 15,000 jobs', '250 companies, 8,000 jobs'],
    },
    {
      q: 'By how much did house prices increase in Newham after the Olympics?',
      a: '33% or more',
      options: ['10-15%', '20-25%', '33% or more', '50% or more'],
    },
    {
      q: 'What fraction of private Olympic Village homes were bought by overseas investors and not lived in?',
      a: 'Two-thirds',
      options: ['One-quarter', 'One-third', 'One-half', 'Two-thirds'],
    },
    {
      q: 'How many council houses were lost in London since 1997?',
      a: 'Approximately 300,000',
      options: ['100,000', 'Approximately 300,000', '500,000', '750,000'],
    },
    {
      q: 'How many people are on the housing waiting list in Newham?',
      a: 'Approximately 16,000',
      options: ['5,000', '10,000', 'Approximately 16,000', '25,000'],
    },
    {
      q: 'How many trees were planted as part of the Olympic Park environmental legacy?',
      a: '4,000 trees',
      options: ['1,000 trees', '2,500 trees', '4,000 trees', '10,000 trees'],
    },
    {
      q: 'How much contaminated soil was cleaned from the Olympic Park site?',
      a: '2 million tonnes',
      options: ['500,000 tonnes', '1 million tonnes', '2 million tonnes', '5 million tonnes'],
    },
    {
      q: 'What is London\'s annual natural increase and what proportion of the UK total does it represent?',
      a: '82,900 (40% of UK total)',
      options: ['45,000 (20% of UK total)', '82,900 (40% of UK total)', '120,000 (55% of UK total)', '65,000 (30% of UK total)'],
    },
    {
      q: 'By how much were Newham council budgets cut between 2008 and 2013?',
      a: 'Approximately 40%',
      options: ['Approximately 15%', 'Approximately 25%', 'Approximately 40%', 'Approximately 60%'],
    },

    // --- EQ4: Managing cultural and demographic issues ---
    {
      q: 'What percentage of Slough\'s population is White British?',
      a: 'Only 34.5%',
      options: ['14.8%', 'Only 34.5%', '51%', '65%'],
    },
    {
      q: 'What is unusual about ethnic distribution in Slough compared to other diverse UK cities?',
      a: 'There are no racial enclaves — communities are genuinely mixed',
      options: ['It has the highest ethnic segregation in the UK', 'There are no racial enclaves \u2014 communities are genuinely mixed', 'Only two ethnic groups dominate', 'All minorities live in one ward'],
    },
    {
      q: 'By how much have house prices in Slough risen since 2014?',
      a: 'Approximately 66%',
      options: ['Approximately 25%', 'Approximately 40%', 'Approximately 66%', 'Approximately 90%'],
    },
    {
      q: 'What major event happened to Slough Borough Council in 2021?',
      a: 'It declared effectively bankrupt (Section 114 notice)',
      options: ['It merged with a neighbouring council', 'It declared effectively bankrupt (Section 114 notice)', 'It won a national regeneration award', 'It was taken over by central government'],
    },
    {
      q: 'How many brownfield sites did Slough Council identify for regeneration?',
      a: '39',
      options: ['15', '24', '39', '52'],
    },
    {
      q: 'What does the charity Aik Saath ("Together as One") focus on?',
      a: 'Tackling tensions between young Muslims, Hindus, and Sikhs through anti-extremism and anti-racism work',
      options: ['Providing housing for homeless youth', 'Tackling tensions between young Muslims, Hindus, and Sikhs through anti-extremism and anti-racism work', 'Running food banks across Berkshire', 'Teaching English to new immigrants'],
    },
    {
      q: 'What is the approximate size of Slough\'s council housing waiting list relative to its stock?',
      a: 'Equal — approximately 7,000 properties and 7,000 on the waiting list',
      options: ['Waiting list is half the stock size', 'Equal \u2014 approximately 7,000 properties and 7,000 on the waiting list', 'Waiting list is double the stock', 'Waiting list is triple the stock'],
    },
    {
      q: 'What is Cornwall\'s average full-time wage as a percentage of the UK average?',
      a: '77% of the UK average (approximately \u00a325,000)',
      options: ['60% of the UK average', '77% of the UK average (approximately \u00a325,000)', '85% of the UK average', '92% of the UK average'],
    },
    {
      q: 'What type of EU funding was Cornwall eligible for, and why?',
      a: 'Convergence/Objective Funding, because GDP was below 50% of the EU average',
      options: ['Agricultural subsidies due to farming decline', 'Convergence/Objective Funding, because GDP was below 50% of the EU average', 'Tourism development grants', 'Environmental protection funding'],
    },
    {
      q: 'What was the South West Regional Development Agency (SWRDA) and what happened to it?',
      a: 'A regional economic planning body abolished in 2010 as part of spending cuts',
      options: ['A tourism board that merged with Visit England', 'A regional economic planning body abolished in 2010 as part of spending cuts', 'An EU-funded agency that ended with Brexit', 'A transport authority still operating today'],
    },
    {
      q: 'What was the Eden Project built in?',
      a: 'A former china clay pit',
      options: ['A disused tin mine', 'A former china clay pit', 'An abandoned quarry', 'A decommissioned naval base'],
    },
    {
      q: 'What is the Newquay Aerohub?',
      a: 'An aerospace enterprise zone at Cornwall Airport Newquay',
      options: ['A new passenger terminal', 'An aerospace enterprise zone at Cornwall Airport Newquay', 'A drone delivery hub', 'A military airfield conversion'],
    },
    {
      q: 'What is "The Curve" in Slough?',
      a: 'A cultural learning centre with library, adult education, caf\u00e9, and performance facilities',
      options: ['A new road bypass around the town centre', 'A cultural learning centre with library, adult education, caf\u00e9, and performance facilities', 'A curved apartment building on the High Street', 'A shopping centre near the station'],
    },
    {
      q: 'How many homes were planned at the Stoke Wharf development in Slough, and what was its cost?',
      a: '312 homes (48 affordable) at a cost of \u00a368 million',
      options: ['150 homes at \u00a330 million', '312 homes (48 affordable) at a cost of \u00a368 million', '500 homes at \u00a3100 million', '200 homes at \u00a345 million'],
    },

    // ======================================================================
    // NEW QUIZ QUESTIONS — Case study specific facts
    // ======================================================================

    // --- Slough detailed questions ---
    {
      q: 'What percentage of Slough residents claim to be British?',
      a: '75%',
      options: ['34.5%', '60%', '75%', '85%'],
    },
    {
      q: 'What percentage of Slough residents were born in Britain?',
      a: '60%',
      options: ['34.5%', '50%', '60%', '75%'],
    },
    {
      q: 'What is Slough\'s approximate economic growth rate?',
      a: '5-6%',
      options: ['1-2%', '3-4%', '5-6%', '8-10%'],
    },
    {
      q: 'Which transnational corporations have headquarters or offices near Slough?',
      a: 'O2, Nintendo, Mars, and Dulux',
      options: ['Apple, Google, Meta, and Amazon', 'O2, Nintendo, Mars, and Dulux', 'BMW, Siemens, Bosch, and Shell', 'Tesco, Sainsbury\'s, ASDA, and Morrisons'],
    },
    {
      q: 'What transport link was Slough added to, improving connectivity to central London?',
      a: 'Crossrail (Elizabeth Line)',
      options: ['HS2', 'Crossrail (Elizabeth Line)', 'Northern Line Extension', 'Thameslink'],
    },
    {
      q: 'Approximately how many deaths per year are attributed to air pollution in Slough?',
      a: '4,000',
      options: ['500', '1,500', '4,000', '8,000'],
    },
    {
      q: 'What are the two main sources of air pollution in Slough?',
      a: 'The M4 motorway and Heathrow Airport',
      options: ['Local factories and power stations', 'The M4 motorway and Heathrow Airport', 'The M25 and Gatwick Airport', 'Rail diesel engines and bus depots'],
    },
    {
      q: 'When was the Slough Regeneration Partnership formed?',
      a: '2012',
      options: ['2005', '2008', '2012', '2016'],
    },
    {
      q: 'What organisation does Aspire Southall work with for apprenticeships?',
      a: 'Mars',
      options: ['Nintendo', 'O2', 'Mars', 'Dulux'],
    },
    {
      q: 'Since when has Aik Saath been tackling inter-community tensions in Slough?',
      a: 'Since the early 1990s',
      options: ['Since the 1970s', 'Since the early 1990s', 'Since 2005', 'Since 2012'],
    },
    {
      q: 'Which police force does Aik Saath collaborate with?',
      a: 'Thames Valley Police',
      options: ['Metropolitan Police', 'Thames Valley Police', 'Hampshire Police', 'Surrey Police'],
    },
    {
      q: 'How many homes are planned for the Akzo Nobel site in Slough?',
      a: 'Approximately 1,000 (25% affordable)',
      options: ['500 (10% affordable)', 'Approximately 1,000 (25% affordable)', '2,000 (30% affordable)', '750 (50% affordable)'],
    },
    {
      q: 'What percentage of homes at the Akzo Nobel site will be affordable?',
      a: '25%',
      options: ['10%', '25%', '48%', '100%'],
    },
    {
      q: 'Which construction company is partnering on the Stoke Wharf development?',
      a: 'Morgan Sindall',
      options: ['Barratt Homes', 'Morgan Sindall', 'Taylor Wimpey', 'Persimmon'],
    },
    {
      q: 'How many homes at Langley Business Centre will be affordable?',
      a: '100% (all 60 homes)',
      options: ['25% (15 homes)', '48% (29 homes)', '75% (45 homes)', '100% (all 60 homes)'],
    },
    {
      q: 'What additional facilities are planned alongside homes at Langley Business Centre?',
      a: 'A data centre and an energy centre',
      options: ['A shopping centre and gym', 'A data centre and an energy centre', 'A school and health centre', 'A park and community hall'],
    },
    {
      q: 'Why was the original 19-storey High Street development in Slough rejected?',
      a: 'Residents said it was "far too high" for the town centre character',
      options: ['It exceeded the council budget', 'Residents said it was "far too high" for the town centre character', 'It was on a flood plain', 'The developer went bankrupt'],
    },
    {
      q: 'What is the population of Slough?',
      a: 'Approximately 140,000',
      options: ['Approximately 80,000', 'Approximately 110,000', 'Approximately 140,000', 'Approximately 200,000'],
    },
    {
      q: 'What does Aik Saath mean in English?',
      a: 'Together as One',
      options: ['Peace for All', 'Together as One', 'United We Stand', 'One Community'],
    },
    {
      q: 'What issues does Aik Saath address besides inter-faith tensions?',
      a: 'Anti-racism, extremism prevention, and knife crime',
      options: ['Housing and homelessness', 'Anti-racism, extremism prevention, and knife crime', 'Environmental pollution', 'Employment training'],
    },

    // --- Newham detailed questions ---
    {
      q: 'What percentage of Newham\'s population is White British (2021)?',
      a: '14.8%',
      options: ['14.8%', '22.3%', '34.5%', '41.2%'],
    },
    {
      q: 'What is the Bangladeshi community\'s share of Newham\'s population?',
      a: '15.9%',
      options: ['8.3%', '11.6%', '15.9%', '22.4%'],
    },
    {
      q: 'How many languages are spoken in Newham?',
      a: 'Over 100',
      options: ['Over 30', 'Over 50', 'Over 100', 'Over 200'],
    },
    {
      q: 'What major shopping centre opened in Stratford ahead of the 2012 Olympics?',
      a: 'Westfield Stratford City',
      options: ['Bluewater', 'Westfield Stratford City', 'Lakeside', 'Canary Wharf Shopping Centre'],
    },
    {
      q: 'How many Olympic Village flats were converted to housing?',
      a: '3,000',
      options: ['1,000', '2,000', '3,000', '5,000'],
    },
    {
      q: 'How many wetland plants were established in the Olympic Park?',
      a: '300,000',
      options: ['50,000', '150,000', '300,000', '500,000'],
    },
    {
      q: 'How many new homes were planned as part of the Olympic legacy?',
      a: '5,000',
      options: ['2,000', '3,000', '5,000', '10,000'],
    },
    {
      q: 'What was the increase in Newham\'s non-UK born population between 2001 and 2011?',
      a: '72,000',
      options: ['35,000', '50,000', '72,000', '95,000'],
    },

    // --- Cornwall detailed questions ---
    {
      q: 'What is Cornwall\'s average wage?',
      a: '\u00a325,000',
      options: ['\u00a319,000', '\u00a322,000', '\u00a325,000', '\u00a328,000'],
    },
    {
      q: 'What traditional industries form Cornwall\'s "old economy"?',
      a: 'Fishing, tin mining, china clay extraction, and farming',
      options: ['Steel, shipbuilding, and textiles', 'Fishing, tin mining, china clay extraction, and farming', 'Coal mining, pottery, and manufacturing', 'Tourism, finance, and technology'],
    },
    {
      q: 'What year was Cornwall Council\'s start-up funding cut?',
      a: '2010',
      options: ['2005', '2008', '2010', '2015'],
    },
    {
      q: 'What year was the South West Regional Development Agency (SWRDA) abolished?',
      a: '2010',
      options: ['2008', '2010', '2012', '2015'],
    },
    {
      q: 'What replaced Regional Development Agencies like SWRDA?',
      a: 'Local Enterprise Partnerships (LEPs)',
      options: ['County Councils', 'Local Enterprise Partnerships (LEPs)', 'Combined Authorities', 'Enterprise Zones'],
    },
    {
      q: 'What tax incentive does the Newquay Enterprise Zone offer?',
      a: 'Tax rebates',
      options: ['No corporation tax', 'Tax rebates', 'Zero business rates for life', 'VAT exemption'],
    },
    {
      q: 'Which two universities received government funding for Cornwall-focused courses?',
      a: 'Plymouth University and Falmouth University',
      options: ['Exeter and Bristol', 'Plymouth University and Falmouth University', 'Bath and Southampton', 'Oxford and Cambridge'],
    },
    {
      q: 'How many visitors does the Eden Project attract annually?',
      a: 'Over 1 million',
      options: ['250,000', '500,000', 'Over 1 million', 'Over 3 million'],
    },
    {
      q: 'What threshold made Cornwall eligible for EU Convergence Funding?',
      a: 'GDP below 50% of the EU average',
      options: ['GDP below 25% of the EU average', 'GDP below 50% of the EU average', 'GDP below 75% of the EU average', 'GDP below the UK average'],
    },
    {
      q: 'Until what year was Cornwall receiving EU Convergence Funding?',
      a: '2020',
      options: ['2010', '2015', '2020', '2025'],
    },
    {
      q: 'What two demographic pressures affect Cornwall\'s housing market?',
      a: 'Elderly migration from London raising prices and immigration undercutting local wages',
      options: ['Students and young professionals', 'Elderly migration from London raising prices and immigration undercutting local wages', 'Second-home buyers and Airbnb investors only', 'Overseas investors and corporate landlords'],
    },

    // --- Medell\u00edn detailed questions ---
    {
      q: 'What was Medell\u00edn known as in the 1990s?',
      a: 'The "murder capital of the world"',
      options: ['The "cocaine capital"', 'The "murder capital of the world"', 'The "most dangerous city"', 'The "cartel capital"'],
    },
    {
      q: 'What newspaper named Medell\u00edn the "most innovative city" in 2013?',
      a: 'Wall Street Journal',
      options: ['New York Times', 'Wall Street Journal', 'The Guardian', 'Financial Times'],
    },
    {
      q: 'By approximately what percentage did Medell\u00edn\'s murder rate fall from its 1990s peak?',
      a: '80%',
      options: ['40%', '60%', '80%', '95%'],
    },
    {
      q: 'What is the name of the cable car system in Medell\u00edn?',
      a: 'Metrocable',
      options: ['Telecabina', 'Metrocable', 'CableSur', 'TransMedell\u00edn'],
    },
    {
      q: 'In which neighbourhood were outdoor escalators installed in Medell\u00edn?',
      a: 'Comuna 13',
      options: ['El Poblado', 'Comuna 13', 'Laureles', 'Envigado'],
    },
    {
      q: 'How long is the outdoor escalator system in Comuna 13?',
      a: '384 metres',
      options: ['120 metres', '250 metres', '384 metres', '500 metres'],
    },
    {
      q: 'What did the Comuna 13 escalator replace in terms of travel time?',
      a: 'A 35-minute steep climb replaced by a 6-minute ride',
      options: ['A 20-minute walk replaced by a 3-minute ride', 'A 35-minute steep climb replaced by a 6-minute ride', 'A 45-minute walk replaced by a 10-minute ride', 'A 1-hour climb replaced by a 15-minute ride'],
    },
    {
      q: 'What prize did Medell\u00edn win in 2016?',
      a: 'Lee Kuan Yew World City Prize',
      options: ['Nobel Peace Prize for Cities', 'Lee Kuan Yew World City Prize', 'UNESCO City of Design', 'Bloomberg Innovation Award'],
    },
    {
      q: 'What major event does Medell\u00edn now host, reflecting its transformed image?',
      a: 'Colombiamoda (South America\'s biggest fashion show)',
      options: ['The Latin American Film Festival', 'Colombiamoda (South America\'s biggest fashion show)', 'The Pan-American Games', 'The Global Innovation Summit'],
    },

    // --- Jersey detailed questions ---
    {
      q: 'What is the population of Jersey?',
      a: 'Approximately 110,000',
      options: ['Approximately 50,000', 'Approximately 80,000', 'Approximately 110,000', 'Approximately 150,000'],
    },
    {
      q: 'What is Jersey\'s approximate size?',
      a: '9 miles by 5 miles',
      options: ['5 miles by 3 miles', '9 miles by 5 miles', '15 miles by 8 miles', '20 miles by 12 miles'],
    },
    {
      q: 'What percentage of Jersey\'s population originates from the UK mainland?',
      a: '38%',
      options: ['25%', '38%', '49%', '55%'],
    },
    {
      q: 'What is the average age in Jersey?',
      a: '37',
      options: ['31', '34', '37', '44'],
    },

    // --- Cotswolds detailed questions ---
    {
      q: 'What percentage of rural Cotswolds residents can access a weekly GP surgery?',
      a: '42%',
      options: ['28%', '42%', '65%', '78%'],
    },
    {
      q: 'By approximately how much have youth service budgets been cut in the Cotswolds?',
      a: 'Approximately 40%',
      options: ['Approximately 10%', 'Approximately 25%', 'Approximately 40%', 'Approximately 60%'],
    },
    {
      q: 'What is the Cotswolds designated as in terms of landscape protection?',
      a: 'An Area of Outstanding Natural Beauty (AONB)',
      options: ['A National Park', 'An Area of Outstanding Natural Beauty (AONB)', 'A World Heritage Site', 'A Site of Special Scientific Interest'],
    },
    {
      q: 'What is the "Weekend Wiltshire Effect" in the Cotswolds?',
      a: 'Migration from Bristol and London changing village character through counter-urbanisation',
      options: ['Increased weekend traffic from tourism', 'Migration from Bristol and London changing village character through counter-urbanisation', 'Weekend farmers\' markets boosting the economy', 'Part-time rural workers commuting on weekends'],
    },

    // --- Cross-topic comparison questions ---
    {
      q: 'Which place has the lowest percentage of White British residents: Slough or Newham?',
      a: 'Newham (14.8% compared to Slough\'s 34.5%)',
      options: ['Slough (14.8%)', 'Newham (14.8% compared to Slough\'s 34.5%)', 'They are roughly equal', 'Slough (34.5% compared to Newham\'s 48%)'],
    },
    {
      q: 'Which has the higher median age: the Cotswolds or Jersey?',
      a: 'Cotswolds (44 vs Jersey\'s 37)',
      options: ['Jersey (44 vs Cotswolds 37)', 'Cotswolds (44 vs Jersey\'s 37)', 'They are the same (40)', 'Newham (44 vs both)'],
    },
    {
      q: 'Which Slough development is notable for being 100% affordable housing?',
      a: 'Langley Business Centre (60 homes)',
      options: ['Akzo Nobel site', 'Stoke Wharf', 'Langley Business Centre (60 homes)', 'Bowyer Park'],
    },
    {
      q: 'What percentage of affordable housing is included in Slough Council\'s 3 major housing developments (200+ homes)?',
      a: '0% — no affordable housing',
      options: ['0% — no affordable housing', '10%', '25%', '48%'],
    },
    {
      q: 'How many affordable homes are included in the Stoke Wharf development out of 312 total?',
      a: '48',
      options: ['0', '25', '48', '156'],
    },
    {
      q: 'What is a Section 114 notice?',
      a: 'A formal declaration that a council cannot balance its budget, effectively declaring bankruptcy',
      options: ['A planning permission document', 'A formal declaration that a council cannot balance its budget, effectively declaring bankruptcy', 'A notice requiring affordable housing in developments', 'A health and safety warning'],
    },
    {
      q: 'How many net internal migrants leave London annually?',
      a: 'Approximately 55,000',
      options: ['Approximately 20,000', 'Approximately 35,000', 'Approximately 55,000', 'Approximately 80,000'],
    },
    {
      q: 'How many people left London in 2019/20?',
      a: 'Approximately 94,000',
      options: ['Approximately 40,000', 'Approximately 65,000', 'Approximately 94,000', 'Approximately 130,000'],
    },
    {
      q: 'What percentage of Slough\'s council housing developments (3 developments, 200+ homes) included affordable housing?',
      a: 'None — 0%',
      options: ['None — 0%', '10%', '25%', '50%'],
    },
    {
      q: 'What is "boosterism" in geography?',
      a: 'The deliberate promotion of a place to attract visitors, investment, or residents, emphasising positives and downplaying problems',
      options: ['A type of economic growth model', 'The deliberate promotion of a place to attract visitors, investment, or residents, emphasising positives and downplaying problems', 'A community volunteering initiative', 'An EU funding programme for disadvantaged areas'],
    },
  ],
};

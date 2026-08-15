import React, { useState, useMemo, useEffect, useRef, useCallback } from "react";

/* ---------- 1,311 high-frequency GRE words: word | part of speech | definition ---------- */

const D1 = `abase|v|to humiliate or lower in rank, esteem, or dignity
abash|v|to embarrass or disconcert
abate|v|to lessen in intensity, amount, or degree
abdicate|v|to formally give up power or responsibility
aberrant|adj|deviating from what is normal or expected
abeyance|n|a state of temporary suspension or inactivity
abhor|v|to regard with disgust and hatred
abject|adj|utterly hopeless, wretched, or humiliating
abjure|v|to renounce or reject solemnly
abnegate|v|to renounce or surrender something desired
abolish|v|to end or do away with formally
abominate|v|to loathe intensely
abortive|adj|failing to produce the intended result
abridge|v|to shorten while retaining the substance
abrogate|v|to repeal or annul a law or agreement
abscond|v|to leave secretly to avoid capture or accusation
absolve|v|to clear of guilt or blame
abstain|v|to refrain deliberately from doing something
abstemious|adj|sparing, especially in eating and drinking
abstruse|adj|difficult to understand; obscure
abut|v|to border on or touch physically
abysmal|adj|extremely bad; immeasurably deep
accede|v|to agree to a demand, request, or treaty
accolade|n|an expression of praise or an award
accost|v|to approach and address boldly or aggressively
accretion|n|gradual growth by accumulation or addition
acerbic|adj|sharp and cutting in tone or manner
acme|n|the highest point of achievement or excellence
acquiesce|v|to accept reluctantly without protest
acrid|adj|unpleasantly sharp or bitter in taste or smell
acrimonious|adj|bitter and angry in tone
acumen|n|keenness and depth of judgment
adage|n|a proverb or short traditional saying
adamant|adj|refusing to be persuaded; unyielding
adduce|v|to cite as evidence in an argument
adherent|n|a supporter of a cause, party, or person
admonish|v|to warn or reprimand firmly
adroit|adj|clever or skillful, especially with the hands
adulation|n|excessive praise or flattery
adulterate|v|to make impure by adding inferior material
adumbrate|v|to outline vaguely or foreshadow
advocate|v|to publicly recommend or support
aesthetic|adj|concerned with beauty or artistic taste
affable|adj|friendly, good-natured, and easy to talk to
affectation|n|artificial behavior adopted to impress others
affinity|n|a natural attraction, liking, or resemblance
affluent|adj|having an abundance of wealth
affront|n|an open and deliberate insult
aggrandize|v|to increase power, status, wealth, or reputation
aggregate|n|a whole formed by combining several elements
agitate|v|to stir up public feeling; to disturb
agnostic|n|one who holds that ultimate truths are unknowable
agog|adj|very eager or curious
agrarian|adj|relating to cultivated land or farming
alacrity|n|brisk and cheerful readiness
alchemy|n|a seemingly magical process of transformation
allay|v|to relieve or diminish fear, concern, or pain
allege|v|to assert without proof
allegory|n|a story whose characters convey a hidden meaning
alleviate|v|to make suffering or a problem less severe
alliteration|n|repetition of initial consonant sounds
allocate|v|to distribute resources for a particular purpose
allude|v|to refer to indirectly
aloof|adj|distant, cool, and uninvolved
altruism|n|selfless concern for the well-being of others
amalgamate|v|to combine or unite into one
ambiguous|adj|open to more than one interpretation
ambivalent|adj|having mixed or contradictory feelings
ameliorate|v|to make a bad situation better
amenable|adj|open to suggestion; readily persuaded
amenity|n|a desirable or useful feature or facility
amiable|adj|good-natured and likable
amity|n|friendly and peaceful relations
amorphous|adj|without a definite shape or structure
amortize|v|to gradually pay off a debt over time
anachronism|n|something placed outside its proper time period
analogous|adj|comparable in certain respects
anarchy|n|absence of government, authority, or order
anathema|n|something or someone intensely disliked or cursed
ancillary|adj|providing support; subordinate or supplementary
anecdote|n|a short account of an interesting incident
anguish|n|severe mental or physical pain
animosity|n|strong hostility or ill will
annex|v|to add territory or a part to something larger
annul|v|to declare invalid; to nullify
anodyne|adj|inoffensive to the point of being dull
anomaly|n|something that deviates from the standard or norm
antagonize|v|to provoke hostility in someone
antediluvian|adj|extremely old-fashioned; primitive
anthology|n|a published collection of literary works
antipathy|n|a deep-seated feeling of dislike
antiquated|adj|outdated; belonging to the past
apathy|n|lack of interest, enthusiasm, or concern
aphorism|n|a concise statement of a general truth
aplomb|n|self-confident poise under pressure
apocryphal|adj|widely circulated but of doubtful authenticity
apostate|n|one who abandons a belief or allegiance
apotheosis|n|the highest point of development; elevation to divine rank
appease|v|to pacify by acceding to demands
append|v|to add as an attachment or supplement
apposite|adj|strikingly appropriate and relevant
apprehensive|adj|anxious or fearful about the future
approbation|n|formal approval or warm praise
appropriate|v|to take for one's own use, often without permission
apropos|adj|relevant to what is being discussed
aptitude|n|a natural ability or talent
arable|adj|suitable for growing crops
arbiter|n|one with the power to settle a dispute
arcane|adj|understood by very few; mysterious
archaic|adj|belonging to an earlier period; no longer current
archetype|n|an original model or typical example
ardor|n|great warmth of feeling; passion
arduous|adj|requiring great and prolonged effort
arid|adj|extremely dry; lacking interest or life
arrant|adj|complete; utter
arrogate|v|to claim or seize without justification
articulate|adj|expressing oneself fluently and clearly
artifice|n|clever deception or trickery
ascendancy|n|a position of dominant power or influence
ascetic|n|one who practices severe self-discipline
ascribe|v|to attribute to a cause, source, or author
asperity|n|harshness of tone or manner
aspersion|n|an attack on someone's reputation
assail|v|to attack violently or with argument
assiduous|adj|showing great care, attention, and persistence
assuage|v|to make an unpleasant feeling less intense
astute|adj|shrewd and perceptive
asylum|n|shelter or protection from danger
atavistic|adj|reverting to an ancestral or primitive type
attenuate|v|to reduce in force, effect, or value
audacious|adj|boldly daring; showing impudent disregard
augment|v|to make greater by adding to it
august|adj|inspiring reverence; majestic
auspicious|adj|indicating a favorable outcome
austere|adj|severe in manner; plain and unadorned
autocrat|n|a ruler holding absolute power
autonomous|adj|self-governing; acting independently
avarice|n|extreme greed for wealth
aver|v|to state or assert as a fact
averse|adj|having a strong dislike or opposition
avert|v|to turn away; to prevent from happening
avid|adj|extremely eager or enthusiastic
avuncular|adj|kind and friendly toward a younger person
awry|adj|away from the expected or planned course
axiom|n|a statement accepted as self-evidently true`;
const D2 = `baleful|adj|threatening harm; menacing
balk|v|to hesitate or refuse to proceed
banal|adj|so lacking in originality as to be obvious and boring
bane|n|a cause of great distress or ruin
banter|n|playful and friendly teasing conversation
bard|n|a poet, especially one reciting epics
bastion|n|a stronghold; an institution defending a principle
beguile|v|to charm or enchant, often in a deceptive way
behemoth|n|something enormous and powerful
belabor|v|to argue or elaborate in excessive detail
beleaguer|v|to besiege; to beset with difficulties
belie|v|to give a false impression of; to contradict
bellicose|adj|eager to fight; warlike
belligerent|adj|hostile and aggressive
bemoan|v|to express sorrow or regret over
benevolent|adj|well-meaning and kindly
benign|adj|gentle and harmless; not malignant
bequeath|v|to leave property to someone by will
berate|v|to scold or criticize angrily
bereft|adj|deprived of or lacking something
beseech|v|to beg earnestly for something
besmirch|v|to damage the reputation of
bevy|n|a large group of people or things
bias|n|prejudice in favor of or against something
bibliophile|n|a person who loves or collects books
bilious|adj|spiteful and bad-tempered
blandishment|n|flattery intended to persuade
blase|adj|unimpressed because of overfamiliarity
blatant|adj|done openly and unashamedly
blight|n|something that spoils or damages
blithe|adj|casually indifferent; carefree
bolster|v|to support, strengthen, or reinforce
bombastic|adj|high-sounding but with little meaning
boon|n|a thing that is helpful or beneficial
boorish|adj|rough and bad-mannered
bourgeois|adj|conventionally middle-class in values
brandish|v|to wave something, especially a weapon
bravado|n|a bold manner intended to impress
brazen|adj|bold and without shame
brevity|n|shortness of expression or duration
broach|v|to raise a subject for discussion
bucolic|adj|relating to the pleasant aspects of country life
bulwark|n|a defensive wall; a source of protection
bungle|v|to carry out a task clumsily
buoyant|adj|able to float; cheerful and optimistic
burgeon|v|to grow or increase rapidly
burnish|v|to polish by rubbing; to enhance
buttress|v|to support, reinforce, or strengthen
byzantine|adj|excessively complicated and devious
cabal|n|a secret political faction
cacophony|n|a harsh discordant mixture of sounds
cadence|n|a rhythmic flow of sounds or words
cajole|v|to persuade by flattery or coaxing
calamity|n|an event causing great harm and distress
callous|adj|showing insensitive disregard for others
callow|adj|inexperienced and immature
calumny|n|the making of false and damaging statements
canard|n|an unfounded rumor or story
candor|n|the quality of being open and honest
canon|n|a body of works accepted as authoritative
cant|n|insincere pious talk; specialized jargon
cantankerous|adj|bad-tempered and argumentative
capacious|adj|having a great deal of space inside
capitulate|v|to surrender under agreed conditions
caprice|n|a sudden and unaccountable change of mind
capricious|adj|given to sudden changes of mood or behavior
captious|adj|inclined to find fault over trivial matters
cardinal|adj|of the greatest importance; fundamental
caricature|n|an exaggerated representation for comic effect
carnal|adj|relating to physical appetites
carping|adj|constantly complaining; difficult to please
castigate|v|to reprimand severely
cataclysm|n|a violent upheaval or disaster
catalyst|n|something that precipitates change
categorical|adj|unambiguously explicit and direct
catharsis|n|the release of pent-up emotional tension
caustic|adj|sarcastic and biting; corrosive
cavalier|adj|showing a lack of proper concern
cavil|v|to make petty or unnecessary objections
cede|v|to give up power or territory formally
censure|v|to express severe formal disapproval
cerebral|adj|intellectual rather than emotional
chagrin|n|distress arising from humiliation or failure
charlatan|n|one who falsely claims special knowledge
chary|adj|cautiously reluctant
chastise|v|to rebuke or punish severely
checkered|adj|marked by varied and mixed fortunes
chicanery|n|the use of trickery to achieve a goal
chide|v|to scold or rebuke mildly
chimerical|adj|wildly fanciful; existing only in imagination
choleric|adj|bad-tempered and irritable
churlish|adj|rude in a mean-spirited and surly way
circuitous|adj|longer than the most direct way
circumlocution|n|the use of many words where few would do
circumscribe|v|to restrict within limits
circumspect|adj|cautious; considering all circumstances
circumvent|v|to find a way around an obstacle or rule
clairvoyant|adj|able to perceive things beyond normal senses
clamor|n|a loud confused noise; a vehement protest
clandestine|adj|kept secret, especially because illicit
cleave|v|to split apart; also, to cling closely to
clemency|n|mercy shown to an offender
cliche|n|an overused phrase that has lost its force
cloying|adj|excessively sweet or sentimental
coagulate|v|to change from a liquid to a solid state
coalesce|v|to come together to form one whole
coda|n|a concluding passage or section
coerce|v|to compel by force or threat
cogent|adj|clear, logical, and convincing
cogitate|v|to think deeply about something
cognizant|adj|having knowledge or awareness of
coherent|adj|logically consistent and clearly expressed
collateral|adj|additional but subordinate
colloquial|adj|used in ordinary or familiar conversation
collusion|n|secret cooperation for a deceitful purpose
commensurate|adj|corresponding in size, extent, or degree
commodious|adj|roomy and comfortable
compendium|n|a concise collection of information
complacent|adj|smugly satisfied and unaware of danger
complaisant|adj|willing to please others; obliging
compliant|adj|inclined to agree or obey
compunction|n|a feeling of guilt or moral scruple
concatenate|v|to link things together in a chain or series
concede|v|to admit that something is true after denying it
conciliatory|adj|intended to placate or pacify
concise|adj|giving much information in few words
concomitant|adj|naturally accompanying or associated
concur|v|to agree with someone or something
condone|v|to accept or overlook wrongdoing
conduit|n|a channel for conveying something
conflagration|n|a large destructive fire
confluence|n|a flowing together; a junction
confound|v|to confuse; to prove a theory wrong
congeal|v|to solidify, especially by cooling
congenial|adj|pleasant because of shared interests or temperament
conjecture|n|an opinion formed without firm evidence
connoisseur|n|an expert judge in matters of taste
consecrate|v|to make or declare sacred
consensus|n|a general agreement among a group
consonant|adj|in agreement or harmony with
conspicuous|adj|standing out so as to be clearly visible
constrain|v|to severely restrict or compel
consternation|n|feelings of anxiety or dismay
construe|v|to interpret in a particular way
contentious|adj|causing or likely to cause argument
contiguous|adj|sharing a common border; touching
contingent|adj|dependent on something else happening
contrite|adj|feeling remorse for wrongdoing
contrived|adj|deliberately created rather than arising naturally
controvert|v|to deny or dispute
contumacious|adj|stubbornly disobedient to authority
conundrum|n|a confusing and difficult problem
conventional|adj|based on what is generally done or believed
convivial|adj|friendly, lively, and enjoyable
convoluted|adj|extremely complex and difficult to follow
copious|adj|abundant in supply or quantity
cordial|adj|warm and friendly
cornucopia|n|an abundant supply of good things
corollary|n|a natural consequence or result
corporeal|adj|relating to the physical body; material
corroborate|v|to confirm or support with evidence
cosmopolitan|adj|familiar with many cultures; worldly
countenance|v|to admit as acceptable or possible
covert|adj|not openly acknowledged; secret
covetous|adj|having a strong desire for another's possessions
cower|v|to crouch down in fear
coy|adj|pretending shyness or reluctance
crass|adj|lacking sensitivity or refinement
craven|adj|contemptibly lacking in courage
credence|n|belief in something as true
credulous|adj|too ready to believe things
crescendo|n|a gradual increase in intensity
criterion|n|a standard by which something is judged
cryptic|adj|having a mysterious or obscure meaning
culminate|v|to reach a climax or final stage
culpable|adj|deserving blame
cumbersome|adj|large or heavy and therefore hard to use
cupidity|n|greed for money or possessions
curmudgeon|n|a bad-tempered, difficult person
cursory|adj|hasty and therefore not thorough
curtail|v|to reduce in extent or quantity
cynical|adj|distrustful of human sincerity or integrity`;
const D3 = `dabble|v|to take part in an activity superficially
daunt|v|to make someone feel intimidated or discouraged
dearth|n|a scarcity or lack of something
debacle|n|a sudden and complete failure
debase|v|to reduce in quality, value, or dignity
debilitate|v|to weaken severely
debunk|v|to expose the falseness of a claim
decorous|adj|in keeping with good taste and propriety
decorum|n|behavior in keeping with good taste
decry|v|to publicly denounce
deference|n|respectful submission to another's judgment
defile|v|to make dirty, impure, or corrupt
definitive|adj|conclusive and authoritative
deflect|v|to cause to change direction; to deviate
defunct|adj|no longer existing or functioning
delectable|adj|delicious; extremely pleasant
deleterious|adj|causing harm or damage
delineate|v|to describe or portray precisely
delude|v|to deceive into believing something false
deluge|n|a severe flood; an overwhelming quantity
demagogue|n|a leader who appeals to prejudice rather than reason
demur|v|to raise objections; to hesitate
demure|adj|reserved, modest, and shy
denigrate|v|to criticize unfairly; to disparage
denizen|n|an inhabitant or occupant of a place
denounce|v|to publicly condemn
depict|v|to represent in words or pictures
deplete|v|to use up the supply of
deplore|v|to feel or express strong disapproval of
depravity|n|moral corruption or wickedness
deprecate|v|to express disapproval of
depredation|n|an act of attacking or plundering
deride|v|to express contempt for; to ridicule
derivative|adj|imitative of another's work; unoriginal
desiccate|v|to remove the moisture from
desultory|adj|lacking a plan or purpose; random
deter|v|to discourage someone from acting
detraction|n|the disparagement of a person's reputation
detrimental|adj|tending to cause harm
deviate|v|to depart from an established course
devious|adj|showing a skillful use of underhand tactics
devoid|adj|entirely lacking or free from
devout|adj|deeply religious or sincerely committed
dexterous|adj|showing skill, especially with the hands
diaphanous|adj|light, delicate, and translucent
diatribe|n|a forceful and bitter verbal attack
dichotomy|n|a division into two contrasting parts
didactic|adj|intended to teach, often excessively moralizing
diffident|adj|modest or shy from lack of confidence
diffuse|v|to spread over a wide area
digress|v|to depart from the main subject
dilatory|adj|slow to act; intended to cause delay
dilettante|n|one who dabbles without serious commitment
diligent|adj|showing careful and persistent effort
diminution|n|a reduction in size, extent, or importance
din|n|a loud, unpleasant, prolonged noise
dirge|n|a lament for the dead
disabuse|v|to free someone of a mistaken belief
discern|v|to perceive or recognize clearly
discerning|adj|having or showing good judgment
disclaim|v|to deny responsibility for
disconcert|v|to unsettle or disturb the composure of
discordant|adj|disagreeing; harsh and jarring in sound
discount|v|to regard as unimportant or unlikely
discredit|v|to harm the good reputation of
discrepancy|n|a lack of compatibility between facts
discrete|adj|individually separate and distinct
discretion|n|the freedom to decide; prudence in conduct
discursive|adj|digressing from subject to subject
disdain|n|the feeling that someone is unworthy of respect
disparage|v|to regard or represent as of little worth
disparate|adj|essentially different in kind
dispassionate|adj|not influenced by strong emotion
disperse|v|to distribute or scatter over a wide area
disputatious|adj|fond of argument
dissemble|v|to conceal one's true motives or feelings
disseminate|v|to spread widely
dissent|n|opinions at variance with those officially held
dissipate|v|to disperse; to squander
dissolution|n|the act of breaking up or formally ending
dissonance|n|a lack of harmony or agreement
dissuade|v|to persuade someone not to take an action
distend|v|to swell or expand from internal pressure
distill|v|to extract the essential meaning of
diurnal|adj|occurring during the daytime
divergent|adj|tending to be different or develop differently
divest|v|to deprive of rights, property, or rank
divulge|v|to make known private or sensitive information
docile|adj|ready to accept instruction; submissive
doctrinaire|adj|rigidly insistent on a theory regardless of practicality
dogmatic|adj|asserting opinions in an arrogant, unyielding way
dolorous|adj|feeling or expressing great sorrow
dormant|adj|temporarily inactive
dour|adj|stern, gloomy, and unfriendly
dubious|adj|hesitating or doubting; questionable
ductile|adj|able to be drawn out or shaped; pliable
dupe|v|to deceive or trick
duplicity|n|deceitfulness; double-dealing
duress|n|threats or force used to coerce someone
dwindle|v|to diminish gradually in size or strength
ebullient|adj|cheerful and full of energy
eclectic|adj|deriving ideas from a broad range of sources
edify|v|to instruct or improve morally
efface|v|to erase or make inconspicuous
effervescent|adj|bubbling; vivacious and enthusiastic
efficacy|n|the ability to produce a desired result
effrontery|n|insolent or impertinent behavior
effusive|adj|expressing emotion in an unrestrained way
egalitarian|adj|believing in equal rights for all people
egregious|adj|outstandingly bad; shocking
elegy|n|a mournful poem, typically for the dead
elicit|v|to draw out a response or reaction
elliptical|adj|expressed with extreme economy; obscure
eloquent|adj|fluent and persuasive in speech or writing
elucidate|v|to make clear; to explain
elusive|adj|difficult to find, catch, or achieve
emaciated|adj|abnormally thin from illness or hunger
embellish|v|to make more attractive by adding detail
embezzle|v|to steal money placed in one's trust
emollient|adj|having a softening or soothing effect
empirical|adj|based on observation rather than theory
emulate|v|to imitate in order to match or surpass
enamored|adj|filled with love or admiration
encomium|n|a speech or piece of writing of high praise
endemic|adj|regularly found in a particular place or group
enervate|v|to drain of energy or vitality
engender|v|to cause or give rise to
enigma|n|a person or thing that is mysterious or puzzling
enmity|n|the state of being an enemy; active hostility
ennui|n|a feeling of listlessness and dissatisfaction
entail|v|to involve as a necessary consequence
enthrall|v|to capture the fascinated attention of
ephemeral|adj|lasting for a very short time
epicure|n|a person with refined taste in food and drink
epigram|n|a concise and witty saying
epistolary|adj|relating to or contained in letters
epithet|n|a descriptive term; an abusive word or phrase
epitome|n|a perfect example of a quality or type
equanimity|n|calmness and composure under stress
equitable|adj|fair and impartial
equivocal|adj|open to more than one interpretation; ambiguous
equivocate|v|to use ambiguous language to conceal the truth
erudite|adj|having or showing great knowledge
eschew|v|to deliberately avoid or abstain from
esoteric|adj|understood by only a small specialized group
espouse|v|to adopt or support a cause or belief
ethereal|adj|extremely delicate, light, and otherworldly
euphemism|n|a mild word substituted for a harsh one
euphony|n|the quality of being pleasing to the ear
evanescent|adj|quickly fading from sight or memory
evince|v|to reveal the presence of a quality or feeling
evoke|v|to bring a feeling, memory, or image to mind
exacerbate|v|to make a problem or bad feeling worse
exacting|adj|making great demands on skill or care
exalt|v|to praise highly; to raise in rank
exasperate|v|to irritate intensely
exculpate|v|to clear from blame or guilt
execrable|adj|extremely bad or unpleasant
exegesis|n|a critical explanation of a text
exemplary|adj|serving as a desirable model
exhaustive|adj|including all possibilities; thorough
exhort|v|to strongly urge someone to do something
exigent|adj|pressing; demanding immediate action
exonerate|v|to absolve from blame or an obligation
exorbitant|adj|unreasonably high in price or amount
expatiate|v|to speak or write at length
expedient|adj|convenient and practical though possibly improper
expedite|v|to make a process happen more quickly
expiate|v|to make amends for wrongdoing
explicit|adj|stated clearly and in detail
exponent|n|a person who promotes or advocates an idea
expunge|v|to erase or remove completely
extant|adj|still in existence; surviving
extemporaneous|adj|spoken or done without preparation
extol|v|to praise enthusiastically
extraneous|adj|irrelevant or unrelated to the subject
extricate|v|to free from a difficulty or entanglement
extrinsic|adj|not part of the essential nature of something
exuberant|adj|filled with lively energy and excitement
exude|v|to display an emotion strongly and openly`;
const D4 = `fabricate|v|to invent something in order to deceive
facetious|adj|treating serious issues with inappropriate humor
facile|adj|appearing impressive only by ignoring real complexities
faction|n|a small dissenting group within a larger one
fallacious|adj|based on a mistaken belief or faulty reasoning
fallow|adj|left unplanted; temporarily inactive
fanatic|n|a person filled with excessive and single-minded zeal
fastidious|adj|very attentive to accuracy and detail; hard to please
fathom|v|to understand after much thought
fatuous|adj|silly and pointless
fawn|v|to give exaggerated flattery to gain favor
feasible|adj|possible to do easily or conveniently
feckless|adj|lacking initiative or strength of character
fecund|adj|producing abundant growth or offspring
felicitous|adj|well chosen or suited to the occasion
fervent|adj|having or showing intense passion
fetid|adj|smelling extremely unpleasant
fetter|v|to restrain or restrict
fickle|adj|changing frequently in loyalty or affection
fidelity|n|faithfulness to a person, cause, or original
figurative|adj|departing from literal meaning; metaphorical
finesse|n|refinement and delicacy of performance
flag|v|to become tired or less enthusiastic
flagrant|adj|conspicuously and outrageously offensive
flippant|adj|not showing a serious or respectful attitude
florid|adj|excessively ornate; ruddy in complexion
flourish|v|to grow or develop in a healthy, vigorous way
flout|v|to openly disregard a rule or convention
fluctuate|v|to rise and fall irregularly
foible|n|a minor weakness in character
foment|v|to instigate or stir up trouble
forbearance|n|patient self-control; restraint under provocation
forestall|v|to prevent by taking action in advance
forgo|v|to go without something desirable
formidable|adj|inspiring fear or respect through size or ability
forsake|v|to abandon or renounce
fortitude|n|courage in pain or adversity
fortuitous|adj|happening by chance, often fortunately
foster|v|to encourage the development of
fractious|adj|irritable and quarrelsome
frenetic|adj|fast and energetic in a wild, disordered way
frugal|adj|sparing with money or food
fulminate|v|to protest loudly and forcefully
fulsome|adj|excessive and insincere, especially in praise
furtive|adj|attempting to avoid notice; secretive
futile|adj|incapable of producing a useful result
gainsay|v|to deny or contradict
gambol|v|to run or jump about playfully
garner|v|to gather or collect
garrulous|adj|excessively talkative, especially about trivia
gauche|adj|lacking social grace; awkward
generic|adj|characteristic of a whole class or group
genial|adj|friendly and cheerful
germane|adj|relevant to a subject under consideration
gerrymander|v|to manipulate boundaries for political advantage
glib|adj|fluent but insincere and shallow
gloat|v|to dwell on one's own success with smug satisfaction
glut|n|an excessive supply of something
goad|v|to provoke or annoy into action
gossamer|adj|extremely light, thin, and delicate
gouge|v|to overcharge; to cut out roughly
grandiloquent|adj|pompous or extravagant in language
grandiose|adj|impressive in an exaggerated or pretentious way
granular|adj|considering something in fine detail
gratuitous|adj|uncalled for and unjustified; given free
gregarious|adj|fond of company; sociable
grievous|adj|very severe or serious
grimace|n|an expression of disgust, pain, or disapproval
grouse|v|to complain about something trivial
grovel|v|to act obsequiously in order to gain favor
guile|n|sly or cunning intelligence
gullible|adj|easily persuaded to believe something
gustatory|adj|relating to the sense of taste
hackneyed|adj|overused and therefore lacking freshness
halcyon|adj|denoting a peaceful and prosperous period
hallowed|adj|greatly revered; made holy
hapless|adj|unfortunate; luckless
harangue|n|a lengthy and aggressive speech
harbinger|n|a sign of something to come
hardy|adj|capable of enduring difficult conditions
harrowing|adj|acutely distressing
haughty|adj|arrogantly superior and disdainful
hedonist|n|a person devoted to pleasure
hegemony|n|leadership or dominance by one group over others
heresy|n|a belief contrary to accepted doctrine
hermetic|adj|sealed airtight; insulated from outside influence
heterogeneous|adj|diverse in character or content
heyday|n|the period of greatest success or vigor
hiatus|n|a pause or gap in a sequence
hierarchy|n|a system ranking members by status or authority
histrionic|adj|excessively theatrical in behavior
hoary|adj|grayish white with age; old and trite
homage|n|special honor or respect shown publicly
homogeneous|adj|of the same kind; uniform throughout
hubris|n|excessive pride or self-confidence
husband|v|to use resources economically
hyperbole|n|deliberate exaggeration for rhetorical effect
hypocritical|adj|behaving contrary to one's stated beliefs
hypothetical|adj|based on a supposition rather than fact`;
const D5 = `iconoclast|n|one who attacks cherished beliefs or institutions
ideology|n|a system of ideas underlying economic or political policy
idiosyncrasy|n|a peculiar habit or characteristic of an individual
idyllic|adj|extremely peaceful and picturesque
ignominious|adj|deserving public shame or disgrace
illicit|adj|forbidden by law, rules, or custom
illusory|adj|based on illusion; not real
imbroglio|n|a confused and embarrassing situation
imbue|v|to inspire or permeate with a quality
immaculate|adj|perfectly clean or free from flaws
imminent|adj|about to happen
immutable|adj|unchanging over time
impair|v|to weaken or damage
impartial|adj|treating all rivals or disputants equally
impassive|adj|not feeling or showing emotion
impeccable|adj|in accordance with the highest standards
impecunious|adj|having little or no money
impede|v|to delay or obstruct
imperative|adj|of vital importance; crucial
imperious|adj|arrogantly domineering
impermeable|adj|not allowing fluid to pass through
imperturbable|adj|unable to be upset or excited
impervious|adj|unable to be affected or penetrated
impetuous|adj|acting quickly and without thought
impinge|v|to have an effect on; to encroach upon
implacable|adj|unable to be appeased or pacified
implausible|adj|not seeming reasonable or probable
implicate|v|to show to be involved in a crime or fault
implicit|adj|implied though not plainly expressed
impolitic|adj|failing to possess good judgment; unwise
importune|v|to ask persistently and annoyingly
impregnable|adj|unable to be captured or broken into
impromptu|adj|done without being planned or rehearsed
improvident|adj|failing to provide for the future
impudent|adj|not showing due respect; boldly rude
impugn|v|to dispute the truth or integrity of
impunity|n|exemption from punishment or consequence
impute|v|to attribute a fault or quality to someone
inadvertent|adj|not resulting from deliberate planning
inane|adj|silly and lacking sense
inaugurate|v|to begin or introduce formally
incandescent|adj|glowing with heat; brilliantly intense
incense|v|to make extremely angry
incessant|adj|continuing without pause or interruption
inchoate|adj|just begun and not fully formed
incipient|adj|beginning to develop
incisive|adj|showing clear, sharp, penetrating thought
inclement|adj|unpleasantly cold or wet
incongruous|adj|out of place; not in harmony with surroundings
inconsequential|adj|not important or significant
incontrovertible|adj|not able to be denied or disputed
incorrigible|adj|not able to be corrected or reformed
increment|n|an increase or addition in a series
incredulous|adj|unwilling or unable to believe
inculcate|v|to instill by persistent instruction
incumbent|adj|necessary as a duty; currently holding office
incursion|n|an invasion or sudden attack
indefatigable|adj|persisting tirelessly
indelible|adj|impossible to remove or forget
indict|v|to formally accuse of a crime
indifferent|adj|having no particular interest; mediocre
indigenous|adj|originating naturally in a particular place
indigent|adj|very poor and needy
indignant|adj|angry at unfair treatment
indolent|adj|habitually lazy
indomitable|adj|impossible to subdue or defeat
indubitable|adj|impossible to doubt
induce|v|to bring about; to persuade
indulgent|adj|excessively lenient or generous
ineffable|adj|too great to be expressed in words
inept|adj|having no skill; clumsy
inert|adj|lacking the ability or desire to move or act
inexorable|adj|impossible to stop or prevent
infallible|adj|incapable of making mistakes
infamous|adj|well known for a bad quality or deed
infer|v|to conclude from evidence and reasoning
ingenuous|adj|innocent, candid, and unsuspecting
ingratiate|v|to bring oneself into favor through flattery
inherent|adj|existing as a permanent essential attribute
inimical|adj|tending to obstruct or harm
inimitable|adj|so good or unusual as to be impossible to copy
iniquity|n|immoral or grossly unfair behavior
innate|adj|inborn; existing from birth
innocuous|adj|not harmful or offensive
innovate|v|to introduce something new
innuendo|n|an indirect and usually derogatory remark
inordinate|adj|unusually large; excessive
inscrutable|adj|impossible to interpret or understand
insidious|adj|proceeding harmfully in a subtle, gradual way
insinuate|v|to suggest indirectly; to maneuver into favor
insipid|adj|lacking flavor, vigor, or interest
insolent|adj|rude and disrespectful
insolvent|adj|unable to pay outstanding debts
insular|adj|narrow-minded; isolated from outside influence
insurgent|n|a rebel against established authority
integral|adj|necessary to make a whole complete
inter|v|to place a body in a grave
interlocutor|n|a person who takes part in a dialogue
interminable|adj|endless or seemingly endless
intermittent|adj|occurring at irregular intervals
intractable|adj|hard to control or deal with
intransigent|adj|unwilling to compromise
intrepid|adj|fearless and adventurous
intrinsic|adj|belonging naturally; essential
inundate|v|to overwhelm with things to be dealt with; to flood
inure|v|to accustom someone to something unpleasant
invective|n|abusive or insulting language
inveigh|v|to speak or write about with great hostility
inveigle|v|to persuade by deception or flattery
inveterate|adj|having a long-established and unlikely to change habit
invidious|adj|likely to arouse resentment or anger in others
inviolable|adj|never to be infringed or dishonored
irascible|adj|easily angered
ironic|adj|expressing meaning by using language of opposite import
irresolute|adj|showing uncertainty about what to do
itinerant|adj|traveling from place to place
jaded|adj|tired and lacking enthusiasm after overexposure
jargon|n|special words used by a particular profession
jaundiced|adj|affected by bitterness or resentment
jettison|v|to throw or drop from an aircraft or ship; to abandon
jibe|v|to be in accord with; to agree
jingoism|n|extreme and aggressive patriotism
jocular|adj|fond of or characterized by joking
jubilant|adj|feeling or expressing great happiness
judicious|adj|having or showing good judgment
juggernaut|n|a huge, powerful, and overwhelming force
juncture|n|a particular point in events or time
junta|n|a military or political group that rules after seizing power
juxtapose|v|to place close together for contrasting effect
keen|adj|highly developed; eager and enthusiastic
kindle|v|to arouse an emotion; to set alight
kinetic|adj|relating to or resulting from motion
knell|n|the sound of a bell rung solemnly; an omen of death
labyrinthine|adj|irregular and twisting; extremely complicated
lachrymose|adj|tearful or given to weeping
lackadaisical|adj|lacking enthusiasm and determination
laconic|adj|using very few words
lambaste|v|to criticize harshly
lament|v|to express grief or regret
lampoon|v|to publicly criticize using ridicule
languid|adj|showing no energy; slow and relaxed
languish|v|to lose vitality; to suffer neglect
largess|n|generosity in bestowing money or gifts
lassitude|n|a state of physical or mental weariness
latent|adj|existing but not yet developed or visible
laud|v|to praise highly
lax|adj|not sufficiently strict or careful
legerdemain|n|skillful use of the hands; trickery
lethargic|adj|sluggish and apathetic
levity|n|humor or lack of seriousness
liaison|n|communication between groups; a close bond
libel|n|a published false statement damaging a reputation
licentious|adj|disregarding accepted rules, especially in morals
limpid|adj|clear and transparent; easily understood
linchpin|n|the thing that holds a complex system together
lionize|v|to treat as a celebrity
lissome|adj|slim, supple, and graceful
listless|adj|lacking energy or enthusiasm
litany|n|a tedious recital of a long list
lithe|adj|thin, supple, and graceful
loquacious|adj|tending to talk a great deal
lucid|adj|expressed clearly; easy to understand
lucrative|adj|producing a great deal of profit
lugubrious|adj|looking or sounding sad and dismal
luminous|adj|giving off light; brilliant
lurid|adj|vivid in shocking detail; sensational`;
const D6 = `machination|n|a scheming plot or intrigue
maelstrom|n|a powerful whirlpool; a turbulent situation
magnanimous|adj|generous and forgiving, especially toward a rival
magnate|n|a wealthy and influential businessperson
maladroit|adj|ineffective or bungling; clumsy
malaise|n|a general feeling of unease or discomfort
malapropism|n|the mistaken use of a similar-sounding word
malediction|n|a curse
malevolent|adj|wishing evil or harm on others
malfeasance|n|wrongdoing, especially by a public official
malinger|v|to pretend illness to avoid work or duty
malleable|adj|easily influenced; able to be hammered into shape
mandate|n|an official order or authorization
manifest|adj|clear and obvious to the eye or mind
manifold|adj|many and various
mar|v|to impair the appearance or quality of
martial|adj|relating to war or the military
martinet|n|a strict disciplinarian
maudlin|adj|tearfully or foolishly sentimental
maverick|n|an unorthodox or independent-minded person
mawkish|adj|sentimental in an exaggerated, sickly way
maxim|n|a short statement expressing a general truth
meager|adj|lacking in quantity or quality
mediate|v|to intervene between parties to bring about agreement
mellifluous|adj|pleasingly smooth and musical to hear
mendacious|adj|not telling the truth; lying
mendicant|n|a beggar
mercenary|adj|motivated solely by the desire for money
mercurial|adj|subject to sudden and unpredictable changes of mood
meretricious|adj|apparently attractive but having no real value
meticulous|adj|showing great attention to detail
mettle|n|a person's ability to cope well with difficulties
microcosm|n|a small-scale representation of something larger
militate|v|to be a powerful factor in preventing something
minatory|adj|expressing or conveying a threat
misanthrope|n|a person who dislikes humankind
misconstrue|v|to interpret wrongly
miserly|adj|extremely unwilling to spend money
misnomer|n|a wrong or inaccurate name or designation
mitigate|v|to make less severe, serious, or painful
modicum|n|a small quantity of something
mollify|v|to appease the anger or anxiety of
molt|v|to shed old feathers, hair, or skin
monolithic|adj|large, powerful, and resistant to change
moribund|adj|at the point of death; in terminal decline
morose|adj|sullen and ill-tempered
mote|n|a tiny speck or particle
motley|adj|made up of varied and disparate parts
mundane|adj|lacking interest; of this earthly world
munificent|adj|extremely generous
myopic|adj|shortsighted; lacking foresight
myriad|adj|countless or extremely great in number
nadir|n|the lowest point in fortunes or development
nascent|adj|just coming into existence and beginning to develop
nebulous|adj|hazy, vague, or ill-defined
nefarious|adj|wicked or criminal
negligent|adj|failing to take proper care
neophyte|n|a beginner or novice
nettle|v|to irritate or annoy
nexus|n|a connection or central link between things
nicety|n|a fine detail or subtle distinction
nihilism|n|the rejection of all religious and moral principles
noisome|adj|having an extremely offensive smell
nomadic|adj|roaming from place to place
nominal|adj|existing in name only; very small in amount
nonchalant|adj|calm and casually unconcerned
nondescript|adj|lacking distinctive characteristics
nonplussed|adj|surprised and confused so as to be unsure
nostalgia|n|a sentimental longing for the past
notorious|adj|famous for something bad
novel|adj|new, original, and unusual
novice|n|a person new to a field or activity
noxious|adj|harmful, poisonous, or very unpleasant
nuance|n|a subtle difference in meaning or expression
nugatory|adj|of no value or importance
nullify|v|to make legally void; to cancel out
obdurate|adj|stubbornly refusing to change an opinion
obfuscate|v|to make obscure or unclear
obliterate|v|to destroy utterly; to wipe from existence
oblivious|adj|not aware of what is happening around one
obloquy|n|strong public criticism; resulting disgrace
obsequious|adj|excessively obedient or attentive
obsolete|adj|no longer produced or used; out of date
obstinate|adj|stubbornly refusing to change one's course
obstreperous|adj|noisy and difficult to control
obtuse|adj|slow to understand; blunt rather than sharp
obviate|v|to remove a need or difficulty
occlude|v|to block or obstruct
odious|adj|extremely unpleasant; repulsive
officious|adj|asserting authority in an intrusive, interfering way
olfactory|adj|relating to the sense of smell
oligarchy|n|government by a small elite group
ominous|adj|suggesting that something bad is going to happen
omniscient|adj|knowing everything
onerous|adj|involving great effort or difficulty; burdensome
opaque|adj|not able to be seen through; hard to understand
opine|v|to state as an opinion
opportune|adj|well chosen or particularly favorable in timing
opprobrium|n|harsh public criticism; resulting public disgrace
opulent|adj|ostentatiously rich and luxurious
oratory|n|the art of formal public speaking
ordain|v|to order officially; to confer holy orders on
ornate|adj|elaborately or highly decorated
orthodox|adj|conforming to established doctrine or practice
oscillate|v|to move back and forth; to waver between extremes
ossify|v|to turn into bone; to become rigid and unchanging
ostensible|adj|stated as true but not necessarily so
ostentatious|adj|designed to impress or attract notice; showy
ostracize|v|to exclude from a society or group
oust|v|to drive out or expel from a position
overt|adj|done openly and not concealed
overwrought|adj|in a state of nervous excitement; overly elaborate`;
const D7 = `pacify|v|to quell the anger or agitation of
painstaking|adj|done with great care and thoroughness
palatable|adj|pleasant to taste; acceptable to the mind
palliate|v|to make less severe without removing the cause
pallid|adj|pale; lacking vigor or interest
palpable|adj|so intense as to seem almost touchable
paltry|adj|small or meager to the point of being insulting
panacea|n|a supposed solution for all problems
panache|n|flamboyant confidence of style or manner
pandemic|adj|prevalent over a whole country or the world
pander|v|to gratify base desires or prejudices for gain
panegyric|n|a formal speech of elaborate praise
paradigm|n|a typical example, pattern, or model
paradox|n|a seemingly self-contradictory statement that may be true
paragon|n|a model of excellence or perfection
pariah|n|an outcast rejected by society
parochial|adj|limited in outlook or scope; narrow
parody|n|an imitation designed to ridicule the original
parry|v|to ward off a blow; to evade a question
parsimonious|adj|extremely unwilling to spend money
partisan|adj|prejudiced in favor of a particular cause
patent|adj|easily recognizable; obvious
pathological|adj|compulsive and unreasonable; relating to disease
patronize|v|to treat condescendingly; to be a regular customer of
paucity|n|the presence of something in insufficient quantity
peccadillo|n|a minor fault or sin
pedantic|adj|excessively concerned with minor details or rules
pedestrian|adj|lacking inspiration or excitement; dull
pejorative|adj|expressing contempt or disapproval
pellucid|adj|translucently clear; easy to understand
penchant|n|a strong liking or habitual inclination
penitent|adj|feeling sorrow and regret for wrongdoing
pensive|adj|engaged in deep or melancholy thought
penurious|adj|extremely poor; excessively unwilling to spend
peremptory|adj|insisting on immediate obedience; imperious
perennial|adj|lasting for a long or apparently infinite time
perfidy|n|deceitfulness; untrustworthiness
perfunctory|adj|done as a duty without real interest or care
peripatetic|adj|traveling from place to place
periphery|n|the outer limits or edge of an area
permeate|v|to spread throughout
pernicious|adj|having a harmful effect in a gradual, subtle way
perpetuate|v|to cause something to continue indefinitely
perquisite|n|a benefit received in addition to one's salary
perspicacious|adj|having keen insight and understanding
pertinacious|adj|holding firmly to a purpose or opinion
pertinent|adj|relevant to the matter at hand
perturb|v|to make anxious or unsettled
peruse|v|to read or examine carefully
pervasive|adj|spreading widely throughout an area or group
petulant|adj|childishly sulky or bad-tempered
philanthropy|n|the desire to promote the welfare of others
philistine|n|a person hostile to culture and the arts
phlegmatic|adj|unemotional and stolidly calm
pillory|v|to attack or ridicule publicly
pinnacle|n|the most successful or admired point
pious|adj|devoutly religious
pique|v|to stimulate interest; to irritate slightly
pithy|adj|concise and forcefully expressive
pittance|n|a very small or inadequate amount of money
placate|v|to make less angry or hostile
placid|adj|calm, peaceful, and free from disturbance
platitude|n|a remark used so often it has lost meaning
plaudit|n|an expression of praise or approval
plausible|adj|seeming reasonable or probable
plebeian|adj|of the common people; lacking refinement
plethora|n|an excessive amount of something
pliable|adj|easily bent; easily influenced
plummet|v|to fall straight down at high speed
polemic|n|a strong verbal or written attack
politic|adj|showing shrewd judgment and prudence
polyglot|n|a person who knows several languages
ponderous|adj|slow and clumsy from weight; dull and laborious
portend|v|to be a sign or warning that something will happen
poseur|n|a person who behaves affectedly to impress others
posit|v|to put forward as a basis for argument
posterity|n|all future generations of people
potentate|n|a monarch or ruler with great power
pragmatic|adj|dealing with things in a practical way
prattle|v|to talk at length in a foolish way
precarious|adj|dependent on chance; insecure or unstable
precedent|n|an earlier event serving as an example or rule
precept|n|a general rule regulating behavior or thought
precipitate|v|to cause to happen suddenly or prematurely
precipitous|adj|dangerously steep; done suddenly without thought
preclude|v|to prevent from happening
precocious|adj|having developed abilities at an unusually early age
predilection|n|a preference or special liking for something
preeminent|adj|surpassing all others; outstanding
prepossessing|adj|attractive or appealing in appearance
preposterous|adj|contrary to reason or common sense
prerogative|n|an exclusive right or privilege
prescient|adj|having knowledge of events before they occur
prevaricate|v|to speak evasively in order to avoid the truth
pristine|adj|in its original condition; spotlessly clean
probity|n|complete honesty and integrity
proclivity|n|a tendency to choose or do something regularly
prodigal|adj|wastefully extravagant
prodigious|adj|remarkably great in size, extent, or degree
profligate|adj|recklessly wasteful; shamelessly immoral
profound|adj|very great or intense; showing deep insight
profuse|adj|given or existing in abundance
proliferate|v|to increase rapidly in number
prolific|adj|producing much fruit, foliage, or many works
prolix|adj|tediously lengthy in speech or writing
promulgate|v|to promote or make widely known
propensity|n|an inclination to behave in a particular way
propitiate|v|to win the favor of by doing something pleasing
propitious|adj|giving or indicating a good chance of success
propriety|n|conformity to accepted standards of behavior
prosaic|adj|commonplace, ordinary, and unromantic
proscribe|v|to forbid, especially by law
proselytize|v|to attempt to convert others to one's belief
protean|adj|readily taking on different forms or roles
protracted|adj|lasting longer than expected or usual
provident|adj|making careful provision for the future
provincial|adj|narrow-minded and unsophisticated
provisional|adj|arranged for the present and likely to change
proximity|n|nearness in space, time, or relationship
prudent|adj|acting with care and thought for the future
puerile|adj|childishly silly and immature
pugnacious|adj|eager or quick to argue or fight
punctilious|adj|showing great attention to correct behavior
pundit|n|an expert who comments publicly on a subject
pungent|adj|having a sharply strong taste or smell
punitive|adj|inflicting or intended as punishment
purge|v|to rid of unwanted people, things, or feelings
purported|adj|appearing to be true but not proven
pusillanimous|adj|showing a lack of courage or determination
putative|adj|generally considered or reputed to be
quagmire|n|a soft boggy area; an awkward complex situation
quaint|adj|attractively unusual or old-fashioned
qualify|v|to modify or limit a statement
qualm|n|an uneasy feeling of doubt about one's conduct
quandary|n|a state of uncertainty over a difficult choice
quell|v|to put an end to; to suppress
querulous|adj|complaining in a petulant or whining manner
quiescent|adj|in a state of inactivity or dormancy
quintessential|adj|representing the most perfect example of a quality
quip|n|a witty or clever remark
quixotic|adj|idealistic to an impractical degree
quorum|n|the minimum number of members needed to conduct business
quotidian|adj|occurring daily; ordinary and commonplace`;
const D8 = `raconteur|n|a skilled teller of anecdotes
ramification|n|a consequence of an action or decision
rancor|n|bitterness or resentfulness held over time
rankle|v|to cause continuing annoyance or resentment
rapacious|adj|aggressively greedy or grasping
rarefied|adj|distant from the concerns of ordinary people; thin
raucous|adj|making a harsh, loud, disturbing noise
raze|v|to destroy completely, especially a building
rebuff|v|to reject in an abrupt or ungracious manner
rebuke|v|to express sharp disapproval of
recalcitrant|adj|stubbornly resistant to authority or discipline
recant|v|to withdraw a former statement or belief
recapitulate|v|to summarize and state again the main points
recluse|n|a person who lives in seclusion
recondite|adj|obscure and understood by very few
recrimination|n|an accusation made in response to another
rectitude|n|morally correct behavior
redolent|adj|strongly reminiscent of; sweetly fragrant
redoubtable|adj|formidable, especially as an opponent
redress|n|remedy or compensation for a wrong
refractory|adj|stubborn and unmanageable
refute|v|to prove a statement or person to be wrong
regale|v|to entertain lavishly with talk or food
relegate|v|to consign to an inferior position
relinquish|v|to voluntarily give up or let go of
remiss|adj|lacking care or attention to duty
remonstrate|v|to make a forcefully reproachful protest
renege|v|to go back on a promise or agreement
renounce|v|to formally give up a claim, right, or belief
renown|n|the state of being widely known and honored
replete|adj|filled or abundantly supplied with
reprehensible|adj|deserving strong condemnation
reprieve|n|a temporary relief from punishment or trouble
reproach|v|to express disappointment or disapproval to
reprobate|n|an unprincipled person
reproof|n|an expression of blame or disapproval
repudiate|v|to refuse to accept or be associated with
requisite|adj|made necessary by particular circumstances
rescind|v|to revoke or cancel officially
resilient|adj|able to recover quickly from difficulties
resolute|adj|admirably purposeful and determined
respite|n|a short period of rest or relief
resplendent|adj|attractive and impressive through brilliance
restive|adj|unable to keep still; restless under restraint
reticent|adj|not revealing one's thoughts readily
retiring|adj|shy and fond of being alone
retract|v|to withdraw a statement or accusation
retrench|v|to reduce costs or spending
revere|v|to feel deep respect or admiration for
reverent|adj|feeling or showing deep respect
revile|v|to criticize in an abusive or angry manner
rhetoric|n|the art of persuasive speaking or writing
ribald|adj|referring to sex in a rude but humorous way
rife|adj|widespread, especially of something undesirable
rigor|n|the quality of being extremely thorough and careful
risible|adj|deserving to be laughed at
rococo|adj|extravagantly or excessively ornate
rue|v|to bitterly regret
ruminate|v|to think deeply about something
ruse|n|an action intended to deceive
rustic|adj|relating to the countryside; plain and simple
saccharine|adj|excessively sweet or sentimental
sacrosanct|adj|regarded as too important to be interfered with
sagacious|adj|having keen judgment and discernment
salient|adj|most noticeable or important
salubrious|adj|health-giving; pleasant and agreeable
salutary|adj|producing a beneficial effect
sanctimonious|adj|making a show of being morally superior
sanction|v|to give official approval or permission for
sanguine|adj|optimistic, especially in a difficult situation
sardonic|adj|grimly mocking or cynical
satiate|v|to satisfy fully, sometimes to excess
saturnine|adj|gloomy or sullen in temperament
savant|n|a learned person with deep knowledge
savory|adj|salty or spicy rather than sweet; morally respectable
scanty|adj|small or insufficient in amount
schism|n|a division into opposing groups
scintillating|adj|brilliantly clever; sparkling
scrupulous|adj|diligent and extremely attentive to what is right
scrutinize|v|to examine closely and critically
scurrilous|adj|making scandalous claims to damage a reputation
secular|adj|not connected with religious matters
sedentary|adj|involving much sitting; taking little exercise
sedition|n|conduct inciting rebellion against authority
sedulous|adj|showing dedication and persistent diligence
segregate|v|to set apart from the rest
semblance|n|the outward appearance or form of something
sententious|adj|given to moralizing in a pompous way
sentient|adj|able to perceive or feel things
sequester|v|to isolate, hide away, or set apart
serendipity|n|the occurrence of fortunate events by chance
serene|adj|calm, peaceful, and untroubled
servile|adj|excessively willing to serve or please others
shirk|v|to avoid a duty or responsibility
sinecure|n|a position requiring little work but giving pay
singular|adj|exceptionally good or unusual; remarkable
sinuous|adj|having many curves and turns
skeptic|n|a person who habitually doubts accepted opinions
skulk|v|to move stealthily; to lurk with sinister intent
slake|v|to satisfy thirst or desire
slander|n|a false spoken statement damaging a reputation
slothful|adj|lazy and disinclined to work
sober|adj|serious, solemn, and restrained
sodden|adj|soaked through with liquid
solicitous|adj|showing careful concern for someone's well-being
soliloquy|n|a speech in which a character speaks thoughts aloud
solvent|adj|having enough money to pay one's debts
somber|adj|dark and gloomy; grave and serious
somnolent|adj|sleepy or causing sleepiness
soporific|adj|tending to induce drowsiness or sleep
sordid|adj|involving immoral or dishonorable actions
spartan|adj|marked by strict self-discipline and simplicity
specious|adj|superficially plausible but actually wrong
sporadic|adj|occurring at irregular intervals
spurious|adj|not being what it purports to be; false
spurn|v|to reject with contempt
squalid|adj|extremely dirty and unpleasant
squander|v|to waste in a reckless and foolish manner
staid|adj|sedate, respectable, and unadventurous
stagnant|adj|not flowing or developing; showing no activity
static|adj|lacking movement, action, or change
staunch|adj|loyal and committed in attitude
steadfast|adj|resolutely firm and unwavering
stigma|n|a mark of disgrace associated with a circumstance
stint|v|to restrict or be sparing in supplying
stipulate|v|to demand or specify as part of an agreement
stoic|adj|enduring pain or hardship without showing feelings
stolid|adj|showing little emotion or animation
strident|adj|loud and harsh; forcefully insistent
stringent|adj|strict, precise, and exacting
stultify|v|to make ineffectual; to cause to lose enthusiasm
stymie|v|to prevent from proceeding; to thwart
suave|adj|charming and confident, sometimes superficially so
subjugate|v|to bring under domination or control
sublime|adj|of such excellence as to inspire awe
subsidiary|adj|less important than but related to something else
substantiate|v|to provide evidence to support or prove
subterfuge|n|deceit used in order to achieve a goal
subtle|adj|so delicate or precise as to be hard to describe
subversive|adj|seeking to undermine an established system
succinct|adj|briefly and clearly expressed
succumb|v|to fail to resist pressure, temptation, or illness
sullen|adj|bad-tempered and sulky
sully|v|to damage the purity or integrity of
sumptuous|adj|splendid and expensive-looking
sunder|v|to split apart
supercilious|adj|behaving as though superior to others
superfluous|adj|unnecessary because more than enough exists
supersede|v|to take the place of; to replace
supplant|v|to supersede and replace
supple|adj|bending and moving easily without breaking
supplicate|v|to ask humbly and earnestly for something
surfeit|n|an excessive amount of something
surly|adj|bad-tempered and unfriendly
surmise|v|to suppose something without firm evidence
surmount|v|to overcome a difficulty or obstacle
surreptitious|adj|kept secret because it would be disapproved of
susceptible|adj|likely to be influenced or harmed by
sybarite|n|a person devoted to luxury and pleasure
sycophant|n|a person who flatters others to gain advantage
synthesis|n|the combination of parts into a connected whole`;
const D9 = `tacit|adj|understood or implied without being stated
taciturn|adj|reserved; saying little
talisman|n|an object thought to have magic powers
tangential|adj|only slightly relevant to the matter at hand
tangible|adj|perceptible by touch; clear and definite
tantamount|adj|equivalent in seriousness or effect
tautology|n|needless repetition of the same idea
tawdry|adj|showy but cheap and of poor quality
temerity|n|excessive confidence or boldness; audacity
temperate|adj|showing moderation and self-restraint
tenable|adj|able to be defended against attack or objection
tenacious|adj|holding firmly; persistent and determined
tendentious|adj|expressing a strong point of view; biased
tenet|n|a principle held as true by a person or group
tenuous|adj|very weak or slight
tepid|adj|lukewarm; showing little enthusiasm
terse|adj|sparing in the use of words; abrupt
thwart|v|to prevent someone from accomplishing something
timorous|adj|showing a lack of confidence; fearful
tirade|n|a long angry speech of criticism
toady|n|a person who behaves obsequiously to gain favor
torpid|adj|mentally or physically inactive; sluggish
torpor|n|a state of physical or mental inactivity
tortuous|adj|full of twists and turns; excessively lengthy
touchstone|n|a standard by which something is judged
tout|v|to attempt to sell or promote insistently
tractable|adj|easy to control or influence
traduce|v|to speak badly of falsely
transgress|v|to violate a law or moral principle
transient|adj|lasting only a short time
transitory|adj|not permanent
translucent|adj|allowing light through without detailed images
transmute|v|to change in form, nature, or substance
travesty|n|a false, absurd, or distorted representation
tremulous|adj|shaking slightly, especially from nervousness
trenchant|adj|vigorous, incisive, and effective in expression
trepidation|n|a feeling of fear about something that may happen
tribulation|n|a cause of great trouble or suffering
trite|adj|overused and lacking originality
truculent|adj|eager to argue or fight; aggressively defiant
truncate|v|to shorten by cutting off the top or end
turbid|adj|cloudy or muddy; confused and obscure
turgid|adj|swollen; pompous and tedious in language
turpitude|n|depravity; wickedness
tyro|n|a beginner or novice
ubiquitous|adj|present or found everywhere
umbrage|n|offense or annoyance
unassailable|adj|unable to be attacked, questioned, or defeated
uncanny|adj|strange or mysterious in an unsettling way
unctuous|adj|excessively flattering in an insincere way
undermine|v|to weaken gradually and insidiously
underscore|v|to emphasize
undulate|v|to move with a smooth wavelike motion
unequivocal|adj|leaving no doubt; unambiguous
unfeigned|adj|genuine and sincere
unfettered|adj|not restrained or restricted
uniform|adj|remaining the same in all cases and at all times
unilateral|adj|performed by or affecting only one side
untenable|adj|not able to be defended against objection
untoward|adj|unexpected and inappropriate
upbraid|v|to find fault with; to scold sharply
usurp|v|to take a position of power illegally or by force
utilitarian|adj|designed to be useful rather than attractive
utopia|n|an imagined perfect place or state
uxorious|adj|excessively fond of or submissive to one's wife
vacillate|v|to waver between different opinions or actions
vacuous|adj|showing a lack of thought or intelligence
vagary|n|an unexpected and inexplicable change
valedictory|adj|serving as a farewell
vanguard|n|the leading position in a movement or field
vapid|adj|offering nothing stimulating or challenging
variegated|adj|marked with different colors; varied
vaunt|v|to boast about or praise excessively
vehement|adj|showing strong feeling; forceful and intense
venal|adj|open to bribery; corrupt
veneer|n|a thin decorative covering; a deceptive outward appearance
venerate|v|to regard with great respect
veracity|n|conformity to facts; habitual truthfulness
verbose|adj|using more words than are needed
verdant|adj|green with grass or other lush vegetation
verisimilitude|n|the appearance of being true or real
veritable|adj|used to emphasize that something is truly so
vernacular|n|the everyday language spoken by ordinary people
vestige|n|a trace of something that no longer exists
vex|v|to make annoyed or worried
viable|adj|capable of working successfully; feasible
vicarious|adj|experienced indirectly through another person
vicissitude|n|a change of circumstances, typically unwelcome
vigilant|adj|keeping careful watch for possible danger
vilify|v|to speak about in an abusively disparaging way
vindicate|v|to clear of blame; to justify by evidence
vindictive|adj|having a strong desire for revenge
virtuoso|n|a person highly skilled in an art, especially music
virulent|adj|extremely severe or harmful; bitterly hostile
viscous|adj|thick and sticky in consistency
vitiate|v|to spoil or impair the quality of
vitriolic|adj|filled with bitter criticism or malice
vituperate|v|to blame or insult in strong language
vociferous|adj|expressing opinions loudly and forcefully
volatile|adj|liable to change rapidly and unpredictably
volition|n|the power of using one's own will
voluble|adj|speaking incessantly and fluently
voracious|adj|wanting great quantities; very eager
wan|adj|pale and giving the impression of illness
wane|v|to decrease in size, strength, or importance
wanton|adj|deliberate and unprovoked; lacking restraint
wary|adj|feeling caution about possible dangers
wax|v|to increase in size, strength, or importance
welter|n|a large confused mass or number
wheedle|v|to use flattery or coaxing to persuade
whimsical|adj|playfully quaint or fanciful
willful|adj|intentional; obstinately self-willed
winnow|v|to remove the less desirable parts of something
wistful|adj|having a feeling of vague or regretful longing
wither|v|to become dry and shriveled; to fall into decay
wizened|adj|shriveled or wrinkled with age
wry|adj|using dry, mocking humor; twisted to one side
xenophobia|n|an intense dislike or fear of foreigners
yoke|v|to join or link together, often burdensomely
zany|adj|amusingly unconventional and idiosyncratic
zeal|n|great energy or enthusiasm in pursuit of a cause
zealot|n|a person with uncompromising enthusiasm for a cause
zenith|n|the highest point reached; the peak`;

/* ---------- hand-written example sentences for the highest-frequency words ---------- */

const S1 = `abate|The storm finally abated near dawn, leaving the streets littered with branches.~Public interest in the scandal has abated now that the trial is over.~Nothing the mediator proposed could abate the union's anger.
aberrant|A single aberrant reading does not invalidate a decade of careful data.~The biologist noted aberrant behavior in the colony after the water was contaminated.~Critics dismissed the ruling as aberrant, inconsistent with a century of precedent.
abscond|The treasurer absconded with nearly a million dollars in donations.~Two suspects absconded before the hearing could begin.~He absconded from the facility during the night shift.
abstruse|The paper's argument is sound but so abstruse that few economists finished it.~She had a gift for making abstruse theories accessible to undergraduates.~His lectures grew steadily more abstruse as the term went on.
acerbic|The critic was known for acerbic reviews that authors dreaded.~Her acerbic wit made her popular with readers and feared by colleagues.~He offered an acerbic assessment of the committee's competence.
acquiesce|Rather than prolong the dispute, the board acquiesced to the new terms.~She acquiesced in the decision, though her silence hardly signaled approval.~Faced with mounting pressure, the ministry finally acquiesced.
acumen|Her business acumen turned a failing bookshop into a regional chain.~The judge was praised for her legal acumen rather than her rhetoric.~Political acumen, not ideology, explains his long survival in office.
adulterate|The company was fined for adulterating olive oil with cheaper varieties.~Inspectors found that the milk had been adulterated with water.~He refused to adulterate the original score with modern instrumentation.
alacrity|She accepted the assignment with an alacrity that surprised her supervisor.~The volunteers moved with alacrity once the flood warning was issued.~He agreed with such alacrity that we suspected he had planned it.
allay|The mayor's statement did little to allay public fears.~A second inspection allayed the engineers' concerns about the foundation.~Nothing the doctor said could allay her anxiety about the results.
ambivalent|She remained ambivalent about the promotion, drawn by the salary but wary of the hours.~Voters were ambivalent toward the proposal, endorsing its goals but doubting its cost.~His ambivalent review praised the acting while condemning the script.
ameliorate|The program was designed to ameliorate the worst effects of the drought.~Small reforms may ameliorate the problem without solving it.~Nothing in the budget will ameliorate overcrowding in the schools.
anachronism|The pocket watch in the medieval scene is an obvious anachronism.~Critics called the institution an anachronism in a modern republic.~Typewriters in the newsroom now seem a charming anachronism.
anomaly|The reading was an anomaly, and the instrument was recalibrated.~Her promotion at twenty-six was an anomaly in a firm that prized seniority.~Astronomers investigated the anomaly for months before publishing.
antipathy|His antipathy toward committee work was well known in the department.~There was a long-standing antipathy between the two research groups.~She felt an instinctive antipathy to the proposal.
apathy|Voter apathy, not opposition, defeated the measure.~The teacher struggled against a wall of student apathy.~Public apathy allowed the ordinance to pass unnoticed.
approbation|The design won the approbation of the entire review panel.~He sought his father's approbation more than any prize.~The policy met with general approbation from economists.
arcane|The rules of the tournament are arcane even to longtime players.~She spent years mastering the arcane vocabulary of tax law.~His argument rested on an arcane point of constitutional history.
arduous|The climb was arduous, taking eleven hours in poor weather.~Restoring the manuscript proved an arduous and thankless task.~After an arduous negotiation, the treaty was finally signed.
assiduous|Her assiduous note-taking made her the obvious choice for secretary.~Assiduous practice, not raw talent, accounts for his precision.~The archivist was assiduous in cataloguing every fragment.
assuage|A formal apology did little to assuage their resentment.~He ate to assuage his hunger, not from any pleasure in the food.~The company's donation was intended to assuage local anger.
audacious|It was an audacious plan, and no one expected it to work.~The audacious theft took place in broad daylight.~Her audacious proposal to close the plant startled the board.
austere|The monastery was austere, with bare walls and plain wooden benches.~He led an austere life, spending almost nothing on himself.~The government imposed austere measures to control inflation.
banal|The film's dialogue is banal, though the photography is striking.~What began as an original idea has become banal through repetition.~She dismissed the speech as a string of banal reassurances.
belie|His calm expression belied the panic he felt.~The building's plain exterior belies the opulence within.~Recent findings belie the assumption that the species is extinct.
benign|The tumor proved benign, and she was discharged that week.~He has a benign manner that puts nervous clients at ease.~The regulation seems benign but has surprisingly costly consequences.
bolster|New evidence bolstered the prosecution's case considerably.~The bank cut rates to bolster consumer spending.~She cited three studies to bolster her argument.
bucolic|The painting presents a bucolic scene of shepherds and grazing sheep.~They left the city for a bucolic village in the hills.~His poetry idealizes a bucolic life he never actually lived.
burgeon|The town's population burgeoned after the factory opened.~Interest in the composer has burgeoned since the recording was released.~A burgeoning middle class transformed the local economy.
capricious|The weather here is capricious, sunny one hour and freezing the next.~Employees complained about the manager's capricious scheduling.~The court found the agency's decision arbitrary and capricious.
castigate|The editor castigated the reporter for failing to verify the quote.~Critics castigated the government for its slow response.~He castigated himself for missing the deadline.
caustic|Her caustic remarks about the proposal ended the discussion.~The columnist is famous for caustic profiles of politicians.~He responded with a caustic laugh rather than an answer.
circumspect|Investors were circumspect after the previous year's losses.~She was circumspect in her answers, revealing nothing useful.~A circumspect diplomat avoids commitments he cannot keep.
cogent|She made a cogent argument for delaying the launch.~The report offers the most cogent explanation yet advanced.~His objections were cogent enough to change several votes.
conciliatory|He struck a conciliatory tone in his opening remarks.~The conciliatory gesture was accepted, and talks resumed.~Her conciliatory letter did not satisfy the plaintiffs.
condone|The university does not condone plagiarism in any form.~She could not condone his methods, however good his intentions.~Silence from management was read as condoning the practice.
conspicuous|His absence at the ceremony was conspicuous.~The building is conspicuous for its bright copper roof.~She made a conspicuous effort to avoid the subject.
contentious|Zoning has been the most contentious issue at every meeting.~He is a contentious colleague who disputes nearly every point.~The contentious clause was struck from the final draft.
conundrum|The scheduling conundrum took the committee three sessions to resolve.~How to fund the repairs without raising rents remains a conundrum.~She posed the conundrum to her students as an exercise.
copious|He took copious notes throughout the trial.~Copious rainfall in April saved the harvest.~The book includes copious footnotes and a long bibliography.
corroborate|Two witnesses corroborated her account of the evening.~Later excavations corroborated the historian's theory.~No document has been found to corroborate the claim.
craven|The board's craven retreat disappointed its supporters.~He was accused of a craven refusal to testify.~Critics called the settlement a craven capitulation.
credulous|The scheme preyed on credulous investors.~She is too credulous to be a good editor.~A credulous public accepted the story without question.
cursory|A cursory glance at the accounts revealed the discrepancy.~The inspection was cursory and missed the cracked beam.~He gave the manuscript only a cursory reading.
dearth|There is a dearth of evidence for the earliest period.~A dearth of qualified applicants delayed the hiring.~The region suffers from a dearth of clean water.
debunk|The study debunked the myth that the drug prevents colds.~Historians have debunked the legend several times over.~She set out to debunk the company's efficiency claims.
deference|Out of deference to her seniority, he let her speak first.~The court showed unusual deference to the agency's findings.~Deference to tradition should not prevent necessary reform.
deleterious|Prolonged drought had a deleterious effect on the soil.~The additive was banned after deleterious effects were documented.~Constant interruption is deleterious to careful work.
denigrate|He denigrated his predecessor's achievements at every opportunity.~The article denigrates the movement without examining its arguments.~She refused to denigrate a colleague to advance her own case.
didactic|The novel is too didactic to be enjoyable as a story.~His didactic tone irritated the very readers he hoped to persuade.~Medieval plays often served an openly didactic purpose.
diffident|He was diffident about presenting his results to the group.~Her diffident manner concealed considerable expertise.~A diffident student rarely gets the attention she deserves.
disparage|She never disparaged the work of rival laboratories.~Reviewers disparaged the sequel as an obvious cash grab.~It is easy to disparage a plan without offering an alternative.
disparate|The report draws on disparate sources, from court records to diaries.~Two disparate traditions converge in his architecture.~The committee had to reconcile disparate accounts of the incident.
dissemble|He dissembled when asked about his role in the merger.~She had no talent for dissembling, and her face gave her away.~Witnesses who dissemble risk perjury charges.
ebullient|She returned from the interview ebullient and certain of the job.~The ebullient crowd spilled into the streets after the result.~His ebullient style suits radio better than print.
eclectic|Her reading is eclectic, ranging from physics to medieval poetry.~The museum's eclectic collection resists easy summary.~He assembled an eclectic group of advisers.
egregious|The report identified several egregious accounting errors.~It was an egregious breach of protocol.~Even his supporters called the remark egregious.
elicit|The question elicited only a shrug.~Researchers tried to elicit more detailed responses from the subjects.~Her performance elicited a standing ovation.
enervate|The humid heat enervated the entire crew by midday.~Months of litigation had enervated the small firm.~He found the endless meetings enervating.
enigma|The composer's final years remain an enigma to biographers.~He was an enigma even to his closest colleagues.~The inscription is an enigma that has resisted translation.
ephemeral|Internet fame is notoriously ephemeral.~The blossoms are ephemeral, lasting barely a week.~She writes about the ephemeral pleasures of city life.
equanimity|She received the news with remarkable equanimity.~He faced the cross-examination with equanimity.~Years of practice had given him equanimity under pressure.
equivocate|The spokesman equivocated when pressed about the layoffs.~She refused to equivocate about the risks.~Politicians equivocate; scientists are expected not to.
erudite|His erudite footnotes are longer than the chapters they support.~She gave an erudite lecture on medieval trade routes.~The book is erudite without being unreadable.
eschew|The author eschews jargon in favor of plain English.~He eschewed publicity throughout his career.~The community eschews modern technology on principle.
exacerbate|The new tariffs exacerbated an already fragile situation.~Scratching will only exacerbate the irritation.~His apology exacerbated the offense rather than repairing it.
exculpate|The video evidence exculpated the defendant.~Nothing in the record exculpates the company.~He tried to exculpate himself by blaming his subordinates.
extol|Reviewers extolled the novel's structure and restraint.~The minister extolled the virtues of the new curriculum.~She extolled her mentor at every opportunity.
facetious|His facetious answer annoyed the interviewer.~She was being facetious, though no one laughed.~A facetious remark at a funeral rarely lands well.
fastidious|He is fastidious about citations, checking each one twice.~Her fastidious editing improved every page.~A fastidious cook, she measured everything precisely.
feasible|The plan is feasible but expensive.~Engineers concluded that a tunnel was not feasible here.~It is feasible to finish by June if we start now.
fervent|She is a fervent supporter of public libraries.~His fervent belief in the project never wavered.~They made a fervent appeal for donations.
flout|Drivers routinely flout the speed limit on this road.~The company flouted safety regulations for years.~He flouted convention by wearing sneakers to the ceremony.
frugal|Her frugal habits allowed her to retire early.~They ate a frugal meal of bread and soup.~The department is frugal by necessity, not by choice.
garrulous|The garrulous host left no room for anyone else to speak.~He became garrulous after the second cup of coffee.~Her garrulous letters run to twenty pages.
gregarious|She is gregarious and thrives at conferences.~Elephants are highly gregarious animals.~His gregarious nature made him a natural salesman.
hackneyed|The speech relied on hackneyed metaphors about journeys.~Even a hackneyed plot can work if the acting is good.~She avoided hackneyed phrases in her editorials.
harbinger|The first frost is a harbinger of a hard winter.~Falling orders were a harbinger of the downturn.~Critics saw the merger as a harbinger of consolidation.
iconoclast|He built a career as an iconoclast challenging economic orthodoxy.~The architect was an iconoclast who despised ornament.~Every field needs an iconoclast or two.
impartial|An impartial observer would have reached the same conclusion.~The referee must remain impartial throughout.~She was chosen for her impartial reputation.
impetuous|His impetuous decision to resign surprised everyone.~She was impetuous as a young woman and regretted much of it.~An impetuous investment cost the fund millions.
implacable|He faced implacable opposition from the finance committee.~Her implacable hostility outlasted the original quarrel.~The disease advanced with implacable slowness.
inadvertent|The omission was inadvertent, not deliberate.~An inadvertent keystroke deleted the file.~She apologized for the inadvertent offense.
inchoate|The plan was still inchoate when funding was withdrawn.~He had only an inchoate sense of what he wanted to say.~The movement was inchoate, lacking leaders or a program.
incisive|Her incisive questions exposed the flaw in the model.~The essay offers an incisive critique of the policy.~He is an incisive editor who cuts without mercy.
indolent|Critics described the prince as indolent and easily bored.~They spent an indolent afternoon by the river.~He was not indolent so much as unmotivated by the task.
inexorable|The inexorable rise in costs forced the closure.~Aging is inexorable, whatever the advertisements claim.~She traced the inexorable logic of the argument.
ingenuous|His ingenuous questions charmed the audience.~She gave an ingenuous account of her own mistakes.~Too ingenuous for politics, he left after one term.
innocuous|The remark seemed innocuous until we learned the context.~The substance is innocuous in small quantities.~An innocuous question can reveal a great deal.
inscrutable|His expression remained inscrutable throughout the verdict.~The bank's pricing rules are inscrutable to customers.~She found the poem beautiful but inscrutable.
insipid|The soup was insipid and needed salt.~He dismissed the novel as insipid and forgettable.~Her insipid replies suggested boredom.
intractable|Homelessness remains an intractable problem in the city.~The dispute proved intractable despite three mediators.~He was intractable on the question of price.
intransigent|Both sides remained intransigent, and talks collapsed.~Her intransigent stance cost her several allies.~The union was intransigent about the pension clause.
inundate|The office was inundated with complaints after the announcement.~Heavy rain inundated the lower fields.~She was inundated with applications for the single position.
irascible|The irascible professor was feared by first-year students.~He grew irascible in his later years.~Her irascible temper made collaboration difficult.`;
const S2 = `laconic|His laconic reply was simply that the matter was closed.~She is laconic in meetings and eloquent on paper.~The report is laconic where detail was expected.
laud|Critics lauded the production for its restraint.~He was lauded as a pioneer in the field.~The mayor lauded the volunteers at the ceremony.
lucid|Her lucid explanation made the theory seem obvious.~The patient had a lucid interval in the afternoon.~He writes lucid prose about complicated mathematics.
magnanimous|In victory he was magnanimous, praising his opponent at length.~Her magnanimous gesture surprised everyone in the room.~It was magnanimous of him to forgive the debt.
malleable|Gold is malleable enough to be beaten into very thin sheets.~Young recruits are more malleable than veterans.~Public opinion proved malleable once the facts emerged.
mercurial|His mercurial moods made him difficult to work with.~The market has been mercurial all quarter.~She was known for a mercurial temperament and brilliant results.
meticulous|His meticulous records made the audit straightforward.~She is meticulous about safety procedures.~The restoration required meticulous attention to detail.
mitigate|Planting trees can mitigate the effects of urban heat.~Nothing can mitigate the damage already done.~The court considered several mitigating circumstances.
mollify|A public apology mollified the angry residents.~She tried to mollify her mother with flowers.~Nothing said at the meeting mollified the protesters.
munificent|A munificent donation funded the entire new wing.~He was munificent with his time as well as his money.~The prize is munificent by academic standards.
myopic|Cutting research funding is a myopic economy.~The strategy was criticized as myopic and short-term.~His myopic focus on quarterly results damaged the company.
nascent|The nascent industry needed protection to survive.~She joined the nascent movement in its first year.~Nascent democracies are especially fragile.
obdurate|He remained obdurate despite hours of argument.~The landlord was obdurate about the rent increase.~Her obdurate refusal ended the negotiation.
obsequious|The obsequious waiter hovered throughout the meal.~His obsequious emails to management embarrassed everyone.~She disliked the obsequious tone of the letter.
obviate|The new software obviates the need for manual entry.~Careful planning obviated most of the risk.~His resignation obviated the need for a hearing.
opaque|The regulations are opaque even to lawyers.~She gave an opaque answer that clarified nothing.~The glass is opaque, so the room stays dark all day.
ostentatious|The ostentatious display of wealth offended the guests.~He drives an ostentatious car he can barely afford.~Her ostentatious modesty fooled no one.
paradox|It is a paradox that the wealthiest district has the worst schools.~The paradox has puzzled logicians for centuries.~She noted the paradox without attempting to resolve it.
partisan|The report was criticized as partisan and selective.~Partisan divisions blocked every proposed compromise.~He is too partisan to serve as a neutral chair.
paucity|A paucity of data makes firm conclusions impossible.~The paucity of witnesses weakened the case.~There is a paucity of affordable housing near the campus.
pedantic|His pedantic corrections slowed every discussion.~The review was pedantic about commas and silent about substance.~She avoided a pedantic tone in her textbook.
penchant|He has a penchant for understatement.~Her penchant for risky investments eventually caught up with her.~The director's penchant for long takes divides audiences.
perfunctory|He gave a perfunctory nod and kept walking.~The inspection was perfunctory and missed the leak.~Her perfunctory apology satisfied no one.
pernicious|The rumor had a pernicious effect on morale.~Lead exposure is pernicious even at low levels.~He warned against the pernicious influence of flattery.
placate|The company offered refunds to placate its customers.~Nothing he said could placate the crowd.~She placated the child with a story.
plausible|The explanation is plausible but unproven.~He offered a plausible reason for the delay.~No plausible alternative has yet been suggested.
precipitate|The arrest precipitated three days of protest.~A minor dispute precipitated the collapse of the coalition.~The announcement precipitated a sharp fall in the share price.
prodigal|His prodigal spending exhausted the inheritance in two years.~The kingdom was ruined by a prodigal court.~She was prodigal with praise and stingy with detail.
prodigious|He has a prodigious memory for names.~The book required prodigious research.~She showed prodigious talent at the age of six.
profligate|The report criticized the agency's profligate use of consultants.~His profligate lifestyle left him bankrupt within a decade.~Profligate water use worsened the shortage.
prolific|She was a prolific author, publishing more than forty novels.~The region is prolific in olive production.~He is prolific but uneven.
propitious|Conditions were propitious for an early harvest.~It was not a propitious moment to ask for a raise.~The forecast looked propitious for the launch.
prosaic|The explanation turned out to be entirely prosaic.~His prosaic style suits technical writing.~She found the job prosaic after the excitement of fieldwork.
prudent|It would be prudent to keep three months of expenses saved.~A prudent investor diversifies.~She made the prudent choice and declined.
pundit|Television pundits predicted a landslide that never came.~The pundit's forecast was wrong for the third year running.~He became a pundit after leaving the ministry.
quixotic|His quixotic campaign to rebuild the theater raised only a fraction of the cost.~The plan was quixotic but oddly admirable.~She had a quixotic faith in the goodness of strangers.
recalcitrant|A recalcitrant witness delayed the trial for a week.~The recalcitrant engine refused to start in the cold.~He was recalcitrant about signing the agreement.
recant|Under pressure, the scientist recanted his earlier findings.~She refused to recant despite the threats.~He recanted the accusation in open court.
repudiate|The party repudiated the remarks of its former chairman.~She repudiated the agreement within a month.~He repudiated the theory he had spent years defending.
reticent|She was reticent about her role in the negotiations.~Witnesses were reticent, fearing retaliation.~He is reticent by nature and rarely volunteers an opinion.
sagacious|His sagacious advice saved the firm considerable money.~A sagacious editor knows when to leave a sentence alone.~She made a sagacious choice in hiring him.
sanguine|He remains sanguine about the company's prospects.~Economists are less sanguine than the government.~She was sanguine even after the second rejection.
specious|The argument is specious and collapses under examination.~He offered a specious justification for the delay.~Specious reasoning of this kind is common in advertising.
sporadic|Sporadic gunfire continued through the night.~Attendance has been sporadic since the schedule changed.~He made sporadic attempts to learn the language.
spurious|The document turned out to be spurious.~The correlation is spurious and disappears with better controls.~She dismissed the claim as spurious.
squander|He squandered a substantial lead in the final week.~The company squandered its early advantage.~She refused to squander the opportunity.
stoic|He was stoic about the diagnosis.~Her stoic silence impressed the nurses.~They were stoic in the face of repeated setbacks.
substantiate|No evidence was produced to substantiate the allegation.~She substantiated her claim with three independent studies.~The findings substantiate what fieldworkers had long suspected.
superfluous|The final chapter is superfluous and could be cut.~Superfluous regulation raises costs without improving safety.~His explanation was superfluous; we had all read the memo.
tacit|There was a tacit agreement not to discuss the matter.~Her silence was taken as tacit approval.~The arrangement rested on tacit understanding rather than contract.
taciturn|Her taciturn father rarely spoke at dinner.~He is taciturn with strangers and voluble with friends.~The taciturn guide answered in single syllables.
tenuous|The connection between the two events is tenuous.~She holds a tenuous lead going into the final round.~His grasp of the subject is tenuous at best.
trenchant|Her trenchant analysis reframed the entire debate.~He wrote a trenchant critique of the reforms.~The most trenchant objection came from an undergraduate.
ubiquitous|Smartphones are now ubiquitous in classrooms.~The chain has become ubiquitous across the region.~Plastic waste is ubiquitous, even in remote areas.
undermine|Repeated leaks undermined confidence in the leadership.~The findings undermine the study's central claim.~He undermined his own case with an unnecessary exaggeration.
vacillate|She vacillated for weeks before accepting the offer.~The committee vacillated between two equally costly plans.~He vacillates whenever a decision carries real risk.
venerate|The poet is venerated in his home country.~Students venerated the old professor.~The site has been venerated for a thousand years.
veracity|The court questioned the veracity of his testimony.~Journalists must check the veracity of every claim.~Her veracity had never before been in doubt.
vindicate|Later evidence vindicated the engineer who raised the alarm.~The verdict vindicated her decision to sue.~He was vindicated after a decade of suspicion.
vitriolic|The exchange grew vitriolic and had to be moderated.~She published a vitriolic response to the review.~His vitriolic tone lost him sympathetic readers.
volatile|Currency markets have been volatile all month.~The situation is volatile and could change overnight.~He has a volatile temper that surfaces without warning.
zealot|The movement was led by zealots who tolerated no dissent.~He is a zealot for grammatical precision.~Zealots on both sides blocked the compromise.`;

/* ---------- parsing ---------- */

function parseWords(raw) {
  return raw.trim().split("\n").map((line) => {
    const [w, pos, def] = line.split("|");
    return { w, pos, def };
  });
}

function parseSentences(raw) {
  const map = {};
  raw.trim().split("\n").forEach((line) => {
    const [w, rest] = line.split("|");
    map[w] = rest.split("~");
  });
  return map;
}

const WORDS = [D1, D2, D3, D4, D5, D6, D7, D8, D9]
  .flatMap(parseWords)
  .sort((a, b) => a.w.localeCompare(b.w));

const CURATED = Object.assign({}, parseSentences(S1), parseSentences(S2));

const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

const BY_LETTER = LETTERS.reduce((acc, L) => {
  acc[L] = WORDS.filter((x) => x.w[0] === L);
  return acc;
}, {});

const POS_LABEL = { v: "verb", n: "noun", adj: "adj.", adv: "adv." };

const CSS = `
.lx { --ink:#0F2A28; --paper:#EDF0EE; --card:#FFFFFF; --teal:#14625B;
      --brass:#A87C24; --rose:#8C3B52; --muted:#5E7370; --line:#D2DAD7;
      background:var(--paper); color:var(--ink); min-height:100%;
      font-family:'IBM Plex Sans',ui-sans-serif,system-ui,sans-serif;
      -webkit-font-smoothing:antialiased; }
.lx *,.lx *::before,.lx *::after { box-sizing:border-box; }
.lx button { font-family:inherit; cursor:pointer; border:none; background:none; color:inherit; }
.lx :focus-visible { outline:2px solid var(--teal); outline-offset:2px; border-radius:2px; }
.lx-mono { font-family:'IBM Plex Mono',ui-monospace,monospace; }
.lx-serif { font-family:'Literata',Georgia,serif; }

.lx-wrap { max-width:1180px; margin:0 auto; padding:0 20px 96px; }

/* header */
.lx-eyebrow { font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:.18em;
  text-transform:uppercase; color:var(--muted); }
.lx-title { font-family:'Literata',Georgia,serif; font-weight:600; letter-spacing:-.02em;
  font-size:clamp(34px,6vw,58px); line-height:1.02; margin:14px 0 0; }
.lx-title em { font-style:italic; color:var(--teal); }
.lx-sub { max-width:52ch; margin:14px 0 0; color:var(--muted); font-size:15px; line-height:1.6; }

/* the spine — signature element */
.lx-spine { display:flex; gap:3px; margin:34px 0 0; overflow-x:auto; padding-bottom:10px;
  scrollbar-width:thin; }
.lx-key { flex:1 0 auto; min-width:31px; padding:9px 0 0; border-radius:3px;
  transition:background .15s ease; }
.lx-key:hover { background:#E2E7E4; }
.lx-key[data-on="1"] { background:var(--ink); }
.lx-key[data-on="1"] .lx-keych { color:#F2F5F3; }
.lx-key[data-on="1"] .lx-keyct { color:#8FA8A3; }
.lx-keych { font-family:'Literata',Georgia,serif; font-size:15px; display:block;
  text-align:center; text-transform:uppercase; }
.lx-keyct { font-family:'IBM Plex Mono',monospace; font-size:9px; display:block;
  text-align:center; color:var(--muted); margin-top:1px; }
.lx-bar { height:3px; margin:6px 4px 5px; background:var(--line); border-radius:2px; overflow:hidden; }
.lx-fill { height:100%; background:var(--brass); transition:width .3s ease; }

/* toolbar */
.lx-tools { display:flex; flex-wrap:wrap; gap:10px; align-items:center;
  margin:20px 0 0; padding-top:18px; border-top:1px solid var(--line); }
.lx-search { flex:1 1 240px; display:flex; align-items:center; gap:9px;
  background:var(--card); border:1px solid var(--line); border-radius:4px; padding:9px 13px; }
.lx-search input { border:none; outline:none; background:none; width:100%; font-size:15px;
  color:var(--ink); font-family:inherit; }
.lx-search input::placeholder { color:#9AAAA6; }
.lx-chip { font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:.08em;
  text-transform:uppercase; padding:8px 12px; border:1px solid var(--line);
  border-radius:4px; background:var(--card); color:var(--muted); }
.lx-chip[data-on="1"] { background:var(--ink); color:#F2F5F3; border-color:var(--ink); }

/* layout */
.lx-cols { display:grid; grid-template-columns:1fr; gap:26px; margin-top:26px; }
@media (min-width:900px){ .lx-cols { grid-template-columns:1fr 400px; gap:34px; } }

.lx-sectionhead { display:flex; align-items:baseline; gap:12px; margin:0 0 14px; }
.lx-sectionhead h2 { font-family:'Literata',Georgia,serif; font-size:20px; font-weight:600;
  margin:0; text-transform:capitalize; }

.lx-grid { display:flex; flex-wrap:wrap; gap:7px; }
.lx-word { font-family:'Literata',Georgia,serif; font-size:16px; padding:7px 13px;
  background:var(--card); border:1px solid var(--line); border-radius:4px;
  transition:border-color .12s ease, transform .12s ease; }
.lx-word:hover { border-color:var(--teal); transform:translateY(-1px); }
.lx-word[data-m="learning"] { box-shadow:inset 3px 0 0 var(--rose); }
.lx-word[data-m="known"] { box-shadow:inset 3px 0 0 var(--brass); color:var(--muted); }
.lx-word[data-sel="1"] { background:var(--ink); color:#F2F5F3; border-color:var(--ink); }

/* entry panel */
.lx-panel { background:var(--card); border:1px solid var(--line); border-radius:5px;
  padding:24px; }
@media (min-width:900px){ .lx-panel { position:sticky; top:20px; max-height:calc(100vh - 40px);
  overflow-y:auto; } }
.lx-head { font-family:'Literata',Georgia,serif; font-size:34px; font-weight:600;
  letter-spacing:-.01em; margin:0; line-height:1.1; }
.lx-pos { font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:.1em;
  text-transform:uppercase; color:var(--teal); margin:8px 0 0; }
.lx-def { font-family:'Literata',Georgia,serif; font-size:17px; line-height:1.55; margin:14px 0 0; }
.lx-rule { display:flex; align-items:center; gap:10px; margin:24px 0 14px; }
.lx-rule span { font-family:'IBM Plex Mono',monospace; font-size:10px; letter-spacing:.16em;
  text-transform:uppercase; color:var(--muted); white-space:nowrap; }
.lx-rule::after { content:""; flex:1; height:1px; background:var(--line); }
.lx-ex { font-family:'Literata',Georgia,serif; font-size:15.5px; line-height:1.62;
  padding-left:14px; border-left:2px solid var(--teal); margin:0 0 13px; }
.lx-ex b { font-weight:600; font-style:italic; }
.lx-actions { display:flex; gap:8px; margin-top:22px; padding-top:18px; border-top:1px solid var(--line); }
.lx-act { flex:1; font-family:'IBM Plex Mono',monospace; font-size:11px; letter-spacing:.08em;
  text-transform:uppercase; padding:10px 6px; border:1px solid var(--line);
  border-radius:4px; color:var(--muted); }
.lx-act[data-on="learning"] { background:var(--rose); border-color:var(--rose); color:#fff; }
.lx-act[data-on="known"] { background:var(--brass); border-color:var(--brass); color:#fff; }
.lx-empty { color:var(--muted); font-size:14px; line-height:1.6; }
.lx-note { font-family:'IBM Plex Mono',monospace; font-size:10px; color:var(--muted);
  letter-spacing:.05em; margin-top:16px; }
.lx-retry { font-family:'IBM Plex Mono',monospace; font-size:11px; color:var(--teal);
  text-decoration:underline; text-underline-offset:3px; }

.lx-dots::after { content:"..."; animation:lxd 1.2s steps(4,end) infinite; }
@keyframes lxd { 0%{content:""} 25%{content:"."} 50%{content:".."} 75%{content:"..."} }
@media (prefers-reduced-motion:reduce){ .lx *{transition:none!important;animation:none!important} }
`;

/* ---------- sentence generation ---------- */

async function generateSentences(entry) {
  const prompt =
    'Write exactly three example sentences for the English word "' + entry.w +
    '" (' + (POS_LABEL[entry.pos] || entry.pos) + ', meaning: ' + entry.def + ').\n\n' +
    "Requirements:\n" +
    "- Formal, academic register, like the prose in GRE reading passages.\n" +
    "- Each sentence stands alone and makes the meaning inferable from context.\n" +
    "- 8 to 20 words each. Vary the grammatical form across the three.\n" +
    "- Use the word (or a natural inflection of it) exactly once per sentence.\n\n" +
    'Respond with ONLY a JSON array of three strings. No markdown, no preamble.';

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [{ role: "user", content: prompt }],
    }),
  });
  if (!res.ok) throw new Error("request failed");
  const data = await res.json();
  const text = data.content
    .filter((b) => b.type === "text")
    .map((b) => b.text)
    .join("\n")
    .replace(/```json|```/g, "")
    .trim();
  const parsed = JSON.parse(text);
  if (!Array.isArray(parsed) || parsed.length < 3) throw new Error("bad shape");
  return parsed.slice(0, 3).map(String);
}

/* ---------- highlighting ---------- */

function Highlight({ sentence, word }) {
  const stem = word.length > 5 ? word.slice(0, word.length - 2) : word;
  const parts = sentence.split(new RegExp("\\b(" + stem + "[a-z]*)", "i"));
  return (
    <p className="lx-ex">
      {parts.map((p, i) => (i % 2 === 1 ? <b key={i}>{p}</b> : <span key={i}>{p}</span>))}
    </p>
  );
}

/* storage may be unavailable; never let that break the page */
const store = {
  get(k) {
    if (!window.storage) return Promise.reject(new Error("unavailable"));
    return window.storage.get(k);
  },
  set(k, v) {
    try {
      if (window.storage) return window.storage.set(k, v).catch(() => {});
    } catch (e) { /* ignore */ }
    return Promise.resolve();
  },
};

/* ---------- app ---------- */

export default function GreLexicon() {
  const [letter, setLetter] = useState("a");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(WORDS.find((x) => x.w === "abate") || WORDS[0]);
  const [mastery, setMastery] = useState({});
  const [generated, setGenerated] = useState({});
  const [status, setStatus] = useState("idle");
  const [ready, setReady] = useState(false);
  const inFlight = useRef(null);

  /* load saved progress */
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await store.get("gre-mastery");
        if (alive && r && r.value) setMastery(JSON.parse(r.value));
      } catch (e) {
        /* nothing saved yet — start clean */
      }
      if (alive) setReady(true);
    })();
    return () => { alive = false; };
  }, []);

  const saveMastery = useCallback((next) => {
    setMastery(next);
    store.set("gre-mastery", JSON.stringify(next));
  }, []);

  const setMark = (word, mark) => {
    const next = { ...mastery };
    if (next[word] === mark) delete next[word];
    else next[word] = mark;
    saveMastery(next);
  };

  /* fetch or recall sentences for the selected word */
  useEffect(() => {
    if (!selected || CURATED[selected.w] || generated[selected.w]) return;
    const word = selected.w;
    inFlight.current = word;
    setStatus("loading");
    (async () => {
      try {
        const cached = await store.get("gre-ex:" + word);
        if (cached && cached.value) {
          const arr = JSON.parse(cached.value);
          if (inFlight.current === word) {
            setGenerated((g) => ({ ...g, [word]: arr }));
            setStatus("idle");
          }
          return;
        }
      } catch (e) {
        /* not cached — generate below */
      }
      try {
        const arr = await generateSentences(selected);
        store.set("gre-ex:" + word, JSON.stringify(arr));
        if (inFlight.current === word) {
          setGenerated((g) => ({ ...g, [word]: arr }));
          setStatus("idle");
        }
      } catch (e) {
        if (inFlight.current === word) setStatus("error");
      }
    })();
  }, [selected, generated]);

  const counts = useMemo(() => {
    let known = 0, learning = 0;
    Object.values(mastery).forEach((v) => {
      if (v === "known") known++;
      else if (v === "learning") learning++;
    });
    return { known, learning };
  }, [mastery]);

  const letterProgress = useMemo(() => {
    const out = {};
    LETTERS.forEach((L) => {
      const list = BY_LETTER[L];
      const done = list.filter((x) => mastery[x.w] === "known").length;
      out[L] = { total: list.length, done, pct: list.length ? (done / list.length) * 100 : 0 };
    });
    return out;
  }, [mastery]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = q
      ? WORDS.filter((x) => x.w.includes(q) || x.def.toLowerCase().includes(q)).slice(0, 240)
      : BY_LETTER[letter];
    if (filter === "new") list = list.filter((x) => !mastery[x.w]);
    else if (filter !== "all") list = list.filter((x) => mastery[x.w] === filter);
    return list;
  }, [query, letter, filter, mastery]);

  const examples = selected
    ? CURATED[selected.w] || generated[selected.w] || null
    : null;
  const source = selected && CURATED[selected.w] ? "curated" : "generated";

  const pickRandom = () => {
    const pool = WORDS.filter((x) => mastery[x.w] !== "known");
    const next = pool[Math.floor(Math.random() * pool.length)] || WORDS[0];
    setSelected(next);
    setQuery("");
    setLetter(next.w[0]);
  };

  return (
    <div className="lx">
      <style>{"@import url('https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,400;0,600;1,400;1,600&family=IBM+Plex+Sans:wght@400;500&family=IBM+Plex+Mono:wght@400;500&display=swap');" + CSS}</style>

      <div className="lx-wrap">
        <header style={{ paddingTop: 44 }}>
          <div className="lx-eyebrow">GRE verbal reasoning · working lexicon</div>
          <h1 className="lx-title">
            {WORDS.length.toLocaleString()} words<br />worth <em>knowing cold</em>
          </h1>
          <p className="lx-sub">
            The high-frequency vocabulary that recurs in GRE text completion, sentence
            equivalence, and reading comprehension. Tap any word for its definition and
            three sentences showing how it actually behaves in academic prose.
          </p>

          {/* signature: the alphabet spine — fills with brass as you mark words known */}
          <nav className="lx-spine" aria-label="Browse by letter">
            {LETTERS.map((L) => (
              <button
                key={L}
                className="lx-key"
                data-on={!query && letter === L ? "1" : "0"}
                onClick={() => { setLetter(L); setQuery(""); }}
                aria-label={L.toUpperCase() + ", " + letterProgress[L].total + " words"}
              >
                <span className="lx-keych">{L}</span>
                <span className="lx-keyct">{letterProgress[L].total}</span>
                <span className="lx-bar">
                  <span className="lx-fill" style={{ width: letterProgress[L].pct + "%" }} />
                </span>
              </button>
            ))}
          </nav>

          <div className="lx-tools">
            <label className="lx-search">
              <span className="lx-mono" style={{ fontSize: 12, color: "#9AAAA6" }}>find</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="a word, or a meaning — try “stubborn”"
                aria-label="Search words and definitions"
              />
            </label>
            {[["all", "all"], ["new", "unmarked"], ["learning", "learning"], ["known", "known"]].map(
              ([key, label]) => (
                <button
                  key={key}
                  className="lx-chip"
                  data-on={filter === key ? "1" : "0"}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </button>
              )
            )}
            <button className="lx-chip" onClick={pickRandom}>random</button>
          </div>
        </header>

        <div className="lx-cols">
          <main>
            <div className="lx-sectionhead">
              <h2 className="lx-serif">
                {query ? "Search" : letter.toUpperCase()}
              </h2>
              <span className="lx-mono" style={{ fontSize: 11, color: "#5E7370", letterSpacing: ".08em" }}>
                {visible.length} shown · {counts.known} known · {counts.learning} learning
              </span>
            </div>

            {visible.length === 0 ? (
              <p className="lx-empty">
                Nothing here yet. Clear the filter, or search a different term.
              </p>
            ) : (
              <div className="lx-grid">
                {visible.map((x) => (
                  <button
                    key={x.w}
                    className="lx-word"
                    data-m={mastery[x.w] || ""}
                    data-sel={selected && selected.w === x.w ? "1" : "0"}
                    onClick={() => setSelected(x)}
                  >
                    {x.w}
                  </button>
                ))}
              </div>
            )}
          </main>

          <aside>
            <article className="lx-panel">
              {!selected ? (
                <p className="lx-empty">Pick a word to open its entry.</p>
              ) : (
                <>
                  <h3 className="lx-head">{selected.w}</h3>
                  <div className="lx-pos">{POS_LABEL[selected.pos] || selected.pos}</div>
                  <p className="lx-def">{selected.def}</p>

                  <div className="lx-rule"><span>in a sentence</span></div>

                  {examples ? (
                    examples.map((s, i) => (
                      <Highlight key={i} sentence={s} word={selected.w} />
                    ))
                  ) : status === "error" ? (
                    <p className="lx-empty">
                      Couldn't load examples for this word.{" "}
                      <button
                        className="lx-retry"
                        onClick={() => { setStatus("idle"); setSelected({ ...selected }); }}
                      >
                        Try again
                      </button>
                    </p>
                  ) : (
                    <p className="lx-empty lx-mono" style={{ fontSize: 12 }}>
                      <span className="lx-dots">Writing three examples</span>
                    </p>
                  )}

                  <div className="lx-actions">
                    <button
                      className="lx-act"
                      data-on={mastery[selected.w] === "learning" ? "learning" : ""}
                      onClick={() => setMark(selected.w, "learning")}
                    >
                      still learning
                    </button>
                    <button
                      className="lx-act"
                      data-on={mastery[selected.w] === "known" ? "known" : ""}
                      onClick={() => setMark(selected.w, "known")}
                    >
                      know it
                    </button>
                  </div>

                  {examples && (
                    <div className="lx-note">
                      {source === "curated"
                        ? "examples written and checked by hand"
                        : "examples written on demand, then saved for next time"}
                    </div>
                  )}
                  {!ready && <div className="lx-note">restoring your progress…</div>}
                </>
              )}
            </article>
          </aside>
        </div>
      </div>
    </div>
  );
}

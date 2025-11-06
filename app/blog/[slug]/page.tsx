import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'

const blogContent: Record<string, any> = {
  'complete-guide-lawn-care-kenya': {
    title: 'The Complete Guide to Lawn Care in Kenya',
    date: 'November 6, 2024',
    author: 'GreenThumb KE Team',
    readTime: '8 min read',
    category: 'Lawn Care',
    content: `
      <h2>Understanding Kenya's Climate for Lawn Care</h2>
      <p>Kenya's diverse climate zones present unique challenges and opportunities for lawn maintenance. From the coastal regions to the highlands, understanding your local climate is crucial for a thriving lawn.</p>

      <h3>Choosing the Right Grass Type</h3>
      <p><strong>Kikuyu Grass:</strong> The most popular choice in Kenya, Kikuyu grass is drought-resistant, fast-growing, and forms a dense, lush carpet. It thrives in Kenya's highland regions and requires regular mowing.</p>
      
      <p><strong>Paspalum:</strong> Ideal for coastal areas, Paspalum tolerates salt and grows well in warm, humid conditions. It's perfect for properties near the ocean.</p>
      
      <p><strong>Buffalo Grass:</strong> A low-maintenance option that requires less water and mowing. Excellent for busy homeowners who want a green lawn with minimal effort.</p>

      <h3>Watering Schedule for Kenyan Lawns</h3>
      <p>Proper watering is essential for lawn health in Kenya's climate:</p>
      <ul>
        <li><strong>Dry Season (January-March, July-October):</strong> Water deeply 2-3 times per week, preferably early morning or late evening</li>
        <li><strong>Rainy Season (April-June, November-December):</strong> Reduce watering frequency, monitor for waterlogging</li>
        <li><strong>Water deeply:</strong> 1-1.5 inches per week encourages deep root growth</li>
        <li><strong>Avoid shallow watering:</strong> Frequent shallow watering creates weak, shallow roots</li>
      </ul>

      <h3>Mowing Best Practices</h3>
      <p>Regular mowing keeps your lawn healthy and attractive:</p>
      <ul>
        <li>Mow when grass is dry to prevent disease</li>
        <li>Keep Kikuyu grass at 2-3 inches height</li>
        <li>Never remove more than one-third of grass height at once</li>
        <li>Sharpen mower blades regularly for clean cuts</li>
        <li>Alternate mowing patterns to prevent soil compaction</li>
      </ul>

      <h3>Fertilization Schedule</h3>
      <p>Kenyan lawns benefit from regular fertilization:</p>
      <ul>
        <li><strong>March-April:</strong> Apply nitrogen-rich fertilizer before rainy season</li>
        <li><strong>September-October:</strong> Second application for sustained growth</li>
        <li><strong>NPK Ratio:</strong> Use 20-10-10 for general maintenance</li>
        <li><strong>Organic options:</strong> Compost and manure work excellently</li>
      </ul>

      <h3>Common Lawn Problems in Kenya</h3>
      <p><strong>Chinch Bugs:</strong> Small insects that cause yellowing patches. Treat with insecticidal soap or neem oil.</p>
      
      <p><strong>Fungal Diseases:</strong> Brown patches and dollar spot are common during humid periods. Improve drainage and reduce watering frequency.</p>
      
      <p><strong>Weeds:</strong> Hand-pull weeds regularly or use selective herbicides. Maintain thick, healthy grass to prevent weed growth.</p>

      <h3>Seasonal Lawn Care Calendar</h3>
      <p><strong>January-March (Dry Season):</strong></p>
      <ul>
        <li>Increase watering frequency</li>
        <li>Apply pre-emergent weed control</li>
        <li>Aerate if soil is compacted</li>
      </ul>

      <p><strong>April-June (Long Rains):</strong></p>
      <ul>
        <li>Reduce watering</li>
        <li>Fertilize for rapid growth</li>
        <li>Increase mowing frequency</li>
        <li>Monitor for fungal issues</li>
      </ul>

      <p><strong>July-October (Dry Season):</strong></p>
      <ul>
        <li>Resume regular watering</li>
        <li>Apply fall fertilizer</li>
        <li>Overseed thin areas</li>
      </ul>

      <p><strong>November-December (Short Rains):</strong></p>
      <ul>
        <li>Reduce watering</li>
        <li>Continue regular mowing</li>
        <li>Prepare for dry season</li>
      </ul>

      <h3>Professional Lawn Care Services</h3>
      <p>For the best results, consider professional lawn care services. At GreenThumb KE, we offer:</p>
      <ul>
        <li>Regular mowing and edging</li>
        <li>Fertilization programs tailored to your grass type</li>
        <li>Weed and pest control</li>
        <li>Aeration and dethatching</li>
        <li>Irrigation system maintenance</li>
      </ul>

      <p>Contact us today for a free consultation and transform your lawn into a lush, green paradise.</p>
    `,
  },
  'water-efficient-irrigation-systems': {
    title: 'Water-Efficient Irrigation Systems: A Complete Guide',
    date: 'November 6, 2024',
    author: 'GreenThumb KE Team',
    readTime: '10 min read',
    category: 'Irrigation',
    content: `
      <h2>Why Water Efficiency Matters in Kenya</h2>
      <p>Water scarcity is an increasing concern in Kenya, especially in urban areas. Modern irrigation systems can reduce water consumption by up to 50% while maintaining healthier, more vibrant landscapes.</p>

      <h3>Types of Water-Efficient Irrigation Systems</h3>
      
      <h4>1. Drip Irrigation Systems</h4>
      <p>The most water-efficient option, drip irrigation delivers water directly to plant roots through a network of tubes and emitters.</p>
      <ul>
        <li><strong>Water Savings:</strong> Up to 70% compared to traditional sprinklers</li>
        <li><strong>Best For:</strong> Garden beds, vegetable gardens, trees, and shrubs</li>
        <li><strong>Cost:</strong> KSh 5,000-15,000 per 100m² installed</li>
        <li><strong>Advantages:</strong> Minimal evaporation, reduced weed growth, precise water delivery</li>
      </ul>

      <h4>2. Smart Sprinkler Systems</h4>
      <p>Modern sprinklers with weather sensors and programmable controllers optimize water use.</p>
      <ul>
        <li><strong>Water Savings:</strong> 30-50% with smart controllers</li>
        <li><strong>Best For:</strong> Lawns and large open areas</li>
        <li><strong>Cost:</strong> KSh 10,000-30,000 for residential systems</li>
        <li><strong>Features:</strong> Rain sensors, soil moisture detection, zone control</li>
      </ul>

      <h4>3. Micro-Spray Systems</h4>
      <p>Combines benefits of drip and spray irrigation with low-flow micro-sprayers.</p>
      <ul>
        <li><strong>Water Savings:</strong> 40-60% compared to traditional methods</li>
        <li><strong>Best For:</strong> Flower beds, ground covers, dense plantings</li>
        <li><strong>Cost:</strong> KSh 7,000-20,000 per installation</li>
      </ul>

      <h3>Smart Controllers and Automation</h3>
      <p>Modern irrigation controllers are game-changers for water conservation:</p>
      
      <p><strong>Weather-Based Controllers:</strong> Automatically adjust watering based on local weather conditions, temperature, and rainfall forecasts.</p>
      
      <p><strong>Soil Moisture Sensors:</strong> Monitor actual soil moisture levels and water only when needed.</p>
      
      <p><strong>Mobile App Control:</strong> Manage your irrigation system from anywhere using smartphone apps.</p>

      <h3>Best Practices for Water-Efficient Irrigation</h3>
      
      <h4>Timing is Everything</h4>
      <ul>
        <li>Water early morning (5-8 AM) for minimal evaporation</li>
        <li>Avoid midday watering when temperatures peak</li>
        <li>Evening watering acceptable but may promote fungal growth</li>
      </ul>

      <h4>Zoning and Hydrozoning</h4>
      <p>Group plants with similar water needs together:</p>
      <ul>
        <li>High water zone: Lawns, flowering plants, vegetables</li>
        <li>Medium water zone: Most shrubs and perennials</li>
        <li>Low water zone: Native plants, succulents, established trees</li>
      </ul>

      <h4>Proper System Maintenance</h4>
      <ul>
        <li>Check for leaks monthly - even small leaks waste thousands of liters</li>
        <li>Clean filters regularly to maintain pressure</li>
        <li>Adjust sprinkler heads seasonally</li>
        <li>Replace worn components promptly</li>
      </ul>

      <h3>Calculating Your Water Needs</h3>
      <p>Understanding your landscape's water requirements helps prevent overwatering:</p>
      
      <p><strong>Lawn:</strong> 25mm (1 inch) per week during growing season</p>
      <p><strong>Trees:</strong> 40-60 liters per week for young trees, 80-120 liters for mature</p>
      <p><strong>Shrubs:</strong> 20-40 liters per week depending on size</p>
      <p><strong>Vegetables:</strong> 25-40mm per week, more during fruiting</p>

      <h3>ROI and Water Savings</h3>
      <p>Investing in efficient irrigation pays off:</p>
      <ul>
        <li><strong>Average water bill savings:</strong> 30-50% annually</li>
        <li><strong>Typical payback period:</strong> 2-4 years</li>
        <li><strong>Additional benefits:</strong> Healthier plants, reduced maintenance, increased property value</li>
      </ul>

      <h3>Rainwater Harvesting Integration</h3>
      <p>Combine irrigation systems with rainwater harvesting:</p>
      <ul>
        <li>Install rainwater collection tanks (5,000-10,000 liter capacity)</li>
        <li>Connect to irrigation system with filtration</li>
        <li>Reduce municipal water dependency by 60-80%</li>
        <li>Long rains can provide 3-6 months of irrigation water</li>
      </ul>

      <h3>Government Incentives and Rebates</h3>
      <p>Kenya's water conservation initiatives may offer:</p>
      <ul>
        <li>Tax deductions for water-efficient system installation</li>
        <li>Rebates on smart controllers and sensors</li>
        <li>Reduced water rates for efficient users</li>
        <li>Check with your local water utility for current programs</li>
      </ul>

      <h3>Professional Installation vs. DIY</h3>
      <p><strong>Professional Installation Benefits:</strong></p>
      <ul>
        <li>Proper system design for your landscape</li>
        <li>Warranty and maintenance support</li>
        <li>Compliance with local regulations</li>
        <li>Optimal water pressure and coverage</li>
      </ul>

      <p>At GreenThumb KE, we design and install custom irrigation systems tailored to Kenya's climate. Contact us for a free water audit and consultation.</p>
    `,
  },
  'hydroponics-beginners-guide-kenya': {
    title: 'Hydroponics for Beginners: Growing Food Without Soil in Kenya',
    date: 'November 6, 2024',
    author: 'GreenThumb KE Team',
    readTime: '12 min read',
    category: 'Hydroponics',
    content: `
      <h2>What is Hydroponics?</h2>
      <p>Hydroponics is a method of growing plants without soil, using mineral nutrient solutions in water. This revolutionary farming technique is perfect for Kenya's climate and growing urban population.</p>

      <h3>Why Hydroponics in Kenya?</h3>
      <ul>
        <li><strong>Water Efficiency:</strong> Uses 90% less water than traditional farming</li>
        <li><strong>Space Saving:</strong> Ideal for urban areas and small plots</li>
        <li><strong>Year-Round Production:</strong> Not dependent on seasons</li>
        <li><strong>Higher Yields:</strong> 3-10x more productive per square meter</li>
        <li><strong>Pest Control:</strong> Reduced pest and disease problems</li>
        <li><strong>Faster Growth:</strong> Plants grow 30-50% faster</li>
      </ul>

      <h3>Types of Hydroponic Systems</h3>
      
      <h4>1. Deep Water Culture (DWC)</h4>
      <p>Plants suspended in nutrient solution with roots submerged.</p>
      <ul>
        <li><strong>Best For:</strong> Lettuce, herbs, tomatoes</li>
        <li><strong>Setup Cost:</strong> KSh 8,000-15,000 for small system</li>
        <li><strong>Difficulty:</strong> Beginner-friendly</li>
        <li><strong>Maintenance:</strong> Check pH and nutrients weekly</li>
      </ul>

      <h4>2. Nutrient Film Technique (NFT)</h4>
      <p>Thin film of nutrient solution flows over roots in channels.</p>
      <ul>
        <li><strong>Best For:</strong> Leafy greens, strawberries, herbs</li>
        <li><strong>Setup Cost:</strong> KSh 15,000-40,000</li>
        <li><strong>Difficulty:</strong> Intermediate</li>
        <li><strong>Advantages:</strong> Efficient water use, easy harvesting</li>
      </ul>

      <h4>3. Vertical Tower Systems</h4>
      <p>Stackable towers maximize space with automated nutrient delivery.</p>
      <ul>
        <li><strong>Best For:</strong> Apartments, small yards, commercial operations</li>
        <li><strong>Setup Cost:</strong> KSh 25,000-100,000 depending on size</li>
        <li><strong>Capacity:</strong> 40-200 plants per tower</li>
        <li><strong>ROI:</strong> 6-12 months for commercial setups</li>
      </ul>

      <h4>4. Drip Systems</h4>
      <p>Nutrient solution dripped to plant roots in growing medium.</p>
      <ul>
        <li><strong>Best For:</strong> Tomatoes, peppers, cucumbers</li>
        <li><strong>Setup Cost:</strong> KSh 20,000-60,000</li>
        <li><strong>Scalability:</strong> Easy to expand</li>
      </ul>

      <h3>Best Crops for Kenyan Hydroponics</h3>
      
      <h4>Quick Growing (3-6 weeks)</h4>
      <ul>
        <li><strong>Lettuce:</strong> Most profitable, high demand in hotels/restaurants</li>
        <li><strong>Spinach:</strong> Grows well year-round</li>
        <li><strong>Kales (Sukuma Wiki):</strong> Local favorite, excellent market</li>
        <li><strong>Herbs:</strong> Basil, mint, coriander - high value crops</li>
      </ul>

      <h4>Medium Growing (6-12 weeks)</h4>
      <ul>
        <li><strong>Tomatoes:</strong> Cherry tomatoes especially profitable</li>
        <li><strong>Capsicum:</strong> Bell peppers in high demand</li>
        <li><strong>Strawberries:</strong> Premium pricing possible</li>
        <li><strong>Cucumber:</strong> Fast growing, good yields</li>
      </ul>

      <h3>Essential Components</h3>
      
      <h4>Growing Medium</h4>
      <p>Supports plant roots while allowing nutrient flow:</p>
      <ul>
        <li><strong>Coconut Coir:</strong> Locally available, sustainable (KSh 500-1,000/kg)</li>
        <li><strong>Perlite:</strong> Good drainage (KSh 300-600/liter)</li>
        <li><strong>Rockwool:</strong> Professional choice (KSh 50-100/cube)</li>
      </ul>

      <h4>Nutrient Solutions</h4>
      <p>Available in Kenya from agricultural suppliers:</p>
      <ul>
        <li><strong>Pre-mixed solutions:</strong> KSh 2,000-5,000 for 25kg</li>
        <li><strong>A+B solutions:</strong> More control, professional grade</li>
        <li><strong>Organic options:</strong> Fish emulsion, seaweed extracts</li>
      </ul>

      <h4>pH and EC Management</h4>
      <ul>
        <li><strong>pH Meter:</strong> Essential tool (KSh 2,000-8,000)</li>
        <li><strong>EC Meter:</strong> Measures nutrient strength (KSh 3,000-10,000)</li>
        <li><strong>Target pH:</strong> 5.5-6.5 for most crops</li>
        <li><strong>Target EC:</strong> 1.5-2.5 mS/cm depending on crop</li>
      </ul>

      <h3>Setting Up Your First System</h3>
      
      <h4>Location Selection</h4>
      <ul>
        <li><strong>Sunlight:</strong> 6-8 hours direct sun or grow lights</li>
        <li><strong>Protection:</strong> Greenhouse or shade net recommended</li>
        <li><strong>Water Source:</strong> Clean water access essential</li>
        <li><strong>Power:</strong> For pumps and lights if needed</li>
      </ul>

      <h4>Budget Breakdown (Small Home System)</h4>
      <ul>
        <li>Growing containers/channels: KSh 5,000</li>
        <li>Pumps and timers: KSh 3,000</li>
        <li>Growing medium: KSh 2,000</li>
        <li>Nutrients (3 months): KSh 3,000</li>
        <li>pH/EC meters: KSh 5,000</li>
        <li>Seeds/seedlings: KSh 1,000</li>
        <li><strong>Total:</strong> KSh 19,000-25,000</li>
      </ul>

      <h3>Daily and Weekly Maintenance</h3>
      
      <h4>Daily Tasks (10-15 minutes)</h4>
      <ul>
        <li>Check water level and pump operation</li>
        <li>Visual inspection for pests or disease</li>
        <li>Monitor temperature (ideal: 18-24°C)</li>
      </ul>

      <h4>Weekly Tasks (1-2 hours)</h4>
      <ul>
        <li>Test and adjust pH (target: 5.5-6.5)</li>
        <li>Measure EC and adjust nutrients</li>
        <li>Clean filters and check for algae</li>
        <li>Harvest mature crops</li>
        <li>Plant new seedlings</li>
      </ul>

      <h3>Common Problems and Solutions</h3>
      
      <p><strong>Algae Growth:</strong></p>
      <ul>
        <li>Cover nutrient solution from light</li>
        <li>Use opaque containers</li>
        <li>Add hydrogen peroxide (1ml per liter) if severe</li>
      </ul>

      <p><strong>Nutrient Deficiencies:</strong></p>
      <ul>
        <li>Yellow leaves: Usually nitrogen deficiency</li>
        <li>Purple stems: Phosphorus deficiency</li>
        <li>Brown leaf edges: Potassium deficiency</li>
        <li>Solution: Check EC, adjust nutrient strength</li>
      </ul>

      <p><strong>Root Rot:</strong></p>
      <ul>
        <li>Ensure adequate oxygen (air stones/pumps)</li>
        <li>Maintain proper water temperature (below 25°C)</li>
        <li>Keep system clean and sanitized</li>
      </ul>

      <h3>Commercial Opportunities</h3>
      
      <p><strong>Market Analysis Kenya:</strong></p>
      <ul>
        <li><strong>Restaurants/Hotels:</strong> Premium buyers, willing to pay 50-100% more for fresh, pesticide-free produce</li>
        <li><strong>Supermarkets:</strong> Growing demand for organic/hydroponic labels</li>
        <li><strong>Direct to Consumer:</strong> Farmers markets, delivery services</li>
        <li><strong>Wholesale:</strong> Supply to retailers and distributors</li>
      </ul>

      <p><strong>Profitability Example (10m² NFT System):</strong></p>
      <ul>
        <li>Initial Investment: KSh 80,000-120,000</li>
        <li>Monthly Revenue (Lettuce): KSh 30,000-50,000</li>
        <li>Monthly Costs: KSh 10,000-15,000</li>
        <li>Net Monthly Profit: KSh 20,000-35,000</li>
        <li>Payback Period: 3-6 months</li>
      </ul>

      <h3>Training and Support</h3>
      <p>At GreenThumb KE, we offer:</p>
      <ul>
        <li>Complete system design and installation</li>
        <li>Training on operation and maintenance</li>
        <li>Ongoing support and troubleshooting</li>
        <li>Market linkages for commercial growers</li>
        <li>Organic certification assistance</li>
      </ul>

      <p>Ready to start your hydroponic journey? Contact us for a free consultation and site assessment.</p>
    `,
  },
  'sustainable-garden-design-tips': {
    title: 'Sustainable Garden Design: Creating Eco-Friendly Outdoor Spaces',
    date: 'November 6, 2024',
    author: 'GreenThumb KE Team',
    readTime: '7 min read',
    category: 'Garden Design',
    content: `
      <h2>What Makes a Garden Sustainable?</h2>
      <p>A sustainable garden works with nature, not against it. It conserves water, supports local wildlife, reduces chemical use, and creates a healthy ecosystem that requires minimal maintenance over time.</p>

      <h3>Principles of Sustainable Garden Design</h3>
      
      <h4>1. Choose Native and Adapted Plants</h4>
      <p>Native Kenyan plants are naturally suited to local conditions:</p>
      <ul>
        <li><strong>Native Trees:</strong> Mukau, Mugumo, Meru Oak, Nandi Flame</li>
        <li><strong>Shrubs:</strong> Croton, Lantana, African Gardenia</li>
        <li><strong>Ground Covers:</strong> African Daisy, Wedelia, Dwarf Morning Glory</li>
        <li><strong>Benefits:</strong> Drought-resistant, low maintenance, support local wildlife</li>
      </ul>

      <h4>2. Water Conservation Strategies</h4>
      <p><strong>Rainwater Harvesting:</strong></p>
      <ul>
        <li>Install rain barrels or underground tanks</li>
        <li>5,000-10,000 liter capacity recommended</li>
        <li>ROI: 1-2 years through water bill savings</li>
        <li>Connect to drip irrigation for efficiency</li>
      </ul>

      <p><strong>Mulching:</strong></p>
      <ul>
        <li>Reduces water evaporation by 70%</li>
        <li>Use organic mulch: bark chips, coffee husks, grass clippings</li>
        <li>Apply 5-10cm thick layer around plants</li>
        <li>Breaks down to improve soil quality</li>
      </ul>

      <p><strong>Zoning:</strong></p>
      <ul>
        <li>Group plants by water needs</li>
        <li>Place high-water plants near house</li>
        <li>Drought-tolerant plants in distant areas</li>
        <li>Reduces overall water consumption by 40%</li>
      </ul>

      <h4>3. Soil Health Management</h4>
      <p><strong>Composting:</strong></p>
      <ul>
        <li>Turn kitchen and garden waste into nutrient-rich compost</li>
        <li>Reduces waste sent to landfills</li>
        <li>Free, organic fertilizer</li>
        <li>Improves soil structure and water retention</li>
      </ul>

      <p><strong>Organic Matter Addition:</strong></p>
      <ul>
        <li>Add 5-10cm compost annually</li>
        <li>Use manure from local farms (well-aged)</li>
        <li>Coffee grounds excellent for acid-loving plants</li>
        <li>Improves soil biology and plant health</li>
      </ul>

      <h4>4. Integrated Pest Management</h4>
      <p>Reduce chemical pesticide use through natural methods:</p>
      
      <p><strong>Companion Planting:</strong></p>
      <ul>
        <li>Marigolds repel aphids and whiteflies</li>
        <li>Basil protects tomatoes from pests</li>
        <li>Garlic deters many insects</li>
        <li>Nasturtiums attract aphids away from other plants</li>
      </ul>

      <p><strong>Beneficial Insects:</strong></p>
      <ul>
        <li>Ladybugs eat aphids</li>
        <li>Praying mantis control many pests</li>
        <li>Attract with flowering plants: dill, fennel, yarrow</li>
      </ul>

      <p><strong>Natural Pesticides:</strong></p>
      <ul>
        <li>Neem oil spray for soft-bodied insects</li>
        <li>Chili-garlic spray as deterrent</li>
        <li>Soap solution for aphids and mites</li>
        <li>Diatomaceous earth for crawling insects</li>
      </ul>

      <h3>Wildlife-Friendly Garden Features</h3>
      
      <h4>Bird Attractors</h4>
      <ul>
        <li><strong>Native Plants:</strong> Provide natural food sources</li>
        <li><strong>Water Sources:</strong> Bird baths changed daily</li>
        <li><strong>Nesting Sites:</strong> Dense shrubs and trees</li>
        <li><strong>Benefits:</strong> Natural pest control, pollination</li>
      </ul>

      <h4>Pollinator Garden</h4>
      <ul>
        <li><strong>Flowers:</strong> Sunflowers, zinnias, salvias, lavender</li>
        <li><strong>Herbs:</strong> Rosemary, thyme, oregano when flowering</li>
        <li><strong>Continuous Bloom:</strong> Plant variety for year-round flowers</li>
        <li><strong>Impact:</strong> Increases fruit/vegetable yields by 30-50%</li>
      </ul>

      <h4>Butterfly Garden</h4>
      <ul>
        <li><strong>Nectar Plants:</strong> Lantana, butterfly bush, pentas</li>
        <li><strong>Host Plants:</strong> Milkweed for monarchs, passion vine for gulf fritillaries</li>
        <li><strong>Sun Exposure:</strong> 6+ hours daily</li>
        <li><strong>Shelter:</strong> Rocks and logs for resting</li>
      </ul>

      <h3>Energy-Efficient Landscaping</h3>
      
      <p><strong>Strategic Tree Placement:</strong></p>
      <ul>
        <li>Plant deciduous trees on west/south sides</li>
        <li>Provides summer shade, allows winter sun</li>
        <li>Reduces cooling costs by 15-35%</li>
        <li>Mature trees can reduce air temperature by 2-9°C</li>
      </ul>

      <p><strong>Green Walls and Living Roofs:</strong></p>
      <ul>
        <li>Insulate buildings naturally</li>
        <li>Reduce urban heat island effect</li>
        <li>Improve air quality</li>
        <li>Aesthetic appeal and property value</li>
      </ul>

      <h3>Hardscaping Sustainability</h3>
      
      <p><strong>Permeable Surfaces:</strong></p>
      <ul>
        <li>Gravel, permeable pavers, grass pavers</li>
        <li>Allow rainwater infiltration</li>
        <li>Reduce runoff and erosion</li>
        <li>Recharge groundwater naturally</li>
      </ul>

      <p><strong>Recycled Materials:</strong></p>
      <ul>
        <li>Reclaimed wood for decking</li>
        <li>Recycled plastic lumber</li>
        <li>Broken concrete for paths (urbanite)</li>
        <li>Local stone reduces transportation impact</li>
      </ul>

      <h3>Edible Landscaping</h3>
      <p>Combine beauty with functionality:</p>
      
      <ul>
        <li><strong>Fruit Trees:</strong> Mango, avocado, citrus as ornamental specimens</li>
        <li><strong>Berry Bushes:</strong> Attractive and productive hedges</li>
        <li><strong>Herb Borders:</strong> Aromatic and useful kitchen herbs</li>
        <li><strong>Vegetable Beds:</strong> Raised beds as garden features</li>
      </ul>

      <h3>Maintenance Reduction Strategies</h3>
      
      <p><strong>Right Plant, Right Place:</strong></p>
      <ul>
        <li>Match plants to sun, soil, water conditions</li>
        <li>Reduces stress and maintenance needs</li>
        <li>Healthier plants resist pests naturally</li>
      </ul>

      <p><strong>Ground Covers Instead of Lawn:</strong></p>
      <ul>
        <li>Clover, creeping thyme, or native options</li>
        <li>No mowing required</li>
        <li>Less water than grass</li>
        <li>Adds biodiversity</li>
      </ul>

      <p><strong>Automated Irrigation:</strong></p>
      <ul>
        <li>Smart controllers adjust for weather</li>
        <li>Drip systems deliver water efficiently</li>
        <li>Reduces maintenance time</li>
        <li>Saves water and money</li>
      </ul>

      <h3>Sustainable Garden Investment</h3>
      
      <p><strong>Initial Costs vs. Long-term Savings:</strong></p>
      <ul>
        <li>Native plants: Lower initial cost, minimal replacement</li>
        <li>Quality irrigation: Higher upfront, 50% water savings annually</li>
        <li>Composting: Free fertilizer saves KSh 5,000-10,000/year</li>
        <li>Rainwater harvesting: 2-year payback through reduced water bills</li>
      </ul>

      <h3>Get Professional Help</h3>
      <p>GreenThumb KE specializes in sustainable garden design:</p>
      <ul>
        <li>Custom design for your property and goals</li>
        <li>Native plant selection and sourcing</li>
        <li>Water harvesting system design</li>
        <li>Organic garden maintenance programs</li>
        <li>Edible landscape planning</li>
      </ul>

      <p>Contact us today to transform your garden into a sustainable, beautiful oasis that benefits both you and the environment.</p>
    `,
  },
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogContent[params.slug]
  
  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/blog" className="inline-flex items-center text-brand-green hover:text-primary-600 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <span className="inline-block bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {post.readTime}
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-bold
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-brand-green
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
            prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-ul:my-6 prose-ul:space-y-2
            prose-li:text-gray-700
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-a:text-brand-green prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary-800 to-primary-600 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Landscape?</h3>
          <p className="mb-6 text-white/90">
            Contact GreenThumb KE for expert advice and professional service.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/#contact" 
              className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Free Quote
            </Link>
            <Link 
              href="/blog" 
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Read More Articles
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug,
  }))
}


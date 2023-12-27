import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import Flex from '../Flex'
import Image from '../Image'
import Badge from '../Badge'
import Price from '../Price'
import Love from '../icons/Love'
import Roted from '../icons/Roted'
import Troli from '../icons/Troli'

const Arrivals = ({clock1src, clock2src, basketsrc, dollsrc, product1badge, product2badge, }) => {
  return (
   <section className="pt-[128px] bg-[#FFFFF]">
        <Container>
        <Heading className="font-DM font-bold text-[#262626] text-[40px] pb-[48px] " text="New Arrivals" as="h1"/>
            <Flex className="justify-between">
               <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] shadow-[0_6px_10px_-1px_rgba(0,0,0,0.3)] mb-[16px] " src={clock1src}/>
                  <Badge className="w-[92px] py-[8px] px-[30px] absolute top-[20px] left-[20px]" text={product1badge}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="group-hover:bottom-[96px] transition-all w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
               </div>
               <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] shadow-[0_6px_10px_-1px_rgba(0,0,0,0.3)] mb-[16px]" src={clock2src}/>
                  <Badge className="w-[92px] py-[8px] px-[30px] absolute top-[20px] left-[20px]" text={product2badge}/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
               </div>
               <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] shadow-[0_6px_10px_-1px_rgba(0,0,0,0.3)] mb-[16px]" src={basketsrc}/>
                  <Badge className="w-[92px] py-[8px] px-[30px] absolute top-[20px] left-[20px]" text="New"/>
                  <Flex className="justify-between">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Price text="$44.00" />
                  </Flex>
                  <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[30px]" text="Black" as="h5"/>
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
               </div>
               <div className="w-[370px] h-[465px] bg-[#FFFFF] relative group">
                  <Image className="w-[370px] h-[370px] shadow-[0_6px_10px_-1px_rgba(0,0,0,0.3)] mb-[16px]" src={dollsrc}/>
                  <Badge className="w-[92px] py-[8px] px-[30px] absolute top-[20px] left-[20px]" text="New"/>
                  <Flex className="justify-between ">
                     <Heading className="font-DM font-bold text-[#262626] text-[20px] pb-[15px]" text="Basic Crew Neck Tee" as="h4"/>
                     <Heading className="font-DM font-regular text-[#767676] text-[16px] leading-[36px]" text="$44.00" as="h5"/>
                  </Flex>
                  <Price text="$44.00" />
                  <div className="invisible group-hover:visible w-[100%] absolute bottom-[96px] left-[0px] py-[20px] pr-[20px] gap-y-[20px] bg-[#FFF]">
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Wish List" as="h5"/>
                       <Love/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end pb-[20px]">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Compare" as="h5"/>
                       <Roted/>
                     </Flex>
                     <Flex className="gap-x-[15px] justify-end">
                       <Heading className="text-[#767676] text-[16px] font-DM font-regular hover:text-[#262626] hover:font-bold" text="Add to Cart" as="h5"/>
                       <Troli/>
                     </Flex>
                  </div>
               </div>
            </Flex>
        </Container>
   </section>
  )
}

export default Arrivals
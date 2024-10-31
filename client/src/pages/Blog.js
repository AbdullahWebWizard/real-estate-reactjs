import React from "react";
import Layout from "../components/layout/layout";
import "../styles/blog.css";
import { useEffect } from "react";

const Blog = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".section");
      const sidebarLinks = document.querySelectorAll(".sidebar a");

      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const rect = section.getBoundingClientRect();

        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          sidebarLinks.forEach((link) => {
            if (link.getAttribute("href").slice(1) === sectionId) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
          section.classList.add("animate");
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Layout>
      <div className="sidebar" id="sidebar">
        <a href="#section1" className="active">
        Asset Tokenization: What It Is and How It Works
        </a>
        <a href="#section2">What Is Asset Tokenization?</a>
        <a href="#section3">Benifits of Asset Tokenization</a>
        <a href="#section4">The Need for Oracles in Asset Tokenization</a>
      </div>
      <div classname="blog">
        <div className="content">
          <div id="section1" className="section active secondaryText">
            <h1 className="primaryText">
              Asset Tokenization: What It Is and How It Works
            </h1>
            <br />
            ASSET TOKENIZATION DEFINITION
            <br />
            Asset tokenization involves representing the ownership rights of
            real-world assets as digital tokens on a blockchain.
            <br />
            Key Takeaways:
            <br />
            <ul>
              <li>
                {" "}
                Asset tokenization has the potential to bring trillions of
                dollars of real-world value onto blockchain networks
              </li>
              <li>
                {" "}
                Tokenized assets benefit from permissionless liquidity, open
                access, on-chain transparency, and reduced transactional
                friction compared to traditional assets
              </li>
              <li>
                Tokenized assets require high-quality off-chain data from secure
                and reliable Chainlink oracles
              </li>
            </ul>
            “Asset tokenization” is a term for the use of smart contract and
            blockchain technology to represent ownership or rights to an asset
            as a tradable, on-chain token. Though it most commonly refers to the
            tokenization of financial or fungible assets, such as shares in a
            company or a quantity of gold, asset tokenization can hypothetically
            refer to the tokenization of anything possessing monetary value. As
            such, asset tokenization is among the most promising use cases for
            blockchain, with the upper bound of asset tokenization market size
            potentially encompassing nearly all of human economic activity—a
            dollar number estimated to be worth well over a hundred trillion
            annually. As anyone familiar with the oracle problem knows, any
            instance where a Web3 application needs to interact with the
            external world can present security risks and other complications,
            and asset tokenization—a process that by nature relies on
            information about the world that is generally off-chain—is no
            exception. Secure oracles are key for asset tokenization to reach
            its full potential, as markets need reliable information about the
            underlying assets in several key processes such as minting, trading,
            managing, and more.
          </div>
          <div id="section2" className="section secondaryText">
            <h1 className="primaryText">What Is Asset Tokenization?</h1>
            <br />
            Digital asset tokenization is the process whereby ownership rights
            of an asset are represented as digital tokens and stored on a
            blockchain. In such cases, tokens can act like digital certificates
            of ownership that can represent almost any object of value,
            including physical, digital, fungible, and non-fungible assets.
            Because they’re stored on a blockchain, owners can maintain custody
            over their assets (if owners are holding them in their own secure
            crypto wallet). If the long-term promise of this use case is
            impressive, so too are the strides toward adoption already being
            made today. Major enterprises, such as Boston Consulting Group and
            ADDX, BlackRock, Deloitte, BNY Mellon, and EY, have studied asset
            tokenization and concluded that it possesses the capacity to disrupt
            multiple industries, including the global securities industry.
            Additionally, Microsoft and Vanguard have announced or gone live
            with projects tokenizing industrial assets and securities,
            respectively. By these metrics, asset tokenization is already among
            the most popular blockchain use cases currently achieving real-world
            enterprise adoption. To understand how asset tokenization works and
            why it matters, let’s revisit the basics of Web3 technology: Smart
            contracts are cryptographically secure digital agreements created
            with computer code and stored on a highly secure type of database
            known as a blockchain. In order to issue tokens, a developer writes
            a smart contract on a blockchain that maps positive balances to a
            series of wallet or smart contract addresses, along with functions
            that enable users in control of those addresses to add and subtract
            from those balances. Asset Tokenization Examples<br/> Real-world asset
            tokenization—Real-world assets like fiat currency, equities,
            T-bills, credit, commodities, carbon credits, intellectual property,
            and fine art can be tokenized and stored on a blockchain. Similar to
            gold bullion warrants and house deeds, they’re bearer assets that
            give the holder a claim over a real-world asset. The key difference
            from legacy bearer assets is that physical asset tokenization
            enables assets to be stored, traded, and used as collateral across
            blockchain networks.<br/> ‍ Digital asset tokenization—Tokenizing assets
            that only exist in a digital form on a blockchain network is
            critical to Web3, especially for use cases such as representing DAO
            governance rights and cross-chain assets. Because they’re entirely
            digital, tokenized assets stored on a blockchain enable the owner to
            hold the asset outright, rather than owning a claim on the
            underlying asset. <br/> In-game asset tokenization—A subset of digital
            asset tokenization, in-game assets used in GameFi projects or
            metaverses, such as skins, weapons, or in-game currencies, can be
            represented as tokenized assets.
          </div>
          <div id="section3" className="section secondaryText">
            <h1 className="primaryText">Benifits of Asset Tokenization</h1>
            <br />
            In addition to offering a decentralized and trust-minimized
            alternative to a real-world product, investment vehicle, or service,
            there are many more benefits of asset tokenization. Specifically,
            the tokenization of real-world assets through the use of blockchain
            technology presents a clear path toward making numerous assets more
            valuable, accessible, and useful, as well as creating a vehicle by
            which off-chain data can augment their utilization within the DeFi
            ecosystem.
            <br />
            At the heart of both the current success of asset tokenization and
            its long-term potential is the remarkable number of advantages and
            additional utility that tokenized assets provide relative to
            non-tokenized assets. Tokenization can allow for increased liquidity
            of traditionally illiquid assets; greater accessibility and ease of
            access for otherwise cloistered investment opportunities; greater
            transparency regarding ownership and ownership history; and a
            reduction in administrative costs associated with the trading of
            these assets, including management, issuance, and transactional
            intermediaries. Finally, tokenization allows for assets that
            previously could not access the DeFi ecosystem a path toward doing
            so, unlocking a whole new realm of potential through asset-backed
            composability.
            <br />
            <h7>Liquidity</h7>
            <br />
            In traditional markets, financial events are generally recorded
            across siloed ledgers, resulting in significant market
            inefficiencies, such as increased costs and lengthened settlement
            times. This lack of interoperability between different systems
            represents a significant opportunity for asset tokenization to help
            solve the resulting fractionalized liquidity through interoperable
            tokenized assets.
            <br />
            Tokenization can also help improve liquidity for historically
            illiquid assets. With tokenization, an asset can be represented as
            millions or even billions of tokens, creating fractional ownership,
            which can be subsequently listed on a variety of widely-available
            and accessible exchanges. This eliminates the need for costly
            transactional intermediaries and expands the potential buyer pool
            while simultaneously keeping the tokens tied to a unique asset.
            <br />
            Accessibility
            <br />
            Many of the highest-upside assets are out of reach to common
            investors due to financial or regulatory constraints. For instance,
            consider financing a big-budget movie: the upfront costs, as well as
            the risk of a production crew going over-budget, comfortably price
            out all but the wealthiest investors. However, a successful film can
            earn a return on the investment multiple times over in a relatively
            short time frame. Other low-access, high-return examples include
            collecting sports cars, investing in distressed foreign assets, or
            the purchase and renting of multifamily real estate.
            <br />
            In this case, the benefits of tokenization essentially become
            similar to crowdfunding, but within a model where the group of
            investors funding or purchasing an asset also reap the financial
            rewards of their participation. This allows smaller investors a path
            towards investing in riskier, but higher-upside assets with
            relatively low capital.
            <br />
            Transparency
            <br />
            Many high-value assets suffer from a lack of reliable and
            easily-available information regarding returns, ownership history,
            sale history, and other key metrics users need to be able to make
            informed economic decisions. This lack of information is especially
            acute when evaluating foreign assets, or instances where a buyer
            cannot personally inspect an asset prior to purchase. A key benefit
            of tokenization is that it allows for the open tracking and auditing
            of all these records due to the fundamentally public nature of many
            blockchains.
            <br />
            With tokenization, users can see a record of ownership as well as
            returns in interest or dividends, depending on the smart contract
            logic of the asset. Provenance tracking on the blockchain allows for
            immutable records, significantly decreasing investment security
            risks by minimizing record-keeping trust. These features have the
            potential to significantly reduce the risk of fraud across multiple
            industries where forgeries and knock-offs are common, such as
            high-priced luxuries like wine and caviar, as well as fashion and
            art.
            <br />
            Composability
            <br />
            One of the most promising benefits of asset tokenization is also
            among the least well-explored: connecting the value of real-world
            assets to the composability of the DeFi ecosystem. Decentralized
            money markets around tokenized real-world assets enable users to
            earn equity percentage in the interest generated from off-chain
            collateral. This enhances the liquidity of the wider DeFi space
            while simultaneously giving retail investors access to an investment
            class that would otherwise be difficult to access.
            <br />
            Moving forward, asset tokenization will allow for a plethora of
            opportunities for smart contracts developers seeking to tap into
            real-world value. Whole new types of synthetic assets, indexes, and
            token baskets can easily be built by combining tokens tied to
            various assets, and the ability to turn real-world revenue streams
            into collateral offers another jolt of innovation for an already
            rapidly expanding DeFi field.
            <br />
          </div>
          <div id="section4" className="section secondaryText">
            <h1 className="primaryText">
              The Need for Oracles in Asset Tokenization
            </h1>
            <br />
            While asset tokenization has the potential to enhance the utility of
            a wide variety of real-world assets and simultaneously buttress
            growth and innovation within the DeFi space, it is also a use case
            whose functionality is highly reliant on secure oracles. In order
            for something of monetary value to be accurately represented and
            traded on the blockchain, there must be good information on the
            asset. This need is especially acute at four stages in a tokenized
            asset’s life cycle: when the tokens are created, when they are used
            as collateral, when users check their valuations, and when they are
            sold on secondary markets.
            <br />
            Chainlink Proof of Reserve
            <br />
            Tokenized asset projects can use a decentralized verification
            service, Chainlink Proof of Reserve, to help relay this off-chain
            information on-chain. Chainlink PoR provides unparalleled
            transparency into off-chain collateral, helping enhance the security
            and verifiability of tokenized assets. By using Chainlink PoR’s
            decentralized verification mechanism to relay collateralization
            data, tokenization projects can demonstrate a new level of
            transparency and security.Leading tokenization projects are already
            utilizing or integrating Chainlink Proof of Reserve to help relay
            off-chain valuation data on-chain, including:
            <br />
            <ul>
              <li>
                OpenEden for tokenized T-bills ‍<br />
              </li>
              <li>
                Backed Finance for tokenized equities‍
                <br />
              </li>
              <li>
                TUSD and Poundtoken for tokenized fiat currency
                <br />
              </li>
              <li>
                {" "}
                Fortunify for tokenized credit‍
                <br />
              </li>
              <li>
                Cache Gold for tokenized gold
                <br />
              </li>
            </ul>
            Some tokenization projects are using Chainlink PoR in an additional
            way—for providing cryptographic guarantees that new tokens minted
            are backed by reserves, thereby helping to prevent infinite mint
            attacks. TUSD, Poundtoken, and Cache Gold are using Chainlink PoR
            Secure Mint in their minting smart contract to help ensure reserves
            are sufficient before minting new tokens.
            <br />
            Different assets will necessitate different oracle network
            structures and needs. Depending on the use case, Chainlink oracles
            can provide direct valuations to assets or serve as benchmarks for
            making decisions on them. Since Chainlink interoperates with any API
            and off-chain system, Chainlink oracles are able to source this data
            from multiple avenues, such as professional data providers (e.g.
            Kelly Blue Book for cars), independent/expert appraisers,
            exchanges/OTC markets, or any customized aggregation of data sources
            to create a single trusted valuation. This can be supported by a
            decentralized network of independent Chainlink nodes that call
            off-chain APIs to retrieve data or the data providers/appraisers can
            run Chainlink oracles themselves to relay data directly to smart
            contracts.
            <br />
            In order to further preserve the integrity of the network and
            maintain a high degree of data quality, unique crypto-economic
            incentives can be bootstrapped on to the oracle network. Methods
            like staking-backed service agreements and immutable reputation
            systems are able to track the historical quality of the valuations
            provided by appraisers, nodes, data providers, and more. This
            framework will incentivize accurate valuations as dishonest
            valuations will be financially penalized and their reputation score
            lowered, hindering their ability to earn future revenue as a data
            provider. It will also allow even niche and esoteric assets which
            rely on expert appraiser information to enter into the tokenized
            market while maintaining stronger crypto-economic guarantees that
            the valuation data is sound.
            <br />
            Cross-Chain Interoperability Protocol (CCIP)
            <br />
            Some tokenized assets need to be interoperable across different
            computing environments to access a broader pool of liquidity and a
            larger number of users across different platforms and ecosystems.
            The Cross-Chain Interoperability Protocol (CCIP) is designed to help
            eliminate the need for developers to write custom code for building
            chain-specific integrations and help make native cross-chain
            tokenized assets.
            <br />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

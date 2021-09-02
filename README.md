<p align="center">
  <a href="https://snek.at/" target="_blank" rel="noopener noreferrer">
    <img src="https://avatars2.githubusercontent.com/u/55870326?s=400&u=c6c7f06305ddc94747d474850fde7b2044f53838&v=4" alt="SNEK Logo" height="150">
  </a>
</p>

<h3 align="center">Snek Jaen Template</h3>

<p align="center">
  This is the official jaen project of snek-at.
  Free, sexy and cutting edge CMS framework for ReactJS.
  <br>
  <br>
  <cite>"A bowl is most useful when it is empty."</cite> - Lao Tzu
  <br>
  <br>
  <a href="https://github.com/snek-at/jaen/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/snek-at/jaen/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="https://www.overleaf.com/read/bcxwhwbhrmps">Documentation</a>
  <br>
  <br>
  <a href="https://www.codacy.com/gh/snek-at/jaen/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=snek-at/jaen&amp;utm_campaign=Badge_Grade">
    <img src="https://app.codacy.com/project/badge/Grade/bb3d984d38704860ba7ad800d319b8c4" />
  </a>
</p>

## [](#table-of-contents)What’s In This Document
- [💪 Motivation](#-motivation)
    - [Jaen Features](#jaen-features)
    - [Roadmap](#roadmap)
    - [Msg inspiring PPL](#msg-inspiring-ppl)
    - [Disclaimer](#disclaimer)
- [🚀 Get Up and Running in 5 Minutes](#-get-up-and-running-in-5-minutes)
    - [Generate from template Generate Jaen on GitHub](#generate-from-template-generate-jaen-on-github)
    - [First Deployment](#first-deployment)
    - [Deployment Options](#deployment-options)
        - [Codespace Setup](#codespace-setup)
        - [Local Setup](#local-setup)
- [💻 How to Code](#-how-to-code)
    - [Overview](#overview)
        - [Page Settings](#page-settings)
        - [Fields](#fields)
    - [Page Settings](#page-settings)
    - [Fields](#fields)
        - [TextField](#textfield)
        - [ImageField](#imagefield)
        - [StreamField](#streamfield)
        - [IndexField](#indexfield)
- [🐞 How to Report a Bug or Request a Feature](#-how-to-report-a-bug-or-request-a-feature)
- [🤝 How to Contribute](#-how-to-contribute)
- [💚 Thanks](#-thanks)
- [💼 Creators](#-creators)
- [🤔 FAQs](#-faqs)
- [:exploding_head: Trivia](#-trivia)
- [📝 Copyright and License](#-copyright-and-license)

## [](#-motivation)💪 Motivation

A CMS **should not** be the defining feature of a webapp. Neither should Ecommerce or anything other than your code. \
ERP integration **should not** force developer to cut corners.

- Jaen **does not** interfere with **your** user experience.
- Jean **does not** challenge **your** application design.
- Jaen gives the power back to **you**.

One thing and one thing only with clean and well documented interfaces.
Customizable, extensible and open-source.

### Jaen Features
* A fast, attractive interface for authors
* Complete control over front-end design and structure
* Fast out of the box, cache-friendly when you need it
* StreamField encourages flexible content without compromising structure
* Excellent support for images and embedded content
* Multi-site and multi-language ready
* Powerd by blockchain and can be run for free

### Roadmap
| Feature                       | Shipped | Almost There | We're Writing the Code | Investigating |
|-------------------------------|:---:|:---:|:---:|:---:|
| `IndexField`                  | ✅️ |  |  |  |
| `RichTextField`               | ✅️ |  |  |  |
| `Email Support`               | ✅️ |  |  |  |
| `Fixed parent for IndexField` | ✅️ |  |  |  |
| `TextField`                   | ✅️ |  |  |  |
| `Dynamic Routes`              | ✅️ |  |  |  |
| `ImageField`                  | ✅️ |  |  |  |
| `StreamField`                 | ✅️ |  |  |  |
| `Gatsby`                      | ✅️ |  |  |  |
| `PdfField`                    |  | ✅️ |  |  |
| `LinkField`                   |  | ✅️ |  |  |
| `Converter (HELMUT)`          |  |  |  | ✅️ |
| `Smart Converter (SMARTMUT)`  |  |  |  | ✅️ |
| `E-Commerce`                  |  |  |  | ✅️ |
| `User Management`             |  |  |  | ✅️ |
| `Email Templates`             |  |  |  | ✅️ |
| `Development Tools`           |  |  |  | ✅️ |
| `Snek Editor`                 |  |  |  | ✅️ |
| `YT Tutorials`                |  |  |  | ✅️ |

#### Msg inspiring PPL
Chasing ones own tail is not inspiring.

#### Disclaimer
Not for crybabies. Do not touch if you are affraid to be a bit scratched.

## [](#-get-up-and-running-in-5-minutes)🚀 Get Up and Running in 5 Minutes

### Generate from template [Generate Jaen on GitHub](https://github.com/snek-at/jaen-template/generate)
| Generate from template | Important public and no branches |
|---|---|
| ![image](https://user-images.githubusercontent.com/83394650/124399008-16b7d780-dd19-11eb-84bb-769462d5440e.png) | ![image](https://user-images.githubusercontent.com/83394650/124401575-6c48b000-dd2a-11eb-8316-7f583e5e98d7.png) |

### First Deployment
The `GITHUB_TOKEN` has limitations for the first deployment so we have to select the GitHub Pages branch on the repository settings tab. After that, do the second deployment like the following pictures.

| First deployment failed | Go to the [settings tab](https://github.com/snek-at/jaen-template/settings/pages) |
|---|---|
| ![image](https://user-images.githubusercontent.com/83394650/124398796-ecb1e580-dd17-11eb-9f06-64d73eb2d4d9.png) | ![image](https://user-images.githubusercontent.com/83394650/124398815-0ce1a480-dd18-11eb-9aef-9d8a3797008b.png) |

| Select branch | Deploying again and succeed |
|---|---|
| ![image](https://user-images.githubusercontent.com/83394650/124398825-1408b280-dd18-11eb-985f-f28de94b8888.png) | ![image](https://user-images.githubusercontent.com/83394650/124398968-d3f5ff80-dd18-11eb-8f17-ee2d92900014.png) |

### Deployment Options
We recomend to use [vscode](https://github.com/microsoft/vscode) as IDE in either an codespace or local setup.

#### Codespace Setup
The easiest method is to use a GitHub [Codespace](https://github.com/features/codespaces) (in beta). Just create a GitHub Codespace from the Code menu. Wait for the Codespace to complete provisioning. When the Codespace has completed provisioning open a terminal window (Ctrl-`, Control-backquote) and:

- Create .env and set PUBLIC_URL
- Start a local copy of the docs site with `yarn start`
- Or build a local copy of the library with `yarn run build`

#### Local Setup
If you set this up locally, make sure you have the following pre-requisites:

- Use `yarn install` to install all dependencies
- Start a local copy of the docs site with `yarn start`
- Or build a local copy of the library with `yarn run build`

The demo site will now be accessible at <http://localhost:8000/>.

#### Troubleshooting

If you encounter any other issues getting this template to work we ask you to [report it](https://github.com/snek-at/jaen/issues) so that we can improve the documentation.

#### Editing

To edit the page you have to log into the CMS.<br />
The standard user for this is **snekman** and the password for the account is **ciscocisco**.

## [](#-how-to-code)💻 How to Code

### Overview

#### Page Settings
| Field                         | Type       | Description | Wiki | Tutorial |
|-------------------------------|:----------:|-------------|:----:|:--------:|
| `TemplateName`             	| string     | The TemplateName defines the name of your template in the context of the CMS. |  |  |

#### Fields
| Field                         | Properties | Description | Wiki | Tutorial |
|-------------------------------|------------|-------------|:----:|:--------:|
| `TextField`             | fieldName <br/> initValue <br/> rtf | TextField can be used to add editable texts to your page.| [✅️](https://github.com/snek-at/jaen/wiki/TextField) |  |
| `ImageField`                  | fieldName <br/> initValue | The ImageField is used to provide editable images that are hosted on the ipfs. | [✅️](https://github.com/snek-at/jaen/wiki/ImageField) |  |
| `StreamField`                 | name <br/> reverseOrder <br/> blocks| With a StreamField you can build your own React-Components with editable content and repeat them as often as you like. | [✅️](https://github.com/snek-at/jaen/wiki/StreamField) |  |
| `IndexField`                  | fixedSlug <br/> outerElement <br/> renderItem | The IndexField provides you with the oppertunity to easily build links, buttons and more pointing to your subpages. It is also useful for building cards that rely on content from childpages.  <br /> With the fixedSlug property you can decide which page the childpages are pulled from. | [✅️](https://github.com/snek-at/jaen/wiki/IndexField) |  |

### Page Settings
```javascript
import {JaenTemplate} from '@snek-at/jaen-pages/src/types'

const HomePage: JaenTemplate = () => {...}

HomePage.TemplateName = 'HomePage'

export default HomePage
```

jaen-config.js
```javascript
[...]

pages: {
      resolve: require('@snek-at/jaen-pages'),
      templates: [require('./src/templates/yourpage/index.tsx')]
    }
    
[...]
```
gatsby-config.js
```javascript
[...]

plugins: [
    '@snek-at/jaen',
    {
      resolve: '@snek-at/jaen-pages',
      options: {
        templates: {
          HomePage: path.resolve('src/templates/home/index.tsx')
        }
      }
    }
  ]
  
[...]
```

### Fields
Fields are data blocks that you can use to build React apps which the enduser is able to maintain. 
Fieldnames have to be unique when they are on the same page.
It is advisable to give all the fields descriptive names.

#### TextField

The TextField is there to provide your react-components with editable content.
It requires you to give it a fieldName and an initValue.
The fieldName sets the name of the TextField for the CMS and the initValue sets the value the field has before it gets edited.
By default the TextField provides you with an editable RichText. If you only need a short one liner for a heading etc. you can set rtf to false to restrict the field.

```javascript
import {fields} from '@snek-at/jaen-pages'
import {JaenTemplate} from '@snek-at/jaen-pages/src/types'

const HomePage: JaenTemplate = () => {
  return(
    <fields.TextField 
      fieldName="hometext"
      initValue="<p>Your text</p>
      rtf={true}
    />
  )
}

HomePage.TemplateName="HomePage"
export default HomePage

```

#### ImageField

The ImageField is the Jaen field that allows you to embed images hosted on the ipfs. It requires both a fieldName and an initValue.<div align=right>[Wiki 📖](https://github.com/snek-at/jaen/wiki/ImageField)</div>

```javascript
import {fields} from '@snek-at/jaen-pages'
import {JaenTemplate} from '@snek-at/jaen-pages/src/types'

const HomePage: JaenTemplate = () => {
  return(
    <fields.ImageField 
      fieldName="homeimage"
      initValue={{src: "../../images/yourimage.imagetype", alt: "homeimage", title: "homeimage"}}
    />
  )
}

export default HomePage
```

#### StreamField
```javascript
import {StreamField} from '@snek-at/jaen'
import {CardBlock} from '...'

const HomePage: ConnectedPageType = () => {
  return (
    <div style={{width: '50%', display: 'table'}}>
      <StreamField
        reverseOrder={false}
        name={'timeline'}
        blocks={[CardBlock]}
      />
    </div>
  )
}

[...]

export default HomePage
```

#### IndexField
```javascript
import {IndexField} from '@snek-at/jaen'

const HomePage: ConnectedPageType = () => {
  return (
    <IndexField
      fixedSlug={'home'}
      outerElement={() => <div />}
      renderItem={(item, key, navigate) => (
        <p key={key}>
          Slug: {item.slug} Title: {item.title}{' '}
          <button onClick={() => navigate()}>Goto</button>
        </p>
       )}
    />
  )
}

[...]

export default HomePage
```

## [](#-how-to-report-a-bug-or-request-a-feature)🐞 How to Report a Bug or Request a Feature

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not
addressed yet, [please open a new issue](https://github.com/snek-at/jaen/issues/new/choose).

## [](#-how-to-contribute)🤝 How to Contribute
![GitHub last commit](https://img.shields.io/github/last-commit/snek-at/jaen)
![GitHub issues](https://img.shields.io/github/issues-raw/snek-at/jaen)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/snek-at/jaen?color=green)

Please read through our
[contributing guidelines](https://github.com/snek-at/jaen/blob/master/CONTRIBUTING.md). Included are
directions for opening issues, coding standards, and notes on development.

All code should conform to the [Code Guide](https://github.com/snek-at/tonic/blob/master/STYLE_GUIDE.md), maintained by
[snek-at](https://github.com/snek-at).

## [](#-thanks)💚 Thanks

We do not have any external contributors yet, but if you want your name to be here, feel free
to [contribute to our project](#contributing).

## [](#-creators)💼 Creators

<table border="0">
  <tr>
	  <td>
      <a href="https://github.com/schettn">
        <img src="https://avatars.githubusercontent.com/schettn?s=100" alt="Avatar schettn">
      </a>
    </td>
    <td>
      <a href="https://github.com/kleberbaum">
        <img src="https://avatars.githubusercontent.com/kleberbaum?s=100" alt="Avatar kleberbaum">
      </a>
    </td>
    <td>
      <a href="https://github.com/kleberbaum">
        <img src="https://avatars.githubusercontent.com/petute?s=100" alt="Avatar petute">
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://github.com/schettn">Nico Schett</a>
    </td>
    <td>
      <a href="https://github.com/kleberbaum">Florian Kleber</a>
    </td>
    <td>
      <a href="https://github.com/petute">Daniel<br/>Petutschnigg</a>
    </td>
  </tr>
</table>

## [](#-faqs)🤔 FAQs
**Q:** What do the roadmap categories mean?
* Shipped - Hopefully you are enjoying it! Give us feedback on how it is working!
* Almost There - We are applying the finishing touches. Things in this bucket you can expect to be shipped within 2-4 weeks. 
* We're Writing the Code - Actively in development, we are trying to get this out to you in a good state as soon as we can.
* Investigating - We're thinking about it. This might mean we're still designing, or thinking through how this might work. This is a great phase to send how you want to see something implemented! We'd love to see your usecase or design ideas here.

**Q:** Why are there no dates on your roadmap?

**A:** Because we know things change and we want the room to do the right thing by fixing security issues as they come up or helping people out where they need. This means we might have to change our priorities and don’t want to let people down. 

**Q:** How can I provide feedback or ask for more information?

**A:** Please open an issue in this repo! If the issue is a bug or security issue, please follow the separate instructions above.

**Q:** How can I request a feature be added to the roadmap?

**A:** Please open an issue! You can read about how to contribute [here](https://github.com/snek-at/jaen/blob/master/CONTRIBUTING.MD). Community submitted issues will be tagged "Proposed" and will be reviewed by the team.

## [](#-trivia):exploding_head: Trivia
#### Name:
In Austria the first month of the year is called "Jänner" since we started working on this project in January we decided to name the project Jaen.
#### Pronounciation:
The name Jaen is pronounced (Jän)ner [ˈjɛn] or (Jan)uary [ˈdʒæn].
#### Password:
The standard password in Jaen is **ciscocisco**. The origin of this password where back at our time in school. Most of us went to school for network engineering and in the cisco courses the standard password would always be ciscocisco.
#### Releases:
Every one of our Jaen releases has it's own theme song. Have fun with it.
#### Mascot:
The inofficial mascot of this project is a girl holding an electric guitar.

### <3


## [](#-copyright-and-license)📝 Copyright and License

![GitHub repository license](https://img.shields.io/badge/license-EUPL--1.2-blue)

Use of this source code is governed by an EUPL-1.2 license that can be found
in the LICENSE file at https://snek.at/license

<!--
  SPDX-FileCopyrightText: Copyright © 2021 snek.at
  SPDX-License-Identifier: EUPL-1.2
  Use of this source code is governed by an EUPL-1.2 license that can be found
  in the LICENSE file at https://snek.at/license
-->

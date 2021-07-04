/**
 * @license
 *
 * SPDX-FileCopyrightText: Copyright © 2021 snek.at
 * SPDX-License-Identifier: EUPL-1.2
 *
 * Use of this source code is governed by an EUPL-1.2 license that can be found
 * in the LICENSE file at https://snek.at/license
 */
import {Card} from 'antd'
import {BC, prepareBlocks, EditableField, RichTextField} from '~/index'

type CardBlockType = {title: string; extra: string; text: string}

export const CardBlock: BC<CardBlockType> = ({
  fieldOptions,
  streamFieldWidth
}) => {
  const blocks = prepareBlocks<CardBlockType>(CardBlock, fieldOptions)

  return (
    <>
      <Card
        type="inner"
        title={blocks['title']}
        style={{width: streamFieldWidth}}
        extra={<a href="#">{blocks['extra']}</a>}>
        {blocks['text']}
        {'test123'}
      </Card>
    </>
  )
}

CardBlock.BlockType = 'CardBlock'
CardBlock.BlockFields = {
  title: EditableField,
  extra: EditableField,
  text: RichTextField
}

export default CardBlock
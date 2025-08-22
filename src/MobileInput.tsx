import { Flex, Menu, ScrollArea, Text, TextInput, type TextInputProps } from '@mantine/core'
import { useElementSize } from '@mantine/hooks'
import { useState, type ChangeEvent, type FC } from 'react'
import { defaultCountries, FlagImage, parseCountry, usePhoneInput } from 'react-international-phone'

const MobileInput: FC<TextInputProps> = (props) => {
  const [opened, setOpened] = useState(false)
  const { ref: inputRef, width: inputWidth } = useElementSize()

  const { inputValue, handlePhoneValueChange, country, setCountry } = usePhoneInput({
    defaultCountry: 'in',
    countries: defaultCountries,
    onChange: ({ phone }) => {
      if (props?.onChange) {
        const event = { target: { value: phone } }
        const syntheticEvent = event as unknown as ChangeEvent<HTMLInputElement>
        props.onChange(syntheticEvent)
      }
    },
  })

  return (
    <TextInput
      {...props}
      type="tel"
      ref={inputRef}
      value={inputValue}
      leftSection={
        <Menu
          opened={opened}
          onChange={setOpened}
          position="bottom-start"
          shadow="lg"
          width={inputWidth}
        >
          <Menu.Target>
            <FlagImage iso2={country.iso2} width={25} />
          </Menu.Target>
          <Menu.Dropdown ml={-6}>
            <ScrollArea h={150}>
              {defaultCountries.map((rip) => {
                const country = parseCountry(rip)
                return (
                  <Menu.Item
                    key={country.iso2}
                    onClick={() => setCountry(country.iso2)}
                    leftSection={<FlagImage iso2={country.iso2} width={25} />}
                  >
                    <Flex gap={5}>
                      <Text fz="sm">+{country.dialCode}</Text>
                      <Text fz="sm">-</Text>
                      <Text fz="sm">{country.name}</Text>
                    </Flex>
                  </Menu.Item>
                )
              })}
            </ScrollArea>
          </Menu.Dropdown>
        </Menu>
      }
      onChange={handlePhoneValueChange}
    />
  )
}

export default MobileInput

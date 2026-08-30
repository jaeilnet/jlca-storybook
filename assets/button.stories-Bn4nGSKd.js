import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{i as n,n as r,r as i,t as a}from"./button-CQbpG0Ln.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),r(),o=t(),s={title:`Primitives/Button`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`danger`,`success`,`outline`,`ghost`,`link`],description:`JLCA semantic action role`},size:{control:`select`,options:[`sm`,`md`,`lg`,`icon`],description:`Published Button size`},fullWidth:{control:`boolean`,description:`Fill the available inline size`},disabled:{control:`boolean`,description:`Disable native button interactions`},asChild:{control:`boolean`,description:`Compose onto the only child element`}}},c={args:{children:`Primary Button`,size:`md`,variant:`primary`}},l={render:()=>(0,o.jsxs)(i,{gap:`4`,children:[(0,o.jsx)(a,{variant:`primary`,children:`Primary`}),(0,o.jsx)(a,{variant:`secondary`,children:`Secondary`}),(0,o.jsx)(a,{variant:`danger`,children:`Danger`}),(0,o.jsx)(a,{variant:`success`,children:`Success`}),(0,o.jsx)(a,{variant:`outline`,children:`Outline`}),(0,o.jsx)(a,{variant:`ghost`,children:`Ghost`}),(0,o.jsx)(a,{variant:`link`,children:`Link`})]})},u={render:()=>(0,o.jsxs)(i,{gap:`4`,wrap:!1,children:[(0,o.jsx)(a,{size:`sm`,children:`Small`}),(0,o.jsx)(a,{size:`md`,children:`Medium`}),(0,o.jsx)(a,{size:`lg`,children:`Large`}),(0,o.jsx)(a,{"aria-label":`Launch`,size:`icon`,children:`🚀`})]})},d={render:()=>(0,o.jsxs)(i,{gap:`4`,wrap:!1,children:[(0,o.jsx)(a,{disabled:!0,children:`Disabled`}),(0,o.jsx)(a,{fullWidth:!0,children:`Full width`}),(0,o.jsx)(a,{asChild:!0,variant:`outline`,children:(0,o.jsx)(`a`,{href:`#button-composition`,children:`Composed link`})})]})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    size: 'md',
    variant: 'primary'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </Group>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="4" wrap={false}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button aria-label="Launch" size="icon">
        🚀
      </Button>
    </Group>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Group gap="4" wrap={false}>
      <Button disabled>Disabled</Button>
      <Button fullWidth>Full width</Button>
      <Button asChild variant="outline">
        <a href="#button-composition">Composed link</a>
      </Button>
    </Group>
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`AllVariants`,`AllSizes`,`States`]})))()}p();export{u as AllSizes,l as AllVariants,c as Primary,d as States,f as __namedExportsOrder,s as default};
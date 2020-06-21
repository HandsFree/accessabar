import {h, VNode} from 'hyperapp';

interface CustomList {
  currentItem: string;
  listItems: VNode[];
  active: boolean;
  customListID: string;
  openList(state: Ace.State): unknown;
}

const customList = ({
  listItems,
  active,
  openList,
  currentItem,
  customListID,
}: CustomList) => {
  return h('ab-custom-list', {class: 'ab-custom-list ab-flex ab-flex-column'}, [
    h(
      'ab-custom-list-box',
      {
        class: `ab-custom-list-box ab-flex ${active ? 'ab-active' : ''}`,
        id: customListID,
        onclick: openList,
      },
      currentItem
    ),
    h(
      'ab-custom-list-selection',
      {
        'aria-labelledby': customListID,
        class: `ab-custom-list-selection ${
          active ? 'ab-flex' : 'ab-hide'
        } ab-flex-column`,
        role: 'listbox',
      },
      listItems
    ),
  ]);
};

const customListItemFactory = (listItems: Ace.ListItem[]): VNode[] => {
  const list: VNode[] = [];

  for (const obj of listItems) {
    const item = h(
      'ab-custom-list-selection-item',
      {
        class: 'ab-custom-list-selection-item',
        onclick: [obj.action, obj.key],
        role: 'option',
      },
      obj.name
    );

    list.push(item);
  }

  return list;
};

export default customList;
export {customList, customListItemFactory};

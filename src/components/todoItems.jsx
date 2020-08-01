import React, { Component } from "react";
import TodoItem from "./todoItem";
import StateManipulationHeader from "./stateManipulationHeader";
import { toast } from "react-toastify";
import FilterItems from "./filterItems";

class TodoItems extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "Buy breakfast",
        description: "Go to store do purchase",
        starred: true,
        isFinished: true,
      },
      {
        id: 2,
        title: "Code",
        description: "Implement components",
        starred: false,
        isFinished: false,
      },
      {
        id: 3,
        title: "Clean house",
        description: "Take care of your stuff",
        starred: true,
        isFinished: false,
      },
      {
        id: 4,
        title: "Go to walk",
        description: "Walk to park and take some breath",
        starred: true,
        isFinished: true,
      },
    ],

    renderItemManipulation: false,

    manipulatingItem: null,

    searchQuery: "",

    showFinished: true,
    showUnfinished: true,

    showStarred: true,
    showUnstared: true,
  };

  render() {
    let items = this.filterItems();

    let { length: tasksCount } = items.filter((x) => x.isFinished === false);

    return (
      <React.Fragment>
        <FilterItems
          onResetFilters={this.handleResetFilters}
          checkedFinished={this.state.showFinished}
          checkedUnfinished={this.state.showUnfinished}
          checkedStarred={this.state.showStarred}
          checkedUnstared={this.state.showUnstared}
          setStatePropertyValue={this.setStatePropertyValue}
        ></FilterItems>

        <StateManipulationHeader
          onCreateNewItem={this.handleCreateNewItem}
          onResetState={this.handleReset}
          renderItemManipulation={this.state.renderItemManipulation}
          manipulatingItem={this.state.manipulatingItem}
          onSave={this.SaveItem}
          onCancel={this.CancelManipulation}
          searchQuery={this.state.searchQuery}
          onSearchChange={this.handleSearch}
        ></StateManipulationHeader>

        {items.length > 0 ? (
          items.map((item) => (
            <TodoItem
              key={item.id}
              onFinishTask={this.handleFinish}
              onHighlight={this.handleHighlight}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
              item={item}
            ></TodoItem>
          ))
        ) : (
          <h1>No items available</h1>
        )}

        <hr />
        <div className="row pull-right">
          <p>Tasks left: {tasksCount}</p>
        </div>
      </React.Fragment>
    );
  }

  //#region Helper methods

  filterItems = () => {
    const {
      searchQuery,
      showFinished,
      showUnfinished,
      showStarred,
      showUnstared,
    } = this.state;

    if ((!showFinished && !showUnfinished) || (!showStarred && !showUnstared))
      return [];

    if (
      searchQuery === "" &&
      showFinished &&
      showUnfinished &&
      showStarred &&
      showUnstared
    )
      return this.state.items;

    return this.state.items.filter(
      (x) =>
        (x.title.toLowerCase().includes(searchQuery) ||
          x.description.toLowerCase().includes(searchQuery)) &&
        (x.isFinished === showFinished || x.isFinished !== showUnfinished) &&
        (x.starred === showStarred || x.starred !== showUnstared)
    );
  };

  setStatePropertyValue = (name, value) => {
    this.setState({ [name]: value });
  };
  //#endregion

  //#region Event handlers

  handleFinish = (item) => {
    let elements = [...this.state.items];
    let index = elements.indexOf(item);
    if (index === -1) throw new Error("Element not found");

    elements[index].isFinished = !elements[index].isFinished;
    this.setState({ items: elements });

    if (item.isFinished === true) toast.success("Task finished!");
  };

  handleHighlight = (item) => {
    let elements = [...this.state.items];
    let index = elements.indexOf(item);
    elements[index].starred = !elements[index].starred;
    this.setState({ items: elements });

    if (item.starred === true) toast.success("Task highlighted");
  };

  handleDelete = (item) => {
    this.setState({ items: this.state.items.filter((x) => x.id !== item.id) });
    toast.success("Successfully deleted");
  };

  handleEdit = (item) => {
    this.setState({ renderItemManipulation: true, manipulatingItem: item });
  };

  handleReset = () => {
    this.setState({
      items: this.state.items.map((x) => {
        x.isFinished = false;
        return x;
      }),
      renderItemManipulation: false,
      manipulatingItem: null,
    });
    this.handleResetFilters();
    toast.warning("State reseted!");
  };

  handleResetFilters = () =>
    this.setState({
      showFinished: true,
      showUnfinished: true,
      showStarred: true,
      showUnstared: true,
    });

  handleCreateNewItem = () => {
    this.setState({
      renderItemManipulation: !this.state.renderItemManipulation,
      manipulatingItem: null,
    });
  };

  SaveItem = (item) => {
    let items = this.state.items;
    if (item.id === 0) {
      items.push(item);
      toast.success("Task saved");
    } else {
      let index = items.indexOf(item);
      items[index] = item;
      toast.success("Task edited");
    }
    this.setState({
      items: items,
      renderItemManipulation: false,
      manipulatingItem: null,
    });
  };

  CancelManipulation = () => {
    this.setState({
      renderItemManipulation: false,
      manipulatingItem: null,
    });
  };

  handleSearch = ({ currentTarget: input }) => {
    this.setState({
      searchQuery: input.value.toLowerCase(),
    });
  };

  //#endregion
}

export default TodoItems;

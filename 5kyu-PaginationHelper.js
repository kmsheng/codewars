// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
 return Math.ceil(this.collection.length / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  if (pageIndex < 0 || (pageIndex > this.pageCount() - 1)) {
    return -1;
  }
  const start = pageIndex * this.itemsPerPage;
  return this.collection.slice(start, start + this.itemsPerPage).length;
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if (itemIndex > this.collection.length - 1) {
    return -1;
  }
  if (itemIndex < 0) {
    return -1;
  }
  if (itemIndex === 0) {
    return 0;
  }
  return Math.ceil(itemIndex / this.itemsPerPage) - 1;
}

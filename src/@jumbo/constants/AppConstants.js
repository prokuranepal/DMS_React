export const AppHeaderHeight = 72;
export const AppHeaderHeightSm = 64;
export const AppFooterHeight = 72;
export const AppFooterHeightSm = 64;
export const AppMainContentPadding = 60;
export const InBuildAppHeaderHeight = 70;

export const InBuildAppSidebarHeaderHeight = 86;
export const MailAppContentHeaderHeight = 78;

export const TaskDetailHeaderHeight = 72;
export const TaskDetailAddCommentHeight = 72;

export const ChatSidebarHeaderHeight = 124;
export const ChatSidebarTabContainerHeight = 49;
export const ChatFooterHeight = 70;
export const CurrentAuthMethod = 'basic'; //jwtAuth,firebase,basic

export const getAppSidebarHeight = (width, visibleAppFooter) => {
  switch (width) {
    case 'xs':
      return (
        AppHeaderHeightSm +
        AppMainContentPadding +
        InBuildAppHeaderHeight +
        InBuildAppSidebarHeaderHeight +
        (visibleAppFooter ? AppFooterHeightSm : 0)
      );
    case 'sm':
      return (
        AppHeaderHeightSm +
        AppMainContentPadding +
        InBuildAppHeaderHeight +
        InBuildAppSidebarHeaderHeight +
        (visibleAppFooter ? AppFooterHeightSm : 0)
      );
    default:
      return (
        AppHeaderHeight +
        AppMainContentPadding +
        InBuildAppHeaderHeight +
        InBuildAppSidebarHeaderHeight +
        (visibleAppFooter ? AppHeaderHeight : 0)
      );
  }
};

export const getMailContainerHeight = (width, visibleAppFooter) => {
  switch (width) {
    case 'xs':
      return (
        AppHeaderHeightSm +
        AppMainContentPadding +
        InBuildAppHeaderHeight +
        MailAppContentHeaderHeight +
        (visibleAppFooter ? AppFooterHeightSm : 0)
      );
    case 'sm':
      return (
        AppHeaderHeightSm +
        AppMainContentPadding +
        InBuildAppHeaderHeight +
        MailAppContentHeaderHeight +
        (visibleAppFooter ? AppFooterHeightSm : 0)
      );
    default:
      return (
        AppHeaderHeight +
        AppMainContentPadding +
        InBuildAppHeaderHeight +
        MailAppContentHeaderHeight +
        (visibleAppFooter ? AppFooterHeight : 0)
      );
  }
};

export const getContactContainerHeight = (width, visibleAppFooter) => {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);
    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);
    default:
      return AppHeaderHeight + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

export const getTaskListSidebarHeight = (width, visibleAppFooter) => {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);
    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);
    default:
      return AppHeaderHeight + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

export const getTaskListContainerHeight = (width, visibleAppFooter) => {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);
    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeightSm : 0);
    default:
      return AppHeaderHeight + AppMainContentPadding + InBuildAppHeaderHeight + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

export const getTaskDetailContainerHeight = (width, visibleAppFooter) => {
  switch (width) {
    case 'xs':
      return (
        AppHeaderHeightSm +
        AppMainContentPadding +
        TaskDetailHeaderHeight +
        TaskDetailAddCommentHeight +
        (visibleAppFooter ? AppFooterHeightSm : 0)
      );
    case 'sm':
      return (
        AppHeaderHeightSm +
        AppMainContentPadding +
        TaskDetailHeaderHeight +
        TaskDetailAddCommentHeight +
        (visibleAppFooter ? AppFooterHeightSm : 0)
      );
    default:
      return (
        AppHeaderHeight +
        AppMainContentPadding +
        TaskDetailHeaderHeight +
        TaskDetailAddCommentHeight +
        (visibleAppFooter ? AppFooterHeight : 0)
      );
  }
};

export const getChatSidebarHeight = (width, visibleAppFooter) => {
  switch (width) {
    case 'xs':
      return (
        AppHeaderHeightSm +
        AppMainContentPadding +
        ChatSidebarHeaderHeight +
        ChatSidebarTabContainerHeight +
        (visibleAppFooter ? AppFooterHeightSm : 0)
      );
    case 'sm':
      return (
        AppHeaderHeightSm +
        AppMainContentPadding +
        ChatSidebarHeaderHeight +
        ChatSidebarTabContainerHeight +
        (visibleAppFooter ? AppFooterHeightSm : 0)
      );
    default:
      return (
        AppHeaderHeight +
        AppMainContentPadding +
        ChatSidebarHeaderHeight +
        ChatSidebarTabContainerHeight +
        (visibleAppFooter ? AppFooterHeight : 0)
      );
  }
};

export const getChatContainerHeight = (width, visibleAppFooter) => {
  switch (width) {
    case 'xs':
      return (
        AppHeaderHeightSm +
        AppMainContentPadding +
        InBuildAppHeaderHeight +
        ChatFooterHeight +
        (visibleAppFooter ? AppFooterHeightSm : 0)
      );
    case 'sm':
      return (
        AppHeaderHeightSm +
        AppMainContentPadding +
        InBuildAppHeaderHeight +
        ChatFooterHeight +
        (visibleAppFooter ? AppFooterHeightSm : 0)
      );
    default:
      return (
        AppHeaderHeight +
        AppMainContentPadding +
        InBuildAppHeaderHeight +
        ChatFooterHeight +
        (visibleAppFooter ? AppFooterHeight : 0)
      );
  }
};

export const getWallHeight = (width, visibleAppFooter) => {
  switch (width) {
    case 'xs':
      return AppHeaderHeightSm + AppMainContentPadding + (visibleAppFooter ? AppFooterHeightSm : 0);
    case 'sm':
      return AppHeaderHeightSm + AppMainContentPadding + (visibleAppFooter ? AppFooterHeightSm : 0);
    default:
      return AppHeaderHeight + AppMainContentPadding + (visibleAppFooter ? AppFooterHeight : 0);
  }
};

export type targetType = {
  target: {
    name: any; senderName: string, senderEmail: string, senderSubject: string, senderMessage: string, value?: string, 
}
}

export type senderDataType = {
   senderName: string, senderEmail: string, senderSubject: string, senderMessage: string, 
}

export type touchedFields = {
  senderName: boolean;
  senderEmail: boolean,
  senderSubject: boolean,
  senderMessage: boolean,

  touchedName?: boolean,
  touchedEmail?: boolean,
  touchedSubject?: boolean,
  touchedMessage?: boolean,
};

export type tempDataType = {
  userEmailAddress: string,
  userTitle: string,
  userContent: string,
}